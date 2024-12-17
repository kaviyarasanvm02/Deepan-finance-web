import { Box, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const Reviews = ({ reviewContent = [] }) => {
  const [activeBarIndex, setActiveBarIndex] = useState(0);
  const [progress, setProgress] = useState(new Array(4).fill(0));

  const text = [
    {
      title: `
        Deepan has helped us transform our go-to-market operations and enable
        better physician and patient engagement via more agile, data-driven,
        omnichannel ways.
      `,
      subTitle: `– Dr. Michael Kurr`,
      description: `Global Head of Go-to-Market Services, Boehringer Ingelheim`,
    },
    {
      title: `
        We engaged Indegene to support medical and promotional compliance
        reviews. We are delighted with their quality of service, accountability to
        exceed targets, proactive engagement with our cross-functional teams, and
        regular communications to ensure continuous improvement.
      `,
      subTitle: `– Paul Slade`,
      description: `Senior Country Medical Director, Gilead Sciences`,
    },
    {
      title: `
        We have worked with Indegene on multiple eLearning projects. On a recent 
        assignment with the Medical Affairs Professional Society (MAPS), they 
        completed the project as per scope/expectations, on time, and were very 
        responsive. We appreciate their commitment to high-quality customer service.
      `,
      subTitle: `– Melody Hays`,
      description: `Director, Learning & Development, MAPS`,
    },
    {
      title: `
        Indegene's team swiftly learned our processes and established a compliant, 
        easy-to-use EDC platform. Their thorough statistical analysis helped in the 
        timely completion of our study reports. We appreciate their unique study 
        designs, availability, flexibility, and ability to provide tailored solutions.
      `,
      subTitle: `– Clinical Affairs Director, AliveDx`,
      description: ``,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = [...prevProgress];
        newProgress[activeBarIndex] += 1;

        if (newProgress[activeBarIndex] >= 100) {
          const resetProgress = new Array(4).fill(0);
          const nextIndex = (activeBarIndex + 1) % 4;
          setActiveBarIndex(nextIndex);
          return resetProgress;
        }

        return newProgress;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [activeBarIndex]);

  const handleProgressClick = (index) => {
    const resetProgress = new Array(4).fill(0);
    setActiveBarIndex(index);
    setProgress(resetProgress);
  };

  return (
    <Box
      sx={{
        mt:10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        width: "100%",
      }}
    >
      {text.map((review, index) => (
        <Grid
          container
          spacing={2}
          direction="column"
          key={index}
          sx={{
            maxWidth: "800px",
            width: "100%",
            display: activeBarIndex === index ? "block" : "none",
            textAlign: "start",
          }}
        >
          <Typography
            sx={{
              fontSize: "100px",
              fontWeight: "bold",
              color: "#034EA2",
              lineHeight: "1",
              marginBottom: "-40px",
              textAlign: "left",
            }}
          >
            “
          </Typography>

          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#231f20",
              marginBottom: "16px",
              whiteSpace: "pre-line",
              pl:"40px",
            }}
          >
            {review.title}
          </Typography>

          <Typography
            sx={{
              fontSize: "100px",
              fontWeight: "bold",
              color: "#034EA2",
              lineHeight: "1",
              marginTop: "-20px",
              textAlign: "end",
            }}
          >
            ”
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: "bold",
              color: "#231f20",
              marginBottom: "16px",
              whiteSpace: "pre-line",
              pl:"40px"

            }}
          >
            {review.subTitle}
          </Typography>

          <Typography
            sx={{
              fontSize: "13px",
              color: "#231f20",
              marginBottom: "16px",
              whiteSpace: "pre-line",
              pl:"40px"
            }}
          >
            {review.description}
          </Typography>
        </Grid>
      ))}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          gap: "10px",
          marginTop: "20px",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {progress.map((value, index) => (
          <Box
            key={index}
            onClick={() => handleProgressClick(index)}
            sx={{
              height: "7px",
              width: "30px",
              backgroundColor: "#cccccc", 
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: index === activeBarIndex ? `${value}%` : "0%",
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

export default Reviews;
