import React, { useState } from "react";
import "../Calculator.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
const Calculator = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmr, setBMR] = useState(0);
  const handleClick = (e) => {
    try {
      e.preventDefault();
      let bmrc = 0;
      if (gender === "Male") {
        bmrc = 66.5 + 13.75 * weight + 5.003 * height - 6.75 * age;
      } else {
        bmrc = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
      }

      if (bmrc === "NaN") {
        setBMR(0);
      } else {
        setBMR(Math.round(bmrc));
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Navbar />
      <motion.div whileInView={{ opacity: [0, 1], y: [90, 0] }}>
        <div className="form">
          <div className="age">
            <Typography htmlFor="age">Age</Typography>
            <input
              placeholder="Enter age"
              type="number"
              id="age"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
            <span> ages 15 - 80</span>
          </div>
          <br />
          <div className="gender">
            <label className="container">Gender</label>

            <label className="container">
              Male
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>

            <label className="container">
              Female
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="height">
            <Typography htmlFor="height">Height</Typography>
            <input
              placeholder="Enter height"
              type="number"
              id="height"
              onChange={(e) => setHeight(e.target.value)}
              value={height}
            />
            <span>cm</span>
          </div>
          <div className="weight">
            <Typography htmlFor="Weight">Weight</Typography>
            <input
              placeholder="Enter weight"
              type="number"
              id="Weight"
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
            />
            <span>Kg</span>
          </div>

          <Button
            variant="contained"
            color="error"
            className="btn"
            sx={{ backgroundColor: "#dd2625", padding: "10px" }}
            onClick={handleClick}
          >
            Calculate
          </Button>

          <div className="result">
            <Typography htmlFor="BMR" style={{ marginRight: "1.5rem" }}>
              BMR
            </Typography>
            <input type="text" id="BMR" value={bmr} readOnly />
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Calculator;
