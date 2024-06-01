import { Box, IconButton } from "@mui/material";
import createNoteIcon from "../../assets/create-note.svg";
import discardNoteIcon from "../../assets/x.svg";
import saveNoteIcon from "../../assets/v.svg";
import { setIsCreateNoteMode } from "../../store/isCreateNoteModeSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";

const CreateNoteButton = () => {
  const dispatch = useDispatch();
  const isCreateNoteMode = useSelector((state) => state.isCreateNoteMode);
  const newNoteTitle = useSelector((state) => state.newNote.title);
  const newNoteContent = useSelector((state) => state.newNote.content);

  const handleSaveNote = () => {
    dispatch(setIsCreateNoteMode(!isCreateNoteMode));
    axios
      .post(
        "http://localhost:5555/notes",
        { title: newNoteTitle, content: newNoteContent },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
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
              dispatch(setIsCreateNoteMode(!isCreateNoteMode));
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
            dispatch(setIsCreateNoteMode(!isCreateNoteMode));
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
