import { Box, Container, TextField } from "@mui/material";
import { useSelector } from "react-redux";

const Notey = () => {
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
        <Box pt={3} />
        <Container component="main" maxWidth="xs">
          <TextField
            variant="outlined"
            name="title"
            label="Title"
            id="title"
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
          <form id="note" noValidate>
            <TextField
              variant="outlined"
              name="text"
              label="Text"
              id="text"
              fullWidth
              multiline
              rows={6}
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
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Notey;
