import React from "react";
import { Box, Typography, Button } from "@mui/material";
import image from "../assets/Trainer.JPG";
import "../App.css";
import NumberCounter from "number-counter";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <div className="blur hero-blur"></div>
      <Typography fontWeight="600px" fontSize="26px" color="#e67700">
        Fitness Trainer
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: " 40px" } }}
        mb="23px"
        mt="30px"
      >
        Eat ,Train ,Sleep <br /> And Repeat
      </Typography>
      <Typography color="#fff" fontSize="22px" lineHeight="35px" mb={4}>
        Checkout the most effective exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#dd2625", padding: "10px" }}
      >
        Explore Exrecises
      </Button>
      <div className="figures">
        <div>
          <span>
            <NumberCounter end={14} start={0} delay="2" preFix="+" />{" "}
          </span>
          <span>expert coaches</span>
        </div>
        <div>
          <span>
            {" "}
            <NumberCounter end={27} start={0} delay="3" preFix="+" />
          </span>
          <span>member joins</span>
        </div>
        <div>
          <span>
            {" "}
            <NumberCounter end={50} start={0} delay="4" preFix="+" />
          </span>
          <span>fitness programs</span>
        </div>
      </div>
      <Typography
        fontWeight="600px"
        color="#ff2625"
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={image} alt="mohamed" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
