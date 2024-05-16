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
    <>
      <Typography component="h1" variant="h3">
        Account
      </Typography>
      <Typography component="h1" variant="h5">
        Email: {email}
      </Typography>
      <Typography component="h1" variant="h5">
        First Name: {firstName}
      </Typography>
      <Typography component="h1" variant="h5">
        Last Name: {lastName}
      </Typography>
    </>
  ) : null;
}
