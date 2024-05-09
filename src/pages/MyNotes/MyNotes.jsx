import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";

import CreateNoteButton from "../../components/CreateNoteButton/CreateNoteButton";
import Note from "../../components/Note/Note";
import axios from "axios";

export default function MyNotes() {
  const navigate = useNavigate();
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
        setNotes(res.data.notes);
      })
      .catch((error) => {
        try {
          if (error.response.status === 403) navigate("/no-access");
        } catch {
          alert(error);
        }
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
