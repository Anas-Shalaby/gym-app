import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import "../App.css";
import { client } from "../util/client.js";
import HorizontalScrollbar from "./HorizontalScrollbar";

const Search = ({ setexercises, bodyPart, setbodyPart }) => {
  const [search, setSearch] = useState("");

  const [bodyParts, setbodyParts] = useState([]);
  useEffect(() => {
    const fetchSearchExercises = async () => {
      const bodyPartsData = await client.fetch(
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

      setbodyParts(["all", ...bodyPartsData]);
    };
    fetchSearchExercises();
  }, []);

  const handleSearch = async () => {
    if (search) {
      // const exercisesData = await fetchData();

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

      const searchExercises = exercise.filter(
        (exercise) =>
          exercise.target.toLowerCase().includes(search) ||
          exercise.caption.toLowerCase().includes(search)
      );

      setSearch("");
      setexercises(searchExercises);
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifu-content="center" p="20px">
      <Typography
        fontWeight="700"
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          value={search}
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "1000px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "20px",
          }}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search Exercises"
          type="Text"
        ></TextField>
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: " none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", sx: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative ", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setbodyPart={setbodyPart}
          isBodyPart
        />
      </Box>
    </Stack>
  );
};

export default Search;
