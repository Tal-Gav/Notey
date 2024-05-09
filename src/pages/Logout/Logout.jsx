import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { showSwal } from "../../components/Alert/Alert";

export default function Logout() {
  const navigate = useNavigate();
  const [spinner, setSpinner] = useState();

  const handleAccountLogout = (form) => {
    axios
      .post("http://localhost:5555/accounts/logout", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        showSwal(error.response.data.message);
      });
  };

  useEffect(() => {
    handleAccountLogout();
  }, []);

  return <>logout</>;
}
