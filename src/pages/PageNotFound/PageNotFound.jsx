import { Box, Typography } from "@mui/material";
import whiteBackground from "../../assets/white.jpg";

const PageNotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        overflow: "hidden",
        backgroundImage: `url(${whiteBackground})`,
        backgroundSize: "cover",
      }}
    >
      <Typography
        color={"#6F00FF"}
        fontSize={"6em"}
        fontFamily={"Outfit-ExtraBold"}
      >
        404
      </Typography>
      <Typography
        color={"#6F00FF"}
        fontSize={"2em"}
        fontFamily={"Outfit-Regular"}
      >
        Page not found :(
      </Typography>
    </Box>
  );
};

export default PageNotFound;
