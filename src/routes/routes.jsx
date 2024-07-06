// src/App.js
import React from "react";
import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import NavBar from "../components/NavBar/NavBar";
import Notes from "../pages/Notes/Notes";
import Account from "../pages/Account/Account";
import NoAccess from "../pages/NoAccess/NoAccess";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

import Welcome from "../pages/Welcome/Welcome";
import PrivateRoute from "../components/PrivateRoute";
import PersistLogin from "../components/PersistLogin";

// Layout for public routes
const PublicLayout = () => (
  <>
    <Outlet />
  </>
);

// Layout for protected routes
const ProtectedLayout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<PageNotFound />}>
      <Route element={<PublicLayout />}>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/no-access" element={<NoAccess />} />
      </Route>
      <Route element={<PersistLogin />}>
        <Route element={<PrivateRoute />}>
          <Route element={<ProtectedLayout />}>
            <Route path="/notes" element={<Notes />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/account" element={<Account />} />
          </Route>
        </Route>
      </Route>
    </Route>
  )
);

export default router;
