import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import { toast } from "react-toastify";
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
      setAuth({ email: account.email, accessToken });

      toast.success(message);
      navigate("/welcome");
    } catch (error) {
      toast.error(error.response?.data.message);
    }
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
          width: { xs: "85%", sm: "70%", smd: "50%" },
          maxWidth: "400px",
          height: {
            xs: "auto",
            sm: "80%",
            md: "80%",
            "@media (min-height:600px) and (min-height:600px)": {
              height: "80%",
            },
            "@media (min-width:375px) and (min-height:900px)": {
              height: "55%",
            },
          },
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
          pb={{ xs: 2, sm: 2, md: 4 }}
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
                width: { xs: "80%", sm: "70%", md: "10vw" },
                borderRadius: "2em",
                background:
                  "radial-gradient(50% 50% at 50% 50%, #6037d0 50%, #6037d0 100%)",
                fontSize: { xs: "0.9em", md: "1em" },
              }}
            >
              Log in
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
                Don't have an account yet?
              </Typography>
              <Typography
                onClick={() => navigate("/signup")}
                sx={{ cursor: "pointer" }}
                color={"#6F00FF"}
              >
                Sign up
              </Typography>
            </Box>
          </form>
          <Box mt={5}></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
