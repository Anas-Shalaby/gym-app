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

  const userInfoDecoded = jwtDecode(userInfo);
  return (
    <BrowserRouter>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Routes>
          <Route path="/" element={<Login />} />
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
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
