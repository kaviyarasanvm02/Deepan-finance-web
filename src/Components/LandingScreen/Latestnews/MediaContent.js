import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { Url } from '../../../utils/api';

const MediaContent = ({ data }) => {
  // Access the first entry from caseStudyData
  const { title, subTitle, description, image, url } = data?.caseStudyData?.[0] || {};
  
  // Log the full data object to confirm the structure
  console.log("data", data);

  return (
    <Maindiv id='latestnews'>
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
              {/* Title */}
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
                {title}
              </Typography>

              {/* Subtitle */}
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: "#000000",
                  whiteSpace: "pre-line",
                  textAlign: "left",
                  maxWidth: "80%",
                  fontFamily: "Nunito Sans",
                  pl: "25px",
                  '@media (max-width: 600px)': {
                    maxWidth: "100%",
                  },
                }}
              >
                {subTitle}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  color: "#000000",
                  fontFamily: "Nunito Sans",
                  textAlign: "left",
                  maxWidth: "80%",
                  padding: "10px 25px",
                  position: "relative",
                  '@media (max-width: 600px)': {
                    maxWidth: "100%",
                    fontSize: "1rem",
                  },
                  "::before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: "-15px",
                    height: "90px",
                    width: "8px",
                    backgroundColor: "#fa0001",
                  },
                }}
              >
                {description}
              </Typography>
            </Box>
          </Grid>

          {/* Right Image Column */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                width: "100%",
                height: "350px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Make the image clickable */}
              <a href={url} target="_blank" rel="noopener noreferrer">
                <img
                  src={`${Url}${image}`}
                  alt={title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    cursor: 'pointer', // Change the cursor to pointer to show it's clickable
                  }}
                />
              </a>
            </Box>
          </Grid>
        </Grid>

        {/* URL Link below the image */}
        {/* {url && (
          <Box sx={{ mt: 3 }}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#034EA2",
                textDecoration: "underline",
                fontSize: "1.2rem",
              }}
            >
              Visit Link
            </a>
          </Box>
        )} */}
      </Box>
    </Maindiv>
  );
};

export default MediaContent;

const Maindiv = styled.section`
  padding: 75px 0;
  @media screen and (max-width: 600px){
    padding: 40px 0;
  }
`;
