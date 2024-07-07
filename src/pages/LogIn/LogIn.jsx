import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Divider } from "@mui/material";
import { toast } from "react-toastify";
import whiteBackground from "../../assets/white.jpg";
import noteyLogo from "../../assets/notey-purple.png";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const submittedForm = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    handleAccount(form);
  };

  const handleAccount = async (form) => {
    const account = {
      email: form.get("email"),
      password: form.get("password"),
    };

    try {
      const response = await axios.post("/auth", { account });
      const { accessToken, message } = response.data;
      setAuth({ email, accessToken });

      toast.success(message);
      navigate("/welcome");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${whiteBackground})`,
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "25vw",
          height: "80vh",
          borderRadius: "2em",
          boxShadow: "0px 0px 20px 0px #5730bfb3",
          bgcolor: "white",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          pb={6}
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
