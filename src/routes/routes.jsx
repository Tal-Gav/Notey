// src/App.js
import React from "react";
import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import NavBar from "../components/NavBar/NavBar";
import MyNotes from "../pages/MyNotes/MyNotes";
import About from "../pages/About/About";
import Account from "../pages/Account/Account";
import NoAccess from "../pages/NoAccess/NoAccess";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

import AuthOutlet from "@auth-kit/react-router/AuthOutlet";

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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/no-access" element={<NoAccess />} />
      </Route>
      <Route element={<AuthOutlet authKey="_auth" fallbackPath="/home" />}>
        <Route element={<ProtectedLayout />}>
          <Route path="/notes" element={<MyNotes />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account />} />
        </Route>
      </Route>
    </Route>
  )
);

export default router;
