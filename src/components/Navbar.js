import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import FileUploadIcon from "@mui/icons-material/FileUpload";
import Logo from "../assets/Logo.png";
import { Typography } from "@mui/material";
const Navbar = ({ user }) => {
  // const users = user?.filter((user, index) => {
  //   return user?._createdAt === "2022-07-26T15:38:54Z";
  // });

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
        width: "90%",
        flexWrap: { lg: "nowrap", sm: "wrap" },
      }}
      px="20px"
    >
      <Link to={"/Home"}>
        <img
          src={Logo}
          alt="Logo"
          style={{
            margin: "0 20px",
            mixBlendMode: "hard-light",
          }}
          className="logo"
        />
      </Link>

      <Stack direction="row" gap="40px" alignItems="center">
        <Link
          to={"/Home"}
          style={{
            textDecoration: "none",
            color: "#e67700",
            borderBottom: "3px solid #e67700",
          }}
        >
          <Typography
            sx={{
              fontSize: { lg: "20px", md: "18px", xs: "15px" },
            }}
          >
            Home
          </Typography>
        </Link>
        <Link
          to="#exercises"
          style={{ textDecoration: "none", color: "#e67700" }}
        >
          <Typography
            sx={{
              fontSize: { lg: "20px", md: "18px", xs: "15px" },
            }}
          >
            Exercises
          </Typography>
        </Link>
        <Link to="/UploadVideo">
          {user === "magiza222@gmail.com" ? (
            <button>
              <FileUploadIcon />
            </button>
          ) : (
            ""
          )}
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
