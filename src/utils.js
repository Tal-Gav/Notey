import Cookies from "js-cookie";

const getTokenCookie = () => {
  return Cookies.get("token") || null;
};

export { getTokenCookie };
