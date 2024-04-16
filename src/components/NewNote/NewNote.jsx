import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import SaveIcon from "@mui/icons-material/Save";
import IconButton from "@mui/material/IconButton";
import axios from "axios";

const Note = () => {
  const handleSaveNoteBtn = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    handleNote(form);
  };

  const handleNote = (form) => {
    const note = {
      title: form.get("title"),
      content: form.get("content"),
    };
    axios
      .post("http://localhost:5555/notes", note, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        alert(res.data.message);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <Box
      height={200}
      width={200}
      my={4}
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={2}
      overflow="hidden"
    >
      <Card
        variant="outlined"
        sx={{ maxWidth: "100%", maxHeight: "100%", overflow: "auto" }}
      >
        <CardContent style={{ position: "relative" }}>
          <form noValidate onSubmit={handleSaveNoteBtn}>
            <div style={{ position: "absolute", top: 0, right: 0 }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                type="submit"
              >
                <SaveIcon fontSize="large" />
              </IconButton>
            </div>
            <br />
            <TextField name="title" label="title" variant="standard" />
            <TextField name="content" label="content" multiline rows={4} />
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Note;
