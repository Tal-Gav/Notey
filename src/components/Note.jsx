import {
  Box,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Tooltip } from "react-tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Note = ({ note }) => {
  console.log(note);
  const [noteId, setNoteId] = useState(note && note._id);
  const [noteTitle, setNoteTitle] = useState(note && note.title);
  const [noteContent, setNoteContent] = useState(note && note.content);
  console.log("noteTitle", noteTitle);

  // TODO: Fix the update
  const handleNoteUpdate = () => {
    const updatedNote = {
      title: noteTitle,
      content: noteContent,
    };

    axios
      .put("http://localhost:5555/notes/" + noteId, updatedNote, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const handleNoteDelete = () => {
    axios
      .delete("http://localhost:5555/notes/" + noteId, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        // dispatch(deleteNote(noteId));
        toast.success(res.data.message);
        // navigate("/");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <>
      <Box
        m={2}
        sx={{
          display: "flex",
          width: "20vw",
          height: "20vw",
          borderRadius: "2em",
          boxShadow: "0px 0px 20px 0px #5730bfb3",
          bgcolor: "white",
          flexDirection: "column",
          alignItems: "center",
        }}
        data-tooltip-id={`${noteId}-tooltip`}
        data-tooltip-place="bottom"
      >
        <Box pt={2} />
        <Container component="main" maxWidth="xs">
          {note && (
            <Typography fontSize={"0.8em"} color={"#A1A1A1"}>
              id: {noteId}
            </Typography>
          )}
          <Box pt={1.2} />
          <TextField
            onChange={(e) => setNoteTitle(e.target.value)}
            variant="outlined"
            value={noteTitle}
            label="Title"
            fullWidth
            InputProps={{
              style: {
                borderRadius: "1em",
              },
            }}
            sx={{
              "& label.Mui-focused": {
                color: "#6F00FF",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#6F00FF",
                },
              },
            }}
          />
          <Box pt={2} />
          <TextField
            variant="outlined"
            onChange={(e) => setNoteContent(e.target.value)}
            value={noteContent}
            label="Content"
            fullWidth
            multiline
            rows={5}
            InputProps={{
              style: {
                borderRadius: "1em",
              },
            }}
            sx={{
              "& label.Mui-focused": {
                color: "#6F00FF",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#6F00FF",
                },
              },
            }}
          />
        </Container>
      </Box>
      {note && (
        <Tooltip id={`${noteId}-tooltip`} clickable>
          <IconButton onClick={handleNoteDelete}>
            <DeleteIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton onClick={handleNoteUpdate}>
            <SaveRoundedIcon sx={{ color: "white" }} />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
};

export default Note;
