import { Box } from "@mui/material";
import whiteBackground from "../assets/white.jpg";

const Background = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        height: "100%",
        width: "100%",
        backgroundImage: `url(${whiteBackground})`,
        backgroundSize: "cover",
        zIndex: -1000,
      }}
    />
  );
};

export default Background;
