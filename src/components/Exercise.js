import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import { client } from "../util/client";

const Exercise = ({ exercises, setexercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(3);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      const exercise = await client.fetch(
        `*[_type == "post"]{
          caption,
          video{
            asset->{
              _id,
              url
            },
          },
          target,
          description,
        }`
      );

      if (bodyPart === "all") {
        return;
      } else {
        exercisesData = exercise.filter((exercise) => {
          return exercise.target === bodyPart;
        });
      }

      setexercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  const indexOfLast = currentPage * exercisesPerPage;

  const indexOfFirst = indexOfLast - exercisesPerPage;

  const currentExercises = exercises.slice(indexOfFirst, indexOfLast);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 2500, behavior: "smooth" });
  };

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "100px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, i) => (
          <ExerciseCard key={i} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 2 && (
          <Pagination
            variant="outlined"
            shape="circular"
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
            className="paginate"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercise;
