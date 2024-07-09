import "./Home.css";
import { Tilt } from "react-tilt";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import whiteBackground from "../../assets/white.jpg";
import noteyLogo from "../../assets/notey-clean.png";
import Purp from "../../assets/purpy.mp4";
import { Typography } from "@mui/material";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 14, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.02, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Box
        className="white-background"
        style={{
          backgroundImage: `url(${whiteBackground})`,
          opacity: "0.20",
        }}
      />
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -10,
          filter: "brightness(80%)",
        }}
      >
        <source src={Purp} type="video/mp4" />
      </video>

      <Box
        display="flex"
        height={"100%"}
        alignItems="center"
        justifyContent={"center"}
        flexDirection="column"
        gap={{ xs: 8, md: 10 }}
      >
        <img
          className="notey-logo shadowed"
          src={noteyLogo}
          alt="Logo"
          draggable="false"
          style={{ width: "80%", maxWidth: "400px" }}
        />
        <Box
          display={"flex"}
          direction="column"
          alignItems="center"
          justifyContent={"center"}
        >
          <Typography
            className="typewriter"
            fontFamily={"SansSemi-ExtraLight"}
            color={"white"}
            fontSize={{
              xs: "1.5em",
              sm: "2em",
              md: "2.6em",
              lg: "3em",
              xl: "4em",
            }}
          >
            Write down anything. easily.
          </Typography>
        </Box>
        <Box
          display="flex"
          gap={{ xs: 2, md: 4 }}
          alignItems="center"
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Tilt options={defaultOptions}>
            <Button
              type="normal"
              variant="contained"
              onClick={() => navigate("/signup")}
              sx={{
                fontSize: { xs: "1.6em", sm: "1.7em", md: "1.2em" },
                borderRadius: "2.9em",
                width: { xs: "50vw", sm: "30vw", md: "12vw" },
                height: { xs: "8vh", md: "9vh" },
                backgroundColor: "#6516cc",
                "&:hover": {
                  backgroundColor: "#6F00FF",
                  boxShadow: "none",
                },
                "&:active": {
                  boxShadow: "none",
                  backgroundColor: "#6F00FF",
                },
              }}
            >
              Sign Up
            </Button>
          </Tilt>
          <Tilt options={defaultOptions}>
            <Button
              type="normal"
              variant="outlined"
              onClick={() => navigate("/login")}
              sx={{
                border: "0.15em solid white",
                color: "white",
                fontSize: { xs: "1.6em", sm: "1.7em", md: "1.2em" },
                borderRadius: "2.9em",
                width: { xs: "50vw", sm: "30vw", md: "12vw" },
                height: { xs: "8vh", md: "9vh" },
                boxShadow:
                  "0px 0px 12px 0px #edddfe, inset 0px 0px 12px 0px #ebddfe",
                "&:hover": {
                  border: "0.15em solid white",
                  boxShadow:
                    "0px 0px 16px 0px #edddfe, inset 0px 0px 16px 0px #ebddfe",
                },
                "&:active": {
                  boxShadow: "none",
                  backgroundColor: "#6F00FF",
                  border: "0.15em solid #6516CC",
                },
              }}
            >
              Log In
            </Button>
          </Tilt>
        </Box>
      </Box>
    </>
  );
}
