import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const About = ({ content = [] }) => {
  const text = [
    {
      title: "We are a digital-first, life sciences commercialization company",
      description: `
        We help biopharmaceutical, emerging biotech and medical device companies develop products, get them to the market, and grow their impact 
        through the life cycle in a more effective, efficient, and modern way. We bring together healthcare domain expertise, fit-for-purpose 
        technology, and an agile operating model to provide a diverse range of solutions. These aim to deliver, amongst other outcomes, a 
        personalized, scalable and omnichannel experience for patients and physicians. It’s what drives our team and our purpose to enable healthcare 
        organizations to be future ready.
      `,
    },
  ];
 
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        padding: "20px",
      }}
    >
      {content.map((index, key) => (
        <Grid
          key={key}
          container
          direction="column"
          sx={{
            maxWidth: "1200px", 
          }}
        >
          <Typography
            sx={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#231f20",
              marginBottom: "16px", 
              textAlign:"left",
            }}
          >
            {text[index]?.title || "Title not found"}
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              color: "#000000",
              whiteSpace: "pre-line", 
              textAlign:"left",
              maxWidth: "80%", 
            }}
          >
            {text[index]?.description || "Description not found"}
          </Typography>
        </Grid>
      ))}
    </Box>
  );
};

export default About;
