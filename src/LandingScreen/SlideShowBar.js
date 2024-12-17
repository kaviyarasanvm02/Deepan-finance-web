import { Box, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const SlideShowBar = ({ Images = [] }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [progress, setProgress] = useState(new Array(Images.length).fill(0));

  const slidesText = [
    {
      subtitle: "Deepan Digital Summit 2024",
      title: "Rethinking MLR: Expert <br/> Perspectives Revealed",
      description:
        "Experts from Johnson & Johnson, UCB, and Takeda Oncology <br/> explore new ways to make MLR faster and smarter",
    },
    {
      subtitle: "Commercial",
      title: "Deepan Announces <br/> New Center in Hyderabad",
      description:
        "Enables life sciences companies to modernize and transform <br/> their commercial, medical and clinical operations",
    },
    {
      subtitle: "Omnichannel",
      title: "Redefining HCP Engagement",
      description:
        "Joint report from Deepan and IQVIA lays out a blueprint <br/> for omnichannel excellence in the pharmaceutical industry",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = [...prevProgress];
        
        newProgress[slideIndex] += 1;
        if (newProgress[slideIndex] >= 100) {
          const resetProgress = new Array(Images.length).fill(0);
          const nextIndex = (slideIndex + 1) % Images.length;
          setSlideIndex(nextIndex);
          
          return resetProgress;
        }

        return newProgress;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [slideIndex, Images.length]);

  const handleProgressClick = (index) => {
    const newProgress = new Array(Images.length).fill(0);
    setSlideIndex(index);
    setProgress(newProgress);
  };

  return (
    <Box
      sx={{
        display: {xs:"flex",sm:"block",md:"flex"},
        flexDirection: "column",
        width: "100%",
        height: "100vh", 
        position: "relative",
      }}
    >
      {Images.map((image, index) => (
        <div
          key={index}
          style={{
            width: "100%",
            height: "100%", 
            position: "relative",
            display: index === slideIndex ? "block" : "none",
          }}
        >
          <img
            src={image.img}
            alt={`slide ${index}`}
            style={{
              width: "100%", 
              height: "100%", 
              objectFit: "cover", 
              display: "block",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "20%",
              left: "15%",
              right: "15%",
              color: "white",
              textAlign: "left",
              zIndex: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
                mb: 1,
              }}
            >
              {slidesText[index].subtitle}
            </Typography>
            <Typography
              sx={{
                fontSize: "36px",
                fontWeight: "bold",
                mb: 1,
              }}
              dangerouslySetInnerHTML={{ __html: slidesText[index].title }}
            />
            <Typography
              sx={{
                fontSize: "20px",
                maxWidth: "800px",
                mb: 2,
              }}
              dangerouslySetInnerHTML={{
                __html: slidesText[index].description,
              }}
            />
            {/* Read More Section */}
            <Box
              container
              alignItems="center"
              sx={{
                cursor: "pointer",
                mt: 2,
                display:"flex"
              }}
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "16px",
                  fontWeight: "bold",
                  mr: 1,
                }}
              >
                Read more
              </Typography>
              <ArrowForwardIosIcon
                sx={{
                  color: "#ffffff",
                  fontSize: "16px",
                }}
              />
            </Box>
          </Box>
        </div>
      ))}
      {/* Progress Bar */}
      <Box
        sx={{
          position: "absolute",
          bottom: 250,
          left: "15%",
          right: "15%",
          display: "flex",
          gap: "5px",
          width: "10%",
          textAlign: "left",
        }}
      >
        {progress.map((value, index) => (
          <Box
            key={index}
            onClick={() => handleProgressClick(index)}
            sx={{
              height: "7px",
              width: "10px",
              flex: 1,
              backgroundColor:
                index === slideIndex 
                  ? "#ffffff" 
                  : "rgba(255, 255, 255, 0.5)",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: index === slideIndex ? `${value}%` : "0%",
                backgroundColor: "#034EA2",
                transition: "width 0.1s linear",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};