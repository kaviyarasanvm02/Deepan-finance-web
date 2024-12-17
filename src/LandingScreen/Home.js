import React from "react";
import { SlideShowBar } from "./SlideShowBar";
import slideImage1 from "../assets/landingImage1.jpg";
import slideImage2 from "../assets/landingImage2.jpg";
import slideImage3 from "../assets/landingImage3.jpg";
import About from "./About";
import MediaContent from "./MediaContent";
import Reviews from "./Reviews";

const Home = () => {
  const sliderShow = [
    { img: slideImage1 },
    { img: slideImage2 },
    { img: slideImage3 },
    
  ];

  return (
    <>
      <div>
          <SlideShowBar Images={sliderShow} />
          <About content={[0]}/>
          <MediaContent mediaContent={[0]}/>
          <Reviews/>
      </div>
    </>
  );
};

export default Home;
