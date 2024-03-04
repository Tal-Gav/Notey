import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { getTokenCookie } from "../../utils";
import { useEffect } from "react";
export default function Account() {
  const getAccountData = async () => {
    const data = await axios.get(`http://localhost:5555/accounts/details`, {
      headers: {
        authorization: getTokenCookie(),
      },
    });
  };

  useEffect(() => {
    getAccountData();
  }, []);
  return (
    <Typography component="h1" variant="h5">
      Account
    </Typography>
  );
}
