import Cookies from "js-cookie";

const getTokenCookie = () => {
  return Cookies.get("jwt") || null;
};

export { getTokenCookie };
