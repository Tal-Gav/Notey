import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import SaveIcon from "@mui/icons-material/Save";
import IconButton from "@mui/material/IconButton";

const Note = () => {
  const handleSaveNoteBtn = () => {
    setNoteEditMode(true);
  };

  return (
    <>
      <CardContent style={{ position: "relative" }}>
        <div style={{ position: "absolute", top: 0, right: 0 }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={handleSaveNoteBtn}
          >
            <SaveIcon fontSize="large" />
          </IconButton>
        </div>
        <TextField id="standard-basic" label="Title" variant="standard" />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
        />
      </CardContent>
    </>
  );
};

export default function OutlinedCard() {
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
        <Note />
      </Card>
    </Box>
  );
}
