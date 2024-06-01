import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import whiteBackground from "../../assets/white.jpg";
import noteyLogo from "../../assets/notey-purple.png";
import { Divider } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const signInAuth = useSignIn();

  const submittedForm = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    handleAccount(form);
  };

  const handleAccount = (form) => {
    const email = form.get("email");

    const account = {
      email: form.get("email"),
      password: form.get("password"),
    };
    axios
      .post("http://localhost:5555/accounts/login", account, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        if (
          signInAuth({
            auth: {
              token: res.data.token,
              type: "Bearer",
            },
            userState: { email },
          })
        ) {
          navigate("/notes");
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="white-background"
        style={{ backgroundImage: `url(${whiteBackground})` }}
      />

      <Box
        sx={{
          marginTop: "2vh",
          display: "flex",
          width: "25vw",
          height: "80vh",
          borderRadius: "2em",
          boxShadow: "0px 0px 20px 0px #5730bfb3",
          bgcolor: "white",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          p={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            className="notey-logo black-shadowed"
            src={noteyLogo}
            alt="Logo"
            draggable="false"
            style={{ width: "17vw" }}
          />
          <Box pt={2} />
          <Divider width={"120"} color={"#A1A1A1"} sx={{ opacity: "0.5" }} />
        </Box>

        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Typography
            component="h1"
            variant="h6"
            fontSize={"1em"}
            color={"#A1A1A1"}
          >
            Log in to your Notey account
          </Typography>
          <Box p={0.5} />
          <form noValidate onSubmit={submittedForm}>
            <TextField
              variant="outlined"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
            <Box p={0.5} />
            <TextField
              variant="outlined"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
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

            <Box p={1} />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                width: "10vw",
                borderRadius: "2em",
                background:
                  "radial-gradient(50% 50% at 50% 50%, #6037d0 50%, #6037d0 100%)",
              }}
            >
              Log in
            </Button>
            <Box p={1} />

            <Box
              sx={{
                display: "flex",
                paddingRight: "20",
                flexDirection: "row",
              }}
            >
              <Typography color={"#A1A1A1"}>
                Don't have an account yet?
              </Typography>
              <Typography
                onClick={() => navigate("/signup")}
                sx={{ cursor: "pointer" }}
                pl={1}
                color={"#6F00FF"}
              >
                Sign up
              </Typography>
            </Box>
          </form>
          <Box mt={5}></Box>
        </Container>
      </Box>
    </Box>
  );
};
export default Login;
