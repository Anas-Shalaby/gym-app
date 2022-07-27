import React from "react";
import image1 from "../assets/Offers1.jpeg";
import image2 from "../assets/Offers2.jpeg";
import image3 from "../assets/Offers3.jpeg";
import image4 from "../assets/Offers4.jpeg";
import image5 from "../assets/Offers5.jpeg";
import image6 from "../assets/Offers6.jpeg";
import image7 from "../assets/Offers7.jpeg";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import "../App.css";

const Offers = (user) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      <AwesomeSlider
        animation="cubeAnimation"
        className="slider"
        bullets={false}
        selected="1"
        style={{
          width: "600px",
        }}
      >
        <div>
          <img src={image1} alt="offer" />
        </div>
        <div>
          {" "}
          <img src={image2} alt="offer" />
        </div>
        <div>
          {" "}
          <img src={image3} alt="offer" />
        </div>
        <div>
          {" "}
          <img src={image4} alt="offer" />
        </div>
        <div>
          {" "}
          <img src={image5} alt="offer" />
        </div>
        <div>
          {" "}
          <img src={image6} alt="offer" />
        </div>
        <div>
          {" "}
          <img src={image7} alt="offer" />
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Offers;
