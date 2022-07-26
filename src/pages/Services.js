import React from "react";
import { Box, Stack } from "@mui/material";
import image1 from "../assets/Transfromation1.jpeg";
import image2 from "../assets/Transfromation2.jpeg";
import image3 from "../assets/Transfromation3.jpeg";
import "../App.css";
const Services = () => {
  return (
    <>
      <Stack
        direction="row"
        position="relative"
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: { lg: "space-around", md: "center" },
          alignItems: "center",
          marginTop: "60px",
          gap: "20px",
          flexDirection: { md: "row", sm: "column" },
        }}
      >
        <Box bgcolor="#212529" borderRadius="20px" className="transfrom-card">
          <a
            href="https://www.instagram.com/mohamed__agiza/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={image1} width="300px" alt="image1" />
          </a>
        </Box>

        <Box bgcolor="#212529" borderRadius="20px" className="transfrom-card">
          <a
            href="https://www.instagram.com/p/CdTNlTRKG9Z/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={image2} width="300px" alt="image2" />
          </a>
        </Box>

        <Box bgcolor="#212529" borderRadius="20px" className="transfrom-card">
          <a
            href="https://www.instagram.com/mohamed__agiza/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={image3} width="300px" alt="image3" />
          </a>
        </Box>
      </Stack>
    </>
  );
};

export default Services;
