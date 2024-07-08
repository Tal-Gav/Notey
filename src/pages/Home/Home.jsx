import "./Home.css";
import { Tilt } from "react-tilt";
import Grid from "@mui/material/Grid";
import { Box, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import whiteBackground from "../../assets/white.jpg";
import noteyLogo from "../../assets/notey-clean.png";
import Purp from "../../assets/purpy.mp4";

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
      <div
        className="white-background"
        style={{
          backgroundImage: `url(${whiteBackground})`,
          opacity: "0.15",
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
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <div className="container">
          <Grid container spacing={5} direction="column" alignItems="center">
            <Grid item xl={6} md={6} sm={12} xs={12} sx={{ marginTop: "18vh" }}>
              <img
                className="notey-logo shadowed"
                src={noteyLogo}
                alt="Logo"
                draggable="false"
              />
            </Grid>
            <Grid item xl={6} md={6} sm={12} xs={12}>
              <div className="desc typewriter font-sanssemi-extralight">
                Write down anything. easily.
              </div>
            </Grid>
            <Grid
              item
              xl={6}
              md={6}
              sm={12}
              xs={12}
              sx={{
                marginTop: "6vh",
                display: "flex",
                justifyContent: "center",
                gap: "8vh",
              }}
            >
              <Tilt options={defaultOptions}>
                <Button
                  type="normal"
                  variant="contained"
                  onClick={() => navigate("/signup")}
                  sx={{
                    fontSize: "1.4em",
                    borderRadius: "2.9em",
                    width: "12vw",
                    height: "9vh",
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
                    fontSize: "1.4em",
                    borderRadius: "2.9em",
                    width: "12vw",
                    height: "9vh",
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
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
}
