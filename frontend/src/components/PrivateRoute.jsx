import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

// Checking for an Access Token, and then proceeding to the requested route. If an Access Token doesn't exist, redirect to the login screen.
const PrivateRoute = () => {
  const { auth } = useAuth();
  console.log(auth?.accessToken);
  return auth?.accessToken ? <Outlet /> : <Navigate to="/home" replace />;
};

export default PrivateRoute;
