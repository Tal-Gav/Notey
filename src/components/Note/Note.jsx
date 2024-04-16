import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const Note = (props) => {
  const { id, title, content } = props;
  const [noteId, setNoteId] = useState(id ?? "");
  const [noteTitle, setNoteTitle] = useState(title ?? "");
  const [noteContent, setNoteContent] = useState(content ?? "");

  const handleSaveNoteBtn = () => {
    handleNoteUpdate();
  };

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
        alert(res.data.message);
        // navigate("/");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <Box
      height={200}
      width={200}
      my={4}
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={2}
      overflow="hidden"
    >
      <Card
        variant="outlined"
        sx={{ maxWidth: "100%", maxHeight: "100%", overflow: "auto" }}
      >
        <CardContent style={{ position: "relative" }}>
          <Typography component="h1" fontSize="12">
            id: #{noteId}
          </Typography>
          <div style={{ position: "absolute", top: 0, right: 0 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleNoteDelete}
            >
              <DeleteIcon fontSize="large" />
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleSaveNoteBtn}
            >
              <SaveIcon fontSize="large" />
            </IconButton>
          </div>
          <br />
          <TextField
            label="Title"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
            variant="standard"
          />
          <TextField
            label="Content"
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
            multiline
            rows={4}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Note;
