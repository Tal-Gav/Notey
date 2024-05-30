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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <>
          <NavBar />
          <Outlet />
        </>
      }
      errorElement={<PageNotFound />}
    >
      <Route exact path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route element={<AuthOutlet authKey="_auth" fallbackPath="/home" />}>
        <Route path="/notes" element={<MyNotes />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
      </Route>
      <Route path="/no-access" element={<NoAccess />} />
    </Route>
  )
);

export default router;
