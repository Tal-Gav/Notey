import { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";

import CreateNoteButton from "../../components/CreateNoteButton/CreateNoteButton";
import Note from "../../components/Note/Note";
import axios from "axios";

export default function MyNotes() {
  const [notes, setNotes] = useState([]);
  const getNotes = () => {
    axios
      .get("http://localhost:5555/notes", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.notes);
        setNotes(res.data.notes);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  useEffect(() => {
    getNotes();
  }, []);
  return (
    <Grid container spacing={2} direction="row">
      {notes.map((note, index) => (
        <Grid item key={index}>
          <Note id={note._id} title={note.title} content={note.content} />
        </Grid>
      ))}
      <CreateNoteButton />
    </Grid>
  );
}
