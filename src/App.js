import React from "react";
import { Route, Routes } from "react-router-dom";
import Tabscontent from "./Components/Tobs/Tabssection";
import Cardpart from "./Components/Cards/Cardpart";
import Joiningpart from "./Components/Joining/Joiningpart";
import Contact from "./Components/Formpart/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/LandingScreen/Home";
import About from "./Components/LandingScreen/About";
import MediaContent from "./Components/LandingScreen/MediaContent";
import Reviews from "./Components/LandingScreen/Reviews";
import Header from "./Components/Header/Header";
import LogoSlider from "./Components/LandingScreen/Clientlogs";
import Admin from "./Adminscreen/Admin";
import Slider from "./Adminscreen/Slider";
import Cardss from "./Adminscreen/Card";
import Aboutss from "./Adminscreen/About";
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
        <Route path="/admin" element={<Admin />}>
        {/* Nested routes inside the Admin component */}
        <Route index element={<div>Welcome to the Admin Dashboard</div>} /> 
        <Route path="slider" element={<Slider />} /> 
        <Route path="card" element={<Cardss />} />
        <Route path="About" element={<Aboutss />} />
      </Route>
      </Routes>
    </>
  );
}
