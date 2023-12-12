import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

const SignUpForm = () => {
  const [fullName, setFullName] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} alignItems="center">
          <FormControl variant="standard">
            <InputLabel htmlFor="fullName">Full Name</InputLabel>
            <Input id="fullName" />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input id="username" />
          </FormControl>{" "}
          <FormControl variant="standard">
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="password" />
          </FormControl>{" "}
          <FormControl variant="standard">
            <InputLabel htmlFor="cofirmPassword">Confirm Password</InputLabel>
            <Input id="cofirmPassword" />
          </FormControl>
          <input type="submit" />
        </Stack>
      </form>
    </>
  );
};
export default SignUpForm;
