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

export default function LoginForm() {
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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form noValidate onSubmit={submittedForm}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Login
          </Button>
          <Grid container sx={{ alignItems: "flex-end" }}>
            <Grid item>
              <Link href="/signup" variant="body2">
                Don't have an account yet? Sign up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}></Box>
    </Container>
  );
}
