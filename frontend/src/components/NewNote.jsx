import { useDispatch } from "react-redux";
import { Box, Container, TextField } from "@mui/material";
import { setNewNoteTitle, setNewNoteContent } from "../store/newNoteSlice";

const NewNote = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Box
        m={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          p={2.5}
          sx={{
            width: "20vw", // Adjust to maintain square shape
            height: "20vw", // Adjust to maintain square shape
            borderRadius: "2em",
            boxShadow: "0px 0px 20px 0px #5730bfb3",
            bgcolor: "white",
            marginBottom: "20px", // Add margin bottom for spacing between notes
          }}
        >
          <Box pt={3.5} />
          <TextField
            onChange={(e) => dispatch(setNewNoteTitle(e.target.value))}
            variant="outlined"
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
        </Box>
      </Box>
    </>
  );
};

export default NewNote;
