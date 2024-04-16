import { useState } from "react";
import Box from "@mui/material/Box";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import NewNote from "../NewNote/NewNote";

const CreateNote = ({ isNoteEditMode, setIsNoteEditMode }) => {
  const handleNoteBtnClick = () => {
    setIsNoteEditMode(!isNoteEditMode);
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
          {isNoteEditMode ? (
            <ClearIcon sx={{ fontSize: 100 }} />
          ) : (
            <NoteAddIcon sx={{ fontSize: 100 }} />
          )}
        </IconButton>
      </Box>
    </>
  );
};

const CreateNewNote = () => {
  const [isNoteEditMode, setIsNoteEditMode] = useState(false);

  return (
    <>
      {isNoteEditMode ? <NewNote /> : null}
      <CreateNote
        isNoteEditMode={isNoteEditMode}
        setIsNoteEditMode={setIsNoteEditMode}
      />
    </>
  );
};

export default CreateNewNote;
