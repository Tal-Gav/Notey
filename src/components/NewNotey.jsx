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

const Notey = ({ note = {} }) => {
  const formRef = useRef(null);
  const dispatch = useDispatch();

  const handleTitleInputChange = (event) => {
    dispatch(setNoteTitle(event.target.value));
  };

  const handleContentInputChange = (event) => {
    dispatch(setNoteContent(event.target.value));
  };

  // TODO: Fix the update
  const handleNoteUpdate = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    console.log(event);
    const updatedNote = {
      title: form.get("title"),
      content: form.get("content"),
    };
    console.log(note._id, updatedNote);
    axios
      .put("http://localhost:5555/notes/" + note._id, updatedNote, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        dispatch(updateNote(updateNote));
        alert(res.data.message);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  const handleNoteDelete = () => {
    axios
      .delete("http://localhost:5555/notes/" + note._id, {
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
      <form noValidate onSubmit={handleNoteUpdate}>
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
          data-tooltip-id={note.title && "my-tooltip"}
          data-tooltip-place="bottom"
        >
          <Box pt={2} />
          <Container component="main" maxWidth="xs">
            {note.title && (
              <Typography fontSize={"0.8em"} color={"#A1A1A1"}>
                id: {note._id}
              </Typography>
            )}
            <Box pt={1.2} />
            <TextField
              variant="outlined"
              defaultValue={note.title && note.title}
              onChange={handleTitleInputChange}
              name="title"
              label="Title"
              id="title"
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
              defaultValue={note.content && note.content}
              onChange={handleContentInputChange}
              name="content"
              label="Content"
              id="content"
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
          <IconButton type="submit">
            <SaveRoundedIcon sx={{ color: "white" }} />
          </IconButton>
        </Tooltip>
      </form>
    </>
  );
};

export default Notey;
