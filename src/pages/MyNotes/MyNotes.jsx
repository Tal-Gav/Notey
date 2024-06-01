import { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";

import CreateNoteButton from "../../components/CreateNoteButton/CreateNoteButton";
import Note from "../../components/Note/Note";
import axios from "axios";
import { setFetchedNotes } from "../../store/actions";
import Notey from "../../components/Notey";
import { Box, Container } from "@mui/material";

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
    <>
      <Container
        component="main"
        sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        <Grid container spacing={2} direction="row">
          {notes.map((note, index) => {
            return (
              <Grid item key={note._id}>
                <Notey
                  title={note.title}
                  content={note.content}
                  id={note._id}
                />
              </Grid>
            );
          })}
        </Grid>

        {isCreateNoteMode && (
          <>
            <Notey />
          </>
        )}
        <CreateNoteButton />
      </Container>
    </>
  );
}
