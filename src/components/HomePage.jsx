import "./HomePage.css";
import { Tilt } from "react-tilt";
import * as React from "react";
import Grid from "@mui/material/Grid";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.05, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const HomePage = () => {
  const whiteBackground = "./images/white.jpg";
  const noteyLogo = "./images/notey.png";

  return (
    <div>
      <div className="gradient-background">
        <div
          className="white-background"
          style={{ backgroundImage: `url(${whiteBackground})` }}
        ></div>

        <div className="container">
          <Grid
            container
            spacing={5}
            direction="column"
            alignItems="center"
            minHeight="100vh"
          >
            <Grid item xl={6} md={6} sm={12} xs={12} sx={{ marginTop: 25 }}>
              <img className="notey-logo" src={noteyLogo} alt="Logo" />
            </Grid>
            <Grid item xl={6} md={6} sm={12} xs={12}>
              <div className="desc font-sanssemi-extralight">
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
                marginTop: 25,
                display: "flex",
                justifyContent: "center",
                gap: "18vh",
              }}
            >
              <Tilt options={defaultOptions}>
                <div className="sign-up-btn font-tt-fors-regular">
                  <div className="btn-text">Sign Up</div>
                </div>
              </Tilt>
              <Tilt options={defaultOptions}>
                <div className="log-in-btn font-tt-fors-regular">
                  <div className="btn-text">Log In</div>
                </div>
              </Tilt>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
