import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import CreateNoteButton from "../../components/CreateNoteButton/CreateNoteButton";
import Note from "../../components/Note";
import NewNote from "../../components/NewNote";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { toast } from "react-toastify";
import { fetchNotes, deleteNote, updateNote } from "../../store/notesSlice";
import { MutatingDots } from "react-loader-spinner";
import whiteBackground from "../../assets/white.jpg";

const Notes = () => {
  const isCreateNoteMode = useSelector((state) => state.isCreateNoteMode);
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);
  const fetchStatus = useSelector((state) => state.notes.fetchStatus);
  const fetchMessage = useSelector((state) => state.notes.fetchMessage);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (fetchStatus === "idle") {
      dispatch(fetchNotes());
    }
  }, [fetchStatus, dispatch]);

  useEffect(() => {
    if (fetchStatus === "succeeded") {
      setLoading(false);
      toast.success(fetchMessage);
    } else if (fetchStatus === "failed") {
      setLoading(false);
      toast.error(fetchMessage);
    }
  }, [fetchStatus, fetchMessage]);

  return (
    <Box
      display={"flex"}
      flexWrap={"wrap"}
      sx={{
        display: "flex",
        height: "100vh",
        backgroundImage: `url(${whiteBackground})`,
        backgroundSize: "cover",
      }}
    >
      {loading ? (
        <MutatingDots
          visible={true}
          height="100"
          width="100"
          color="#5730bf"
          secondaryColor="#5730bf"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
        />
      ) : (
        <>
          {notes.map((note, index) => (
            <Note note={note} key={note._id} />
          ))}
          {isCreateNoteMode && <NewNote />}
          <CreateNoteButton />
        </>
      )}
    </Box>
  );
};

export default Notes;
