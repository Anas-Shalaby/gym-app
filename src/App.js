import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import jwtDecode from "jwt-decode";
import Home from "./pages/Home";
import { userQuery } from "./util/queries";

import Exercise from "./components/Exercise";
import UploadVideo from "./pages/UploadVideo";
import { client } from "./util/client";

import Login from "./components/Login";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Calculator from "./pages/Calculator";

const App = () => {
  const [user, setUser] = useState(null);
  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  useEffect(() => {
    const query = userQuery(userInfo);
    client.fetch(query).then((data) => {
      setUser(data);
    });
  }, [userInfo]);
  let userInfoDecoded = userInfo;
  try {
    userInfoDecoded = jwtDecode(userInfo);
  } catch (err) {
    console.log(err);
  }
  return (
    <BrowserRouter>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Routes>
          <Route path="/" element={<Login user={userInfoDecoded} />} />
          <Route
            path="/Home"
            element={
              <Home user={userInfoDecoded} userInfor={userInfoDecoded} />
            }
          />
          <Route path="/Home" element={<Exercise />} />

          <Route
            path="/UploadVideo/*"
            element={<UploadVideo user={userInfoDecoded} />}
          />
          <Route path="/Services" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/Calculator" element={<Calculator />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
