import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const Reviews = ({ data }) => {
  // Extract the array if `data` is an object containing `reviewData`
  const reviews = data?.reviewData || []; // Use `data.reviewData` if available or fallback to an empty array

  return (
    <Maindiv id="Reviews">
      <Container>
        <Row>
          <Col md={12}>
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
              {reviews.map((review, key) => {
                const titleLength = review.title ? review.title.length : 0;

                // Dynamically adjust quote size based on title length
                const dynamicQuoteFontSize =
                  titleLength > 50 ? "80px" : "100px";

                return (
                  <Grid
                    key={key}
                    container
                    direction="column"
                    sx={{
                      maxWidth: "800px",
                      width: "100%",
                      margin: "0 auto", // Center the content horizontally
                      textAlign: "start",
                    }}
                  >
                    {/* Review Opening Quote */}
                    <Typography
                      sx={{
                        fontSize: dynamicQuoteFontSize,
                        fontWeight: "bold",
                        color: "#034EA2",
                        lineHeight: "1",
                        marginBottom: "-10px", // Reduce gap between quote and title
                        textAlign: "left",
                      }}
                    >
                      “
                    </Typography>

                    {/* Review Title */}
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#231f20",
                        marginBottom: "8px", // Adjust spacing
                        whiteSpace: "pre-line",
                        paddingLeft: "40px",
                      }}
                    >
                      {review.title || "Title not found"}
                    </Typography>

                    {/* Review Closing Quote */}
                    <Typography
                      sx={{
                        fontSize: dynamicQuoteFontSize,
                        fontWeight: "bold",
                        color: "#034EA2",
                        lineHeight: "1",
                        marginTop: "-10px", // Reduce gap
                        textAlign: "right", // Align to the end
                      }}
                    >
                      ”
                    </Typography>

                    {/* Review Subtitle */}
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        color: "#231f20",
                        marginBottom: "8px", // Adjust spacing
                        whiteSpace: "pre-line",
                        paddingLeft: "40px",
                      }}
                    >
                      {review.subTitle || "Subtitle not found"}
                    </Typography>

                    {/* Review Description */}
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
                );
              })}
            </Box>
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
