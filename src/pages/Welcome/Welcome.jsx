import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  const [accountAuth, setAccountAuth] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const setAccountData = (account) => {
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
        try {
          if (error.response.status === 403) navigate("/no-access");
        } catch {
          alert(error);
        }
      });
  };

  useEffect(() => {
    getAccountData();
  }, []);
  return accountAuth ? (
    <>
      <Typography component="h1" variant="h3">
        Welcome {firstName}!
      </Typography>
      <Button
        variant="contained"
        onClick={() => {
          navigate("/notes");
        }}
      >
        Start creating notes
      </Button>
    </>
  ) : null;
}
