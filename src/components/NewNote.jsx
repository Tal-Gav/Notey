import {
  Box,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

import { setNewNoteTitle, setNewNoteContent } from "../store/newNoteSlice";
import { useDispatch } from "react-redux";

const NewNote = () => {
  const dispatch = useDispatch();
  return (
    <>
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
      >
        <Box pt={2} />
        <Container component="main" maxWidth="xs">
          <Box pt={1.2} />
          <TextField
            onChange={(e) => dispatch(setNewNoteTitle(e.target.value))}
            variant="outlined"
            label="Title"
            fullWidth
            autoComplete={false}
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
            onChange={(e) => dispatch(setNewNoteContent(e.target.value))}
            label="Content"
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
    </>
  );
};

export default NewNote;
