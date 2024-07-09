// theme.js
import createTheme from "@mui/material/styles/createTheme";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label.Mui-focused": {
            color: "#6F00FF",
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#6F00FF",
            },
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: "1em",
          },
        },
      },
    },
  },
});

export default theme;
