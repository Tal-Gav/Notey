import {
  Box,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setNoteContent, setNoteTitle } from "../store/noteSlice";
import { Tooltip } from "react-tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { updateNote } from "../store/actions";

const Notey = (props) => {
  const { id, title, content } = props;
  const [noteId, setNoteId] = useState(id ?? "");
  const [noteTitle, setNoteTitle] = useState(title ?? "");
  const [noteContent, setNoteContent] = useState(content ?? "");

  // TODO: Fix the update
  const handleNoteUpdate = () => {
    const updatedNote = {
      title: noteTitle,
      content: noteContent,
    };

    console.log(noteId, updatedNote);
    axios
      .put("http://localhost:5555/notes/" + noteId, updatedNote, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        // dispatch(updateNote(res.data.note));
        alert(res.data.message);
      })
      .catch((error) => {
        alert(error.response.data.message);
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
        alert(res.data.message);
        // navigate("/");
      })
      .catch((error) => {
        alert(error.response.data.message);
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
        data-tooltip-id={"my-tooltip"}
        data-tooltip-place="bottom"
      >
        <Box pt={2} />
        <Container component="main" maxWidth="xs">
          <Typography fontSize={"0.8em"} color={"#A1A1A1"}>
            id: {noteId}
          </Typography>
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
      <Tooltip id="my-tooltip" clickable>
        <IconButton onClick={handleNoteDelete}>
          <DeleteIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton onClick={handleNoteUpdate}>
          <SaveRoundedIcon sx={{ color: "white" }} />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default Notey;
