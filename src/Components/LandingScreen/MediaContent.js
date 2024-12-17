import { Box, Divider, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';

const MediaContent = () => {
  const [activeBarIndex, setActiveBarIndex] = useState(0);

  const text = [
    {
      title: "Insurance & Risk Management",
      subTitle: "case study | Financial Services",
      description1: `
       Leading pharma improves speed to insights by 60% with advanced 
       social media analytics`,
      description2: `
       Eyecare leader successfully engages 60% of target audience with a
       brand relaunch`,
      videoId: "s1x71IUD7eQ?si=4bGMWBM_33rwG76j" // Example YouTube video ID
    },
    {
      title: "Long-term financial planning for life goals",
      subTitle: "case study | Financial Planning",
      description3: `
      Global pharma optimizes online presence, transforms UX
      pharma
      `,
      description4: `
       Large pharma optimizes patient screening and requirement, sees 3x
       jump in referred and consented rate`,
      videoId: "q5xnVSO9Kac?si=cm94Z2AZuDDVr7RP" // Another example YouTube video ID
    }
  ];

  const handleProgressClick = (index) => {
    setActiveBarIndex(index);
  };

  return (
    <Maindiv>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        width: "100%",
      }}
    >
      <Grid 
        container 
        spacing={2} 
        sx={{ 
          maxWidth: "1200px", 
          width: "100%",
        }}
      >
        {/* Left Content Column */}
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              position: "relative",
              paddingBottom: "50px", 
            }}
          >
            <Typography
              sx={{
                fontSize: "3rem",
                fontWeight: "800",
                color: "#231f20",
                fontFamily: "Nunito Sans",
                marginBottom: "16px", 
                textAlign: "left",
                '@media (max-width: 600px)': {
                  fontSize: "1.4rem",
                },
                
              }}
            >
              {text[activeBarIndex].title}
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                color: "#000000",
                whiteSpace: "pre-line", 
                textAlign: "left",
                maxWidth: "80%", 
                fontFamily: "Nunito Sans",
                pl:"25px",
                  '@media (max-width: 600px)': {
                    maxWidth: "100%", 
                },
              }}
            >
              {text[activeBarIndex].subTitle}
            </Typography>
            <Typography
              sx={{
                fontSize: "1.1rem",
                fontWeight: "bold",
                color: "#000000",
                fontFamily: "Nunito Sans",
                textAlign: "left",
                maxWidth: "80%", 
                padding:"10px 25px",
                position:"relative",
                '@media (max-width: 600px)': {
                    maxWidth: "100%", 
                    fontSize:"1rem"
                },
                "::before" :{
                    content: '""',
                    position:"absolute",
                    left:0,
                    top:"-15px",
                    height:"90px",
                    width:"8px",
                    backgroundColor:"#fa0001",
                },
                ":hover": {
                  cursor: "pointer",
                  color: "#034EA2"
                }
                
              }}
            >
              {activeBarIndex === 0 
                ? text[activeBarIndex].description1 
                : text[activeBarIndex].description3}
            </Typography>
            <br />
            <Box 
              sx={{
                display: 'flex', 
                width: '100%'
              }}
            >
              <Divider 
                sx={{ 
                  border: "1px solid #333",
                  width: '100%', 
                  my: 2 
                }} 
              />
            </Box>
            <br />
            <Typography
              sx={{
                fontSize: "1rem",
                color: "#000000",
                whiteSpace: "pre-line", 
                fontFamily: "Nunito Sans",
                textAlign: "left",
                maxWidth: "80%", 
                pl:"25px",

              }}
            >
              {text[activeBarIndex].subTitle}
            </Typography>
            <Typography
              sx={{
                fontSize: "1.1rem",
                fontWeight: "bold",
                color: "#000000", 
                textAlign: "left",
                maxWidth: "80%", 
                position:"relative",
                padding:"10px 25px",
                position:"relative",
                '@media (max-width: 600px)': {
                    maxWidth: "100%", 
                    fontSize:"1rem"
                },
                "::before" :{
                  content: '""',
                  position:"absolute",
                  left:0,
                  top:"-15px",
                  height:"90px",
                  width:"8px",
                  backgroundColor:"#fa0001",
                },
                ":hover": {
                  cursor: "pointer",
                  color: "#034EA2"
                }
              }}
            >
              {activeBarIndex === 0 
                ? text[activeBarIndex].description2 
                : text[activeBarIndex].description4}
            </Typography>

            {/* Progress Bar */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginTop: "20px",
              }}
            >
              {text.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => handleProgressClick(index)}
                  sx={{
                    width: "30px",
                    height: "5px",
                    backgroundColor:
                      index === activeBarIndex 
                        ? "#034EA2" 
                        : "#d1d3d4",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Right Video Column */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              width: "100%",
              height: "350px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <iframe
              width="100%"
              height="350px"
              src={`https://www.youtube.com/embed/${text[activeBarIndex].videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
    </Maindiv>
  );
};

export default MediaContent;

const Maindiv = styled.section`
  padding: 75px 0;
`;