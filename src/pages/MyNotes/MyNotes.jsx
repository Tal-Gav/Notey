import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import CreateNoteButton from "../../components/CreateNoteButton/CreateNoteButton";
import Note from "../../components/Note/Note";
import axios from "axios";
import { setFetchedNotes } from "../../store/actions";
import Notey from "../../components/Notey";
import { Box, Container } from "@mui/material";

export default function MyNotes() {
  const notes = useSelector((state) => state.notes.notes);
  const isCreateNoteMode = useSelector((state) => state.isCreateNoteMode);

  const dispatch = useDispatch();

  const getNotes = () => {
    axios
      .get("http://localhost:5555/notes", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data.notes);
        dispatch(setFetchedNotes(res.data.notes));
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data.message);
      });
  };

  useEffect(() => {
    getNotes();
  }, []);
  return (
    <>
      <Grid container direction="row">
        {notes &&
          notes.map((note, index) => (
            <Grid item key={index}>
              <Note id={note._id} title={note.title} content={note.content} />
            </Grid>
          ))}
      </Grid>

      <Container
        component="main"
        sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
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
