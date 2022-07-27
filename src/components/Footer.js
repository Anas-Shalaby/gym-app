import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Logo from "../assets/Logo.png";
import "../App.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box mt="10px" backgroundColor="#0d0e10">
      <Stack
        alignItems="center"
        px="40px"
        pt="14px"
        direction="row"
        justifyContent="center"
        sx={{
          width: { lg: "100%", md: "100%", sm: "90%", xs: "100%" },
          gap: { md: "30px", xs: "20px" },
        }}
      >
        <Link
          to={"https://gymagiza.herokuapp.com/Home"}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={Logo} alt="logo" width="100px" height="100px" />
        </Link>
        <Typography sx={{ display: { xs: "none", md: "block" } }}>
          Contact With Me
        </Typography>
        <a
          href="https://www.facebook.com/MohamedAgiza20"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon
            sx={{
              color: "#ff2625",
              bgcolor: "#000",
            }}
          />
        </a>
        <a
          href="https://www.instagram.com/mohamed__agiza/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon sx={{ color: "#ff2625", bgcolor: "#000" }} />
        </a>
        <Typography href="" rel="noreferrer" target="_blank">
          <WhatsAppIcon sx={{ color: "#ff2526" }} /> +201021285657
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
