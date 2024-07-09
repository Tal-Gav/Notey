import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import whiteBackground from "../../assets/white.jpg";
import noteyLogo from "../../assets/notey-purple.png";
import { Divider } from "@mui/material";
import { toast } from "react-toastify";
import axios from "../../api/axios";

const Signup = () => {
  const navigate = useNavigate();

  const submittedForm = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    handleAccount(form);
  };

  const handleAccount = (form) => {
    const account = {
      firstName: form.get("firstName"),
      lastName: form.get("lastName"),
      email: form.get("email"),
      password: form.get("password"),
    };

    axios
      .post("/accounts/signup", account)
      .then((res) => {
        toast.success(res.data.message);

        navigate("/welcome");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <Box
      display="flex"
      height={"100%"}
      alignItems="center"
      justifyContent={"center"}
      flexDirection="column"
      gap={{ xs: 8, md: 10 }}
    >
      <Box
        sx={{
          display: "flex",
          width: { xs: "85%", sm: "70%", md: "50%" },
          maxWidth: "400px",
          height: { xs: "auto", sm: "80%", md: "80%" },
          minHeight: { xs: "auto", sm: "300px", md: "400px" },
          borderRadius: "2em",
          boxShadow: "0px 0px 20px 0px #5730bfb3",
          bgcolor: "white",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box
          pb={{ xs: 4, sm: 2, md: 4 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img
            className="notey-logo black-shadowed"
            src={noteyLogo}
            alt="Logo"
            draggable="false"
            style={{ width: "60%", maxWidth: "200px", height: "auto" }}
          />
          <Box pt={2} />
          <Divider width={"120"} color={"#A1A1A1"} sx={{ opacity: "0.5" }} />
        </Box>

        <Box width={"90%"}>
          <CssBaseline />
          <Typography
            component="h1"
            variant="h6"
            fontSize={{ xs: "1em", md: "1.2em" }}
            color={"#A1A1A1"}
          >
            Create new Notey account
          </Typography>
          <Box p={0.5} />
          <form noValidate onSubmit={submittedForm}>
            <Grid container spacing={1.2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
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
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
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
              </Grid>
              <Grid item xs={12}>
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
              </Grid>
              <Grid item xs={12}>
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
              </Grid>
            </Grid>
            <Box p={1} />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                width: { xs: "80%", sm: "70%", md: "10vw" },
                borderRadius: "2em",
                background:
                  "radial-gradient(50% 50% at 50% 50%, #6037d0 50%, #6037d0 100%)",
                fontSize: { xs: "0.9em", md: "1em" },
              }}
            >
              Sign Up
            </Button>
            <Box p={1} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <Typography color={"#A1A1A1"}>
                Already have an account?
              </Typography>
              <Typography
                onClick={() => navigate("/login")}
                sx={{ cursor: "pointer" }}
                color={"#6F00FF"}
              >
                Sign in
              </Typography>
            </Box>
          </form>
          <Box mt={5}></Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Signup;
