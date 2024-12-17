import { Box, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import styled from "styled-components";

export const SlideShowBar = ({ Images = [] }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [progress, setProgress] = useState(new Array(Images.length).fill(0));

  const slidesText = [
    {
      subtitle: "Deepan Digital 2024",
      title: "Empowering Financial Futures with Innovation and Trust",
      description:
        "To provide innovative and customized financial solutions that empower individuals and businesses to achieve financial freedom",
    },
    {
      subtitle: "Understanding financial jargon",
      title: "Deepan Announces <br/> Expert Financial Advisors",
      description:
        "Your trusted partner in investments, wealth management, and financial planning.",
    },
    {
      subtitle: "Beginner Investment Options",
      title: "Personal Budgeting Toolss",
      description:
        "To be a leader in the financial services industry, renowned for trust, innovation, and client-centric solutions",
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
    setSlideIndex(index);
    setProgress(new Array(Images.length).fill(0));
  };

  return (
    <Slidersec>
      <Slidersecinner></Slidersecinner>
    <Box
      sx={{
        display: "flex",
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
            height: "100vh",
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
              zIndex:1,
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
                mb: 1,
                zIndex:1,
                '@media (max-width: 600px)': {
                  fontSize: "12px",
                },
              }}
            >
              {slidesText[index].subtitle}
            </Typography>
            <Typography
              sx={{
                fontSize: "46px",
                fontWeight: "bold",
                mb: 1,
                '@media (max-width: 600px)': {
                  fontSize: "18px",
                },
              }}
              dangerouslySetInnerHTML={{ __html: slidesText[index].title }}
            />
            <Typography
              sx={{
                fontSize: "20px",
                maxWidth: "800px",
                zIndex:1,
                '@media (max-width: 600px)': {
                  fontSize: "16px",
                },
                mb: 2,
              }}
              dangerouslySetInnerHTML={{
                __html: slidesText[index].description,
              }}
            />
            <Box
              sx={{
                cursor: "pointer",
                mt: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "16px",
                  fontWeight: "bold",
                  zIndex:1,
                  mr: 1,
                  '@media (max-width: 600px)': {
                  fontSize: "12px",
                },
                }}
              >
                Read more
              </Typography>
              <IoArrowForwardSharp
                style={{
                  color: "#ffffff",
                  fontSize: "16px",
                }}
              />
            </Box>
          </Box>
        </div>
      ))}
      <Box
        sx={{
          position: "absolute",
          bottom: "25%",
          left: "15%",
          right: "15%",
          display: "flex",
          width: "10%",
          zIndex: 1,
          gap: "5px",
          '@media (max-width: 600px)': {
            bottom: "5%",
          },
        }}
      >
        {progress.map((value, index) => (
          <Box
            key={index}
            onClick={() => handleProgressClick(index)}
            sx={{
              height: "7px",
              flex: 1,
              backgroundColor:
                index === slideIndex
                  ? "#ffffff"
                  : "rgba(255, 255, 255, 0.5)",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              zIndex:1,  
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
    </Slidersec>
  );
};
const Slidersec = styled.section`
  position: relative;
  z-index: 0; /* Ensure this is not negative */
`;

const Slidersecinner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1; /* Keeps the gradient background behind other content */
  background: linear-gradient(90deg, rgb(0 0 0 / 97%) 1%, rgb(0 0 0 / 0%) 96%);
`;
