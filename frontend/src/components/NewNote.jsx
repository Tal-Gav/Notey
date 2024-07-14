import { useDispatch } from "react-redux";
import {
  Box,
  Container,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { setNewNoteTitle, setNewNoteContent } from "../store/newNoteSlice";
import { useEffect, useState } from "react";

const NewNote = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));

  const [rows, setRows] = useState(5);

  useEffect(() => {
    if (isXs) setRows(4);
    else if (isSm) setRows(4);
    else if (isMd) setRows(6);
    else if (isLg) setRows(5);
    else if (isXl) setRows(7);
  }, [isXs, isSm, isMd, isLg, isXl]);

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
        >
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
        </Box>
      </Box>
    </>
  );
};

export default NewNote;
