import React, { useEffect, useState } from "react";
import { instance } from "../../utils/api";
import { SlideShowBar } from "./Slider/SlideShowBar";
import {About} from  "./About/About";
import {Joiningpart} from "./Joining/Joiningpart";


const LandingScreen = () => {
  const [head, setHead] = useState([]);
  const [AboutUs, setAbout] = useState([]);
  const [JoinUs,setJoinUs] =useState([]);
  console.log("JoinUs",JoinUs);

  const LandingScreenDetails = async () => {
    try {
      const response1 = await instance.get(`/landing/customer/Header`);
      const response2 = await instance.get(`/landing/customer/About`);
      const response3 = await instance.get(`/landing/customer/JoinUs`);

      const failedRequests = [];
      if (response1.status !== 200) failedRequests.push("customer/Header");
      if (response2.status !== 200) failedRequests.push("customer/About");
      if (response3.status !== 200) failedRequests.push("customer/JoinUs");
      if (failedRequests.length === 0) {
        setHead(response1.data);
        setAbout(response2.data);
       setJoinUs(response3.data.joinUsData);
      } else {
        console.error(
          `One or more requests failed: ${failedRequests.join(", ")}`
        );
      }
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    }
  };

  useEffect(() => {
    LandingScreenDetails();
  }, []);
  return (
    <>
      <SlideShowBar data={head} />
      <About data={AboutUs}/>
      <Joiningpart  data={JoinUs} />
    </>
  );
};

export default LandingScreen;
