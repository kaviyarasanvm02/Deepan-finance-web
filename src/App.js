import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
/* Home Pages Components */
import Home from "./Components/LandingScreen/Slider/Slider";
import LogoSlider from "./Components/LandingScreen/Clientlogo/Clientlogs";
import About from "./Components/LandingScreen/About/About";
import Tabscontent from "./Components/LandingScreen/Tobs/Tabssection";
import Cardpart from "./Components/LandingScreen/Cards/Cardpart";
import Joiningpart from "./Components/LandingScreen/Joining/Joiningpart";
import MediaContent from "./Components/LandingScreen/Latestnews/MediaContent";
import Reviews from "./Components/LandingScreen/Review/Reviews";
import Contact from "./Components/LandingScreen/Formpart/Contact";

/* Admin Site Components */
import Admin from "./Components/Adminscreen/Admin";
import Loginform from "./Components/Adminscreen/LoginForm";
import Slider from "./Components/Adminscreen/Slider";
import Cardss from "./Components/Adminscreen/Card";
import Aboutss from "./Components/Adminscreen/About";
import Joiner from "./Components/Adminscreen/Joiner";
import Reviewss from "./Components/Adminscreen/Reviews";
import Socialmedia from "./Components/Adminscreen/Socialmedia";

export default function App() {
  return (
    <>
      <Routes>
        {/* Main Site Routes */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <LogoSlider />
              <About content={[0]} />
              <Tabscontent />
              <Cardpart />
              <Joiningpart />
              <MediaContent mediaContent={[0]} />
              <Reviews />
              <Contact />
              <Footer />
             
            </>
          }
        />
        <Route path="/login" element={<Loginform />} />
        {/* Admin Site Routes */}
        <Route path="/admin" element={<Admin />}>
          {/* Nested routes must use relative paths */}
          {/* <Route index element={<div>Welcome to the Admin Dashboard</div>} /> */}
          <Route path="slider" index element={<Slider />} />
          <Route path="card" element={<Cardss />} />
          <Route path="about" element={<Aboutss />} />
          <Route path="joiner" element={<Joiner />} />
          <Route path="reviews" element={<Reviewss />} />
          <Route path="socialmedia" element={<Socialmedia />} />
        </Route>
      </Routes>
    </>
  );
}
