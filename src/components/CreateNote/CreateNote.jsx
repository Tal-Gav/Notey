import { useState } from "react";
import Box from "@mui/material/Box";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import IconButton from "@mui/material/IconButton";
import Note from "../Note/Note";

const CreateNote = ({ setNoteEditMode }) => {
  const handleNoteBtnClick = () => {
    setNoteEditMode(true);
  };
  return (
    <>
      <Box
        height={200}
        width={200}
        my={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        gap={4}
        p={2}
        sx={{ border: "2px dashed grey", flexDirection: "row" }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          onClick={handleNoteBtnClick}
        >
          <NoteAddIcon sx={{ fontSize: 100 }} />
        </IconButton>
      </Box>
    </>
  );
};

const CreateNewNote = () => {
  const [noteEditMode, setNoteEditMode] = useState(false);

  return (
    <>
      <CreateNote setNoteEditMode={setNoteEditMode} />
      {noteEditMode ? <Note /> : null}
    </>
  );
};

export default CreateNewNote;
