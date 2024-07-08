import { toast } from "react-toastify";
import { Box, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import createNoteIcon from "../assets/create-note.svg";
import discardNoteIcon from "../assets/x.svg";
import saveNoteIcon from "../assets/v.svg";
import { setIsCreateNoteMode } from "../store/isCreateNoteModeSlice";
import { addNote } from "../store/notesSlice";
import { clearNoteFields } from "../store/newNoteSlice";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const CreateNoteButton = () => {
  const dispatch = useDispatch();
  const isCreateNoteMode = useSelector((state) => state.isCreateNoteMode);
  const newNoteTitle = useSelector((state) => state.newNote.title);
  const axiosPrivate = useAxiosPrivate();
  const newNoteContent = useSelector((state) => state.newNote.content);

  const handleSaveNote = async () => {
    try {
      const newNote = { title: newNoteTitle, content: newNoteContent };

      const res = await axiosPrivate.post("/notes", newNote);
      const newNoteWithId = { ...newNote, _id: res.data._id };

      dispatch(addNote(newNoteWithId));
      dispatch(setIsCreateNoteMode(false));
      dispatch(clearNoteFields());

      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Box>
      {isCreateNoteMode ? (
        <Box display={"flex"} flexDirection={"column"}>
          <IconButton form="note" type="submit" onClick={handleSaveNote}>
            <img
              src={saveNoteIcon}
              style={{
                width: "3vw",
                filter:
                  "invert(10%) sepia(100%) saturate(5422%) hue-rotate(267deg) brightness(108%) contrast(128%)",
              }}
              alt="Save Note"
            />
          </IconButton>
          <IconButton
            onClick={() => {
              dispatch(setIsCreateNoteMode(false));
              dispatch(clearNoteFields());
            }}
          >
            <img
              src={discardNoteIcon}
              style={{
                width: "4vw",
                filter:
                  "invert(10%) sepia(100%) saturate(5422%) hue-rotate(267deg) brightness(108%) contrast(128%)",
              }}
              alt="Discard Note"
            />
          </IconButton>
        </Box>
      ) : (
        <IconButton
          onClick={() => {
            dispatch(setIsCreateNoteMode(true));
          }}
        >
          <img
            src={createNoteIcon}
            style={{
              width: "4vw",
              filter:
                "invert(10%) sepia(100%) saturate(5422%) hue-rotate(267deg) brightness(108%) contrast(128%)",
            }}
            alt="Create Note"
          />
        </IconButton>
      )}
    </Box>
  );
};

export default CreateNoteButton;
