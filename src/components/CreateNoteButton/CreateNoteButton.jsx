import { Box, IconButton } from "@mui/material";
import createNoteIcon from "../../assets/create-note.svg";
import discardNoteIcon from "../../assets/x.svg";
import saveNoteIcon from "../../assets/v.svg";
import { setIsCreateNoteMode } from "../../store/isCreateNoteModeSlice";
import { useDispatch, useSelector } from "react-redux";

const CreateNoteButton = () => {
  const dispatch = useDispatch();
  const isCreateNoteMode = useSelector((state) => state.isCreateNoteMode);

  // const handleSaveNoteBtn = (event) => {
  //   event.preventDefault();
  //   const form = new FormData(event.target);
  //   handleNote(form);
  // };

  // const handleNote = (form) => {
  //   const note = {
  //     title: form.get("title"),
  //     content: form.get("content"),
  //   };
  //   axios
  //     .post("http://localhost:5555/notes", note, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       alert(res.data.message);
  //     })
  //     .catch((error) => {
  //       alert(error.response.data.message);
  //     });
  // };

  return (
    <Box>
      {isCreateNoteMode ? (
        <Box display={"flex"} flexDirection={"column"}>
          <IconButton
            form="note"
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              // const form = new FormData(event.target);
              console.log(event.target);
              dispatch(setIsCreateNoteMode(!isCreateNoteMode));
            }}
          >
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
