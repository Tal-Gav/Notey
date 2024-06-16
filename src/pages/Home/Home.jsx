import "./Home.css";
import { Tilt } from "react-tilt";
import * as React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import whiteBackground from "../../assets/white.jpg";
import noteyLogo from "../../assets/notey-clean.png";
import { Box } from "@mui/material";
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
        {/* <div className="gradient-background"></div>  */}

        {/* <div className="grad" /> */}

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
                <Link to="/signup" className="no-underscore">
                  <div className="sign-up-btn font-tt-fors-regular">
                    <div className="btn-text">Sign Up</div>
                  </div>
                </Link>
              </Tilt>
              <Tilt options={defaultOptions}>
                <Link to="/login" className="no-underscore">
                  <div className="log-in-btn font-tt-fors-regular">
                    <div className="btn-text">Log In</div>
                  </div>
                </Link>
              </Tilt>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
}
