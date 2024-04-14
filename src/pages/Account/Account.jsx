import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { getTokenCookie } from "../../utils";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();

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
        setAccountData(res.data.account);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
        navigate("/login");
      });
  };

  useEffect(() => {
    getAccountData();
  }, []);
  return (
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
  );
}
