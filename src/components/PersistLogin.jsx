import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { MutatingDots } from "react-loader-spinner";
import { Box } from "@mui/material";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth, persist } = useAuth();

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    // persist added here AFTER tutorial video
    // Avoids unwanted call to verifyRefreshToken
    !auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false);

    return () => (isMounted = false);
  }, []);

  return (
    <>
      {!persist ? (
        <Outlet />
      ) : isLoading ? (
        <Box
          height={"100vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <MutatingDots
            visible={true}
            height="100"
            width="100"
            color="#5730bf"
            secondaryColor="#5730bf"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
          />
        </Box>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PersistLogin;
