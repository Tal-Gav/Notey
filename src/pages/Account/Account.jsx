import { Box, Divider, TextField, IconButton, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import { toast } from "react-toastify";

export default function Account() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleAccountUpdate = () => {
    const newAccountInfo = {
      firstName,
      lastName,
      email,
    };
    axios
      .put("http://localhost:5555/accounts/" + id, newAccountInfo, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const setAccountData = (account) => {
    console.log(account);
    setId(account._id);
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
        setAccountData(res.data.account);
      })
      .catch((error) => {
        if (error.response.status === 403) navigate("/no-access");
      });
  };

  useEffect(() => {
    getAccountData();
  }, []);
  return (
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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
      <Box pt={1.2} />
      <TextField
        variant="outlined"
        id="firstName"
        label="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        name="firstName"
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
      <Box pt={1.2} />
      <TextField
        variant="outlined"
        id="lastName"
        label="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        name="lastName"
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
      <Box pt={1.2} />
      <Button
        variant="contained"
        onClick={handleAccountUpdate}
        sx={{ backgroundColor: "#6516cc" }}
      >
        update <SaveRoundedIcon sx={{ color: "white" }} />
      </Button>
    </Box>
  );
}
