import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
/* Home Pages Components */
import Home from "./Components/LandingScreen/Slider/Slider";
import LogoSlider from "./Components/LandingScreen/Clientlogo/Clientlogs";
// import About from "./Components/LandingScreen/About/About";
import Tabscontent from "./Components/LandingScreen/Tobs/Tabssection";
// import Joiningpart from "./Components/LandingScreen/Joining/Joiningpart";
// import MediaContent from "./Components/LandingScreen/Latestnews/MediaContent";
import Reviews from "./Components/LandingScreen/Review/Reviews";
import Contact from "./Components/LandingScreen/Formpart/Contact";

/* Admin Site Components */
import Admin from "./Components/Adminscreen/Admin";
import Loginform from "./Components/Adminscreen/LoginForm";
import Instruction from "./Components/Adminscreen/Intruction";
import Slider from "./Components/Adminscreen/Slider";
import Cardss from "./Components/Adminscreen/Card";
import Aboutss from "./Components/Adminscreen/About";
import Joiner from "./Components/Adminscreen/Joiner";
import Reviewss from "./Components/Adminscreen/Reviews";
import Socialmedia from "./Components/Adminscreen/Socialmedia";
import LandingScreen from "./Components/LandingScreen";

export default function App() {

  const {pathname} = useLocation();

  useEffect(() => {
    if(pathname !== "/"){
      window.scrollTo(0,0);
    }
  }, [pathname]);
  return (
    <>
      <Routes>
        {/* Main Site Routes */}
        <Route
          path="/"
          element={
            <>
              <Header />
            <LandingScreen/>
              {/* <LogoSlider /> */}
              <Contact />
              <Footer />  
            </>
          }
        />
        {/* <Route path="/adminlogin" element={<Loginform />} /> */}
        {/* Admin Site Routes */}
        <Route path="/admin" element={<Admin />}>
          {/* Nested routes must use relative paths */}
          <Route index element={<Instruction/>}/>
          <Route path="slider" index element={<Slider />} />
          <Route path="about" element={<Aboutss />} />
          <Route path="card" element={<Cardss />} />
          <Route path="joiner" element={<Joiner />} />
          <Route path="reviews" element={<Reviewss />} />
          <Route path="socialmedia" element={<Socialmedia />} />
        </Route>
      </Routes>
    </>
  );
}
