import {
  Box,
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import { deleteNote, updateNote } from "../store/notesSlice";
import { useDispatch } from "react-redux";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const Note = ({ note }) => {
  const axiosPrivate = useAxiosPrivate();
  const [noteId, setNoteId] = useState(note._id);
  const [noteTitle, setNoteTitle] = useState(note.title);
  const [noteContent, setNoteContent] = useState(note.content);
  const dispatch = useDispatch();

  const handleNoteUpdate = async () => {
    try {
      const updatedNote = {
        _id: noteId,
        title: noteTitle,
        content: noteContent,
      };
      const res = await axiosPrivate.put("/notes/" + noteId, updatedNote);
      toast.success(res.data.message);
      dispatch(updateNote(updatedNote));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleNoteDelete = async () => {
    try {
      const res = await axiosPrivate.delete("/notes/" + noteId);
      dispatch(deleteNote(noteId));
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));

  const [rows, setRows] = useState(5);

  useEffect(() => {
    if (isXs) setRows(3);
    else if (isSm) setRows(3);
    else if (isMd) setRows(5);
    else if (isLg) setRows(4);
    else if (isXl) setRows(6);
  }, [isXs, isSm, isMd, isLg, isXl]);

  return (
    <Box
      m={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        p={3}
        sx={{
          width: { xs: "235px", sm: "250px", md: "300px", lg: "260px" },
          height: { xs: "235px", sm: "250px", md: "300px", lg: "260px" },
          borderRadius: "2em",
          boxShadow: "0px 0px 20px 0px #5730bfb3",
          bgcolor: "white",
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden", // Prevent elements from leaking out
        }}
        data-tooltip-id={`${noteId}-tooltip`}
        data-tooltip-place="bottom"
      >
        {note && (
          <Typography fontSize={isXs ? "0.65em" : "0.7em"} color={"#A1A1A1"}>
            id: {noteId}
          </Typography>
        )}
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
            maxWidth: "100%",
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
          rows={rows}
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
        {note && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 2,
              width: "100%",
            }}
          >
            <Tooltip id={`${noteId}-tooltip`} clickable>
              <IconButton onClick={handleNoteDelete}>
                <DeleteIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton onClick={handleNoteUpdate}>
                <SaveRoundedIcon sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Note;
