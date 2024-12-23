import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Reviews = ({ data }) => {
  const reviews = data?.reviewData || [];
  const [slideIndex, setSlideIndex] = useState(0);
  const [progress, setProgress] = useState([]);

  // Initialize progress bars
  useEffect(() => {
    if (reviews.length) {
      setProgress(new Array(reviews.length).fill(0));
    }
  }, [reviews.length]);

  // Handle progress bar animation
  useEffect(() => {
    if (!reviews.length) return;

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = [...prevProgress];
        newProgress[slideIndex] += 1;

        if (newProgress[slideIndex] >= 100) {
          const resetProgress = new Array(reviews.length).fill(0);
          const nextIndex = (slideIndex + 1) % reviews.length;
          setSlideIndex(nextIndex);
          return resetProgress;
        }
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [slideIndex, reviews.length]);

  const handleProgressClick = (index) => {
    setSlideIndex(index);
    setProgress(new Array(reviews.length).fill(0));
  };

  return (
    <Maindiv id="investor">
      <Container>
        <Row>
          <Col md={12}>
            <Carousel activeIndex={slideIndex} onSelect={setSlideIndex}>
              {reviews.map((review, key) => {
                const titleLength = review.title ? review.title.length : 0;
                const dynamicQuoteFontSize =
                  titleLength > 250 ? "80px" : "100px";

                return (
                  <Carousel.Item key={key}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        position: "relative",
                        padding: "20px",
                        fontFamily: "Nunito Sans",
                      }}
                    >
                      <Grid
                        container
                        direction="column"
                        sx={{
                          maxWidth: "800px",
                          width: "100%",
                          margin: "0 auto",
                          textAlign: "start",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: dynamicQuoteFontSize,
                            fontWeight: "bold",
                            color: "#034EA2",
                            lineHeight: "1",
                            marginBottom: "-10px",
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
                            marginBottom: "8px",
                            whiteSpace: "pre-line",
                            paddingLeft: "40px",
                          }}
                        >
                          {review.title || "Title not found"}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: dynamicQuoteFontSize,
                            fontWeight: "bold",
                            color: "#034EA2",
                            lineHeight: "1",
                            marginTop: "-10px",
                            textAlign: "right",
                          }}
                        >
                          ”
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: "bold",
                            color: "#231f20",
                            marginBottom: "8px",
                            whiteSpace: "pre-line",
                            paddingLeft: "40px",
                          }}
                        >
                          {review.subTitle || "Subtitle not found"}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "13px",
                            color: "#231f20",
                            whiteSpace: "pre-line",
                            paddingLeft: "40px",
                          }}
                        >
                          {review.description || "Description not found"}
                        </Typography>
                      </Grid>
                    </Box>
                  </Carousel.Item>
                );
              })}
            </Carousel>
            {/* Progress Bars */}
            <ProgressContainer>
              {progress.map((value, index) => (
                <ProgressBar
                  key={index}
                  onClick={() => handleProgressClick(index)}
                  active={index === slideIndex}
                  progress={index === slideIndex ? `${value}%` : "0%"}
                />
              ))}
            </ProgressContainer>
          </Col>
        </Row>
      </Container>
    </Maindiv>
  );
};

export default Reviews;

const Maindiv = styled.section`
  padding: 75px 0;
  background-color: #f9f9f9;

  @media screen and (max-width: 600px) {
    padding: 40px 0;
  }
`;

const ProgressContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 24px;
`;

const ProgressBar = styled.div`
  width: 64px;
  height: 4px;
  background-color: #d1d3d4;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => props.progress};
    background-color: ${(props) => (props.active ? "#034EA2" : "transparent")};
    transition: width 0.05s linear;
  }
`;
