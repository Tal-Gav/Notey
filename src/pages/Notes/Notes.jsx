import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

import CreateNoteButton from "../../components/CreateNoteButton/CreateNoteButton";
import Note from "../../components/Note";
import NewNote from "../../components/NewNote";
import axios from "axios";
import { useSelector } from "react-redux";
import { Box, Container } from "@mui/material";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const isCreateNoteMode = useSelector((state) => state.isCreateNoteMode);

  const getNotes = () => {
    axios
      .get("http://localhost:5555/notes", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        setNotes(res.data.notes);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  useEffect(() => {
    getNotes();
  }, []);
  return (
    <Box display={"flex"}>
      {notes.map((note, index) => (
        <Note note={note} key={index} />
      ))}

      {isCreateNoteMode && <NewNote key={"createNote"} />}
      <CreateNoteButton />
    </Box>
  );
};
export default Notes;
