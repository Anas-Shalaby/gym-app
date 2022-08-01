import React, { useState } from "react";
import "../plans.css";
import { Box, Typography } from "@mui/material";
import testimonialsData from "../util/data2";
import plansData from "../util/data.js";
import rightArrow from "../assets/rightArrow.png";
import leftArrow from "../assets/leftArrow.png";
import "../App.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../testi.css";
// import "react-awesome-slider/dist/styles.css";
const Services = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",

        justifyContent: "center",
      }}
    >
      <Navbar />

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
      <div className="plans-container">
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="plans">
          {plansData.map((data, index) => (
            <div className="plan" key={index}>
              {data.icon}
              <Typography>{data?.name}</Typography>
              <Typography> EGP {data?.price}</Typography>
              <div className="features">
                {data.features.map((feature, i) => (
                  <div className="features" key={i}>
                    <Typography sx={{ fontSize: "1.1rem" }}>
                      {feature}
                    </Typography>
                  </div>
                ))}
              </div>

              <button className="btn">
                <a href="https://wa.me/message/2IFFOVEI6DVWP1">
                  <Typography sx={{ fontWeight: "bold" }}>Join now</Typography>
                </a>
              </button>
            </div>
          ))}
        </div>
      </div>
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
        Testimonials
      </Typography>
      <div className="Testi">
        <div className="left">
          <Typography
            sx={{
              fontSize: { lg: "20px", md: "25px", sm: "20px", xs: "20px" },
              fontWeight: "bold",
              marginBottom: "40px",
              marginTop: "40px",

              display: { lg: "block" },
            }}
          >
            Testimonials
          </Typography>
          <Typography
            className="stroke-text"
            sx={{
              fontSize: { lg: "30px", md: "25px", sm: "20px", xs: "20px" },
              fontWeight: "bold",
              marginBottom: "40px",

              display: { lg: "block" },
            }}
          >
            What they
          </Typography>
          <Typography
            sx={{
              fontSize: { lg: "40px", md: "25px", sm: "20px", xs: "20px" },
              fontWeight: "bold",
              marginBottom: "40px",

              display: { lg: "block" },
            }}
          >
            say about us
          </Typography>
          <Typography
            sx={{
              fontSize: { lg: "1.2rem", xs: "1rem" },
            }}
          >
            {testimonialsData[selected]?.review}
          </Typography>
          <Typography>
            <span>{testimonialsData[selected]?.name}</span>-{" "}
            {testimonialsData[selected]?.status}
          </Typography>
        </div>
        <div className="right">
          <div></div>
          <div></div>
          <img src={testimonialsData[selected].image} alt="" />
          <div className="arrows">
            <img
              onClick={() => {
                selected === 0
                  ? setSelected(tLength - 1)
                  : setSelected((prev) => prev - 1);
              }}
              src={leftArrow}
              alt=""
            />
            <img
              onClick={() => {
                selected === tLength - 1
                  ? setSelected(0)
                  : setSelected((prev) => prev + 1);
              }}
              src={rightArrow}
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </Box>
  );
};

export default Services;
