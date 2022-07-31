import React from "react";
import { Stack, Typography } from "@mui/material";
import icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        display: item === undefined ? "none" : "flex",
        borderBottomLeftRadius: "20px",
        width: "290px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
        marginLeft: "-90px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 3000, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={icon}
        alt="dumbbell"
        style={{ width: "20px", height: "20px" }}
      />
      <Typography fontSize="24px" color="#3a1212" textTransform="capitalize">
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
