import React, { useEffect, useState } from "react";
import { instance } from "../../utils/api";
import { SlideShowBar } from "./Slider/SlideShowBar";
import {About} from  "./About/About";
import {Joiningpart} from "./Joining/Joiningpart";
import Cardpart from "./Cards/Cardpart";

const LandingScreen = () => {
  const [head, setHead] = useState([]);
  const [AboutUs, setAbout] = useState([]);
  const [JoinUs,setJoinUs] =useState([]);
  const [Blogs,setBlogs] =useState([]);

  const LandingScreenDetails = async () => {
    try {
      const response1 = await instance.get(`/landing/customer/Header`);
      const response2 = await instance.get(`/landing/customer/About`);
      const response3 = await instance.get(`/landing/customer/JoinUs`);
      const response4 = await instance.get(`/landing/customer/Blogs`);
      const failedRequests = [];
      if (response1.status !== 200) failedRequests.push("customer/Header");
      if (response2.status !== 200) failedRequests.push("customer/About");
      if (response3.status !== 200) failedRequests.push("customer/JoinUs");
      if (response4.status !== 200) failedRequests.push("customer/Blogs");
      if (failedRequests.length === 0) {
        setHead(response1.data);
        setAbout(response2.data);
       setJoinUs(response3.data.joinUsData);
       setBlogs(response4.data);
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
  console.log(Blogs,"BlogsBlogsBlogs");
  
  return (
    <>
      <SlideShowBar data={head} />
      <About data={AboutUs}/>
      <Joiningpart  data={JoinUs} />
      <Cardpart  data={Blogs} />
    </>
  );
};

export default LandingScreen;
