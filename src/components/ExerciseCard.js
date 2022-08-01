import { Link } from "react-router-dom";
import React from "react";
import { Button, Stack } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  console.log(exercise);
  return (
    <Link className="exercise-card" to={`/Home`}>
      <video
        controls
        src={exercise?.video?.asset?.url}
        autoPlay
        muted
        controlsList="nodownload"
      ></video>

      <Stack direction="row" marginTop="20px" justifyContent="space-around">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ff2625",
            fontSize: "14px",
            p: { lg: "0 20px", md: "0 15px", xs: "0 10px" },
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise?.caption}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#e67700",
            fontSize: "14px",
            p: { lg: "0 20px", md: "0 15px", xs: "0 10px" },
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise?.target}
        </Button>
      </Stack>
    </Link>
  );
};

export default ExerciseCard;
