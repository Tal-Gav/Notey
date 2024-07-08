import { useEffect, useState } from "react";
import CreateNoteButton from "../../components/CreateNoteButton";
import Note from "../../components/Note";
import NewNote from "../../components/NewNote";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { MutatingDots } from "react-loader-spinner";
import whiteBackground from "../../assets/white.jpg";
import useFetchNotes from "../../hooks/useFetchNotes";

const Notes = () => {
  const isCreateNoteMode = useSelector((state) => state.isCreateNoteMode);
  const fetchNotes = useFetchNotes();
  const notes = useSelector((state) => state.notes.notes);
  const [loading, setLoading] = useState(true);

  const getNotes = async () => {
    await fetchNotes();
    setLoading(false);
  };
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"}>
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
