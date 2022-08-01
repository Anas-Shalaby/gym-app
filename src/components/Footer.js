import React from "react";
import { Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Logo from "../assets/Logo.png";
import "../App.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <a href="https://www.facebook.com/MohamedAgiza20">
            <FacebookIcon sx={{ fontSize: 50, color: "#343a40" }} />
          </a>
          <a href="https://www.instagram.com/mohamed__agiza/">
            <InstagramIcon sx={{ fontSize: 50, color: "#343a40" }} />
          </a>
          <a href="https://twitter.com/MohamedAgiza7">
            <TwitterIcon sx={{ fontSize: 50, color: "#343a40" }} />
          </a>
        </div>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
