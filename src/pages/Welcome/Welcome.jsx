import { useState, useEffect } from "react";

const Welcome = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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
        console.log(error);
      });
  };

  useEffect(() => {
    getAccountData();
  }, []);

  return <div>Welcome</div>;
};

export default Welcome;
