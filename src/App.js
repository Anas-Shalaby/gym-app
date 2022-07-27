import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";

import Home from "./pages/Home";
import { userQuery } from "./util/queries";

import Exercise from "./components/Exercise";
import UploadVideo from "./pages/UploadVideo";
import { client } from "./util/client";
import jwt_decode from "jwt-decode";
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
  }, []);

  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/Home"
          element={
            <Home
              user={jwt_decode(userInfo).email}
              userInfor={jwt_decode(userInfo)}
            />
          }
        />
        <Route path="/" element={<Exercise />} />

        <Route path="/UploadVideo/*" element={<UploadVideo user={user} />} />
      </Routes>
    </Box>
  );
};

export default App;
