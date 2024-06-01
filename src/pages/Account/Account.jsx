import { Box, Divider, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();

  const [accountAuth, setAccountAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const setAccountData = (account) => {
    setEmail(account.email);
    setFirstName(account.firstName);
    setLastName(account.lastName);
  };

  const getAccountData = async () => {
    axios
      .get("http://localhost:5555/accounts/details", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        setAccountAuth(true);
        setAccountData(res.data.account);
      })
      .catch((error) => {
        if (error.response.status === 403) navigate("/no-access");
      });
  };

  useEffect(() => {
    getAccountData();
  }, []);
  return accountAuth ? (
    <Box
      p={6}
      sx={{
        borderRadius: "2em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box pt={2} />
      <Typography component="h1" variant="h3">
        Account
      </Typography>
      <Divider width={"120"} color={"#A1A1A1"} sx={{ opacity: "0.5" }} />
      <Box pt={2} />
      <TextField
        variant="outlined"
        id="email"
        label="Email Address"
        defaultValue={email}
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
      <Typography component="h1" variant="h5">
        First Name: {firstName}
      </Typography>
      <Typography component="h1" variant="h5">
        Last Name: {lastName}
      </Typography>
    </Box>
  ) : null;
}
