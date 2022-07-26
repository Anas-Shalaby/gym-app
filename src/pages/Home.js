import { React, useState } from "react";
import { Box } from "@mui/system";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import Search from "../components/Search";
import Exercise from "../components/Exercise";

import "../App.css";

const Home = ({ user, userInfor }) => {
  const [bodyPart, setbodyPart] = useState("all");
  const [exercises, setexercises] = useState([]);

  return (
    <Box>
      <Navbar user={user} />
      <HeroBanner />
      <section className="spikes"></section>
      <Search
        setexercises={setexercises}
        bodyPart={bodyPart}
        setbodyPart={setbodyPart}
      />
      <Exercise
        setexercises={setexercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
      <Footer />
    </Box>
  );
};

export default Home;
