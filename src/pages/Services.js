import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import image1 from "../assets/Transfromation1.jpeg";
import image2 from "../assets/Transfromation2.jpeg";
import image3 from "../assets/Transfromation3.jpeg";
import image4 from "../assets/transform4.jpeg";
import image5 from "../assets/transform5.jpeg";
import image10 from "../assets/Video2.mp4";
import image6 from "../assets/transform6.jpeg";
import image7 from "../assets/transform7.jpeg";
import image8 from "../assets/transform8.jpeg";
import image9 from "../assets/transform9.jpeg";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AwesomeSlider from "react-awesome-slider";
import Offers from "../components/Offers";
// import "react-awesome-slider/dist/styles.css";
const Services = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Navbar />
      <Typography
        color="#ff2625"
        sx={{
          marginTop: "20px",
          fontSize: { lg: "80px", md: "70px", sm: "50px", xs: "30px" },
          fontWeight: "bold",
          opacity: "0.1",
          display: { lg: "block" },
        }}
      >
        Transformations
      </Typography>
      <AwesomeSlider
        animation="cubeAnimation"
        className="slider-services"
        bullets={false}
        selected="1"
      >
        <Box className="transfrom-card">
          <a
            href="https://www.instagram.com/mohamed__agiza/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={image1} alt="image1" />
          </a>
        </Box>

        <Box className="transfrom-card">
          <a
            href="https://www.instagram.com/p/CdTNlTRKG9Z/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={image2} alt="image2" />
          </a>
        </Box>

        <Box className="transfrom-card">
          <a
            href="https://www.instagram.com/mohamed__agiza/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={image3} alt="image3" />
          </a>
        </Box>
        <Box className="transfrom-card">
          <a
            href="https://www.instagram.com/mohamed__agiza/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={image4} alt="image3" />
          </a>
        </Box>
        <Box className="transfrom-card">
          <a
            href="https://www.instagram.com/mohamed__agiza/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={image5} alt="image3" />
          </a>
        </Box>
        <Box className="transfrom-card">
          <a
            href="https://www.instagram.com/mohamed__agiza/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={image6} alt="image3" />
          </a>
        </Box>
        <Box className="transfrom-card">
          <a
            href="https://www.instagram.com/mohamed__agiza/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={image7} alt="image3" />
          </a>
        </Box>
        <Box className="transfrom-card">
          <a
            href="https://www.instagram.com/mohamed__agiza/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={image8} alt="image3" />
          </a>
        </Box>
        <Box className="transfrom-card">
          <a
            href="https://www.instagram.com/mohamed__agiza/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={image9} alt="image3" />
          </a>
        </Box>
      </AwesomeSlider>
      <Offers />
      <Typography
        color="#ff2625"
        sx={{
          fontSize: { lg: "80px", md: "70px", sm: "50px", xs: "30px" },
          fontWeight: "bold",
          opacity: "0.1",
          display: { lg: "block" },
        }}
      >
        Our Offers
      </Typography>
      <Stack direction="row" sx={{ marginTop: "-40px" }}>
        <Box
          sx={{
            width: { lg: "800px", md: "500px", sm: "300px" },
            padding: "10px",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            gap: "100px",
            flexDirection: { lg: "row", md: "row", xs: "column" },
          }}
          className="offers"
        >
          <div>
            <video
              src={image10}
              autoPlay
              muted
              controls
              controlsList="nodownload"
            ></video>
          </div>
          <div>
            <Typography
              sx={{
                fontSize: { lg: "30px", md: "40px", sm: "40px" },
                fontWeight: "bold",
                opacity: "0.1",
                display: { lg: "block" },
              }}
            >
              1-Private Training
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "30px", md: "35px", sm: "40px" },
                fontWeight: "bold",
                opacity: "0.1",
                display: { lg: "block" },
              }}
            >
              2-Online Coaching
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "30px", md: "35px", sm: "40px" },
                fontWeight: "bold",
                opacity: "0.1",
                display: { lg: "block" },
              }}
            >
              3-Soon...
            </Typography>

            <Button
              variant="contained"
              color="warning"
              href="https://www.instagram.com/mohamed__agiza/"
              sx={{
                backgroundColor: "warning",
                padding: "10px",
                fontWeight: "bold",
              }}
            >
              Contact us
            </Button>
          </div>
        </Box>
      </Stack>
      <Footer />
    </Box>
  );
};

export default Services;
