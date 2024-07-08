import { Box, Divider, TextField, Button } from "@mui/material";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import whiteBackground from "../../assets/white.jpg";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

export default function Account() {
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
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
    axiosPrivate
      .put("/accounts/" + id, newAccountInfo)
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const setAccountData = (account) => {
    setId(account._id);
    setEmail(account.email);
    setFirstName(account.firstName);
    setLastName(account.lastName);
  };

  const getAccountData = async () => {
    axiosPrivate
      .get("/accounts/details")
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
      pt={10}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
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
        sx={{
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
        update <SaveRoundedIcon sx={{ color: "white" }} />
      </Button>
    </Box>
  );
}
