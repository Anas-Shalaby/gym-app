import React from "react";
import Navbar from "../components/Navbar";
import { Box, Typography, Stack, Button } from "@mui/material";
import trainer from "../assets/Trainer3.JPG";
import trainer2 from "../assets/Trainer2.PNG";
import trainer3 from "../assets/Trainer.JPG";
import AwesomeSlider from "react-awesome-slider";
import Footer from "../components/Footer";
const About = () => {
  return (
    <div>
      <Navbar />
      <Typography
        color="#ff2625"
        sx={{
          fontSize: { lg: "80px", md: "70px", sm: "50px", xs: "30px" },
          fontWeight: "bold",
          marginBottom: "40px",
          marginTop: "40px",
          opacity: "0.1",
          display: { lg: "block" },
        }}
      >
        About
      </Typography>

      <Stack
        direction="row"
        sx={{
          marginTop: "-40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { lg: "800px", md: "500px", sm: "300px" },
            padding: "10px",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "50px",
            flexDirection: { lg: "row", md: "row", xs: "column" },
          }}
          className="about"
        >
          <AwesomeSlider
            animation="cubeAnimation"
            className="slider-about"
            bullets={false}
            selected="1"
          >
            <div>
              <img src={trainer} alt="trainer" />
            </div>
            <div>
              <img src={trainer2} alt="trainer" />
            </div>
            <div>
              <img src={trainer3} alt="trainer" />
            </div>
          </AwesomeSlider>
          <div>
            <Typography
              sx={{
                fontSize: { lg: "20px", md: "20px", sm: "20px" },
                fontWeight: "bold",
                opacity: "0.5",
                display: { lg: "block" },
                textAlign: "end",
              }}
            >
              مين محمد عجيزة؟
              <br />
              <br />
              طالب في كلية الهندسة -👷‍♂️
              <br />
              أخصائي تغذية علاجية ورياضية معتمد من جامعة المنصوره وأكاديمية
              سيركلز
              <br /> مدرب أونلاين -👨‍💻 <br /> خبرة ٣ سنين في مجال التدريب من ٢٠١٩
              بفضل الله اشتغلت مع عملاء كتير من داخل وخارج مصر- <br />
              بقدم حالياً خدمة المتابعة الاونلاين عن طريق الواتس اب
              <br />
              وقريب هيتم توفير خدمة البرايفت كمان ان شاء الله
              <br />
              👇 لو مستعد تشترك معايا ادخل شوف التفاصيل وابعتلي 📥
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
              Visit My Page
            </Button>
          </div>
        </Box>
      </Stack>
      <Footer />
    </div>
  );
};

export default About;
