import { Box, Divider, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

const MediaContent = () => {
  const [activeBarIndex, setActiveBarIndex] = useState(0);

  const text = [
    {
      title: "Life sciences leaders trust us",
      subTitle: "case study | Analytics",
      description1: `
       Leading pharma improves speed to insights by 60% with advanced 
       social media analytics`,
      description2: `
       Eyecare leader successfully engages 60% of target audience with a
       brand relaunch`,
      videoId: "dQw4w9WgXcQ" // Example YouTube video ID
    },
    {
      title: "Life sciences leaders trust us",
      subTitle: "case study | Analytics",
      description3: `
      Global pharma optimizes online presence, transforms UX
      pharma
      `,
      description4: `
       Large pharma optimizes patient screening and requirement, sees 3x
       jump in referred and consented rate`,
      videoId: "J8O9_ugpDjE" // Another example YouTube video ID
    }
  ];

  const handleProgressClick = (index) => {
    setActiveBarIndex(index);
  };

  return (
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
                fontSize: "36px",
                fontWeight: "bold",
                color: "#231f20",
                marginBottom: "16px", 
                textAlign: "left",
                
              }}
            >
              {text[activeBarIndex].title}
            </Typography>
            <Typography
              sx={{
                fontSize: "15px",
                color: "#000000",
                whiteSpace: "pre-line", 
                textAlign: "left",
                maxWidth: "80%", 
                pl:"25px",

              }}
            >
              {text[activeBarIndex].subTitle}
            </Typography>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "#000000",
                whiteSpace: "pre-line", 
                textAlign: "left",
                maxWidth: "80%", 
                pl:"25px",
                position:"relative",
                "::before" :{
                    content: '""',
                    position:"absolute",
                    left:0,
                    top:"25%",
                    height:"100%",
                    width:"8px",
                    backgroundColor:"#d81b60",
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
                  width: '100%', 
                  my: 2 
                }} 
              />
            </Box>
            <br />
            <Typography
              sx={{
                fontSize: "15px",
                color: "#000000",
                whiteSpace: "pre-line", 
                textAlign: "left",
                maxWidth: "80%", 
                pl:"25px",

              }}
            >
              {text[activeBarIndex].subTitle}
            </Typography>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "#000000",
                whiteSpace: "pre-line", 
                textAlign: "left",
                maxWidth: "80%", 
                position:"relative",
                pl:"25px",
                position:"relative",
                "::before" :{
                    content: '""',
                    position:"absolute",
                    left:0,
                    top:"25%",
                    height:"100%",
                    width:"8px",
                    backgroundColor:"#d81b60",
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
              borderRadius: "8px",
            }}
          >
            <iframe
              width="100%"
              height="100%"
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
  );
};

export default MediaContent;