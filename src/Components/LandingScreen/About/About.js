import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const About = ({ content = [] }) => {
  const text = [
    {
      title: "Your trusted partner in investments,",
      description: `
       Deepan India Financial Services Pvt Ltd was founded in 2024, by a team led by Mr. S Raja , with a passion to provide investment cum trading solutions in Indian financial markets. Our mission is to create wealth for our investors through the right technology, research, knowledge & ethics. With 24+ years of trust & experience, we are the most reputed advisory services company in North Chennai providing all kinds of financial services which includes investing, trading, mutual funds, research, training etc. 
      `,
    },
  ];
 
  return (
    <Maindiv id="About">
        <Container>
        <Row>
            <Col md={12}>
                    <Box
              sx={{
                display: "flex",
                fontFamily: "Nunito Sans", 
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                padding: "20px",
              }}
            >
              {content.map((index, key) => (
                <Grid
                  key={key}
                  direction="column"
                  sx={{
                    maxWidth: "1200px", 
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "30px",
                      fontFamily: "Nunito Sans", 
                      fontWeight: "900",
                      color: "#231f20",
                      margin: " 10px 0",
                      textAlign:"left",
                      '@media (max-width: 600px)': {
                        fontSize: "19px",
                      },
                    }}
                  >
                    {text[index]?.title || "Title not found"}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontFamily: "Nunito Sans", 
                      color: "#000000", 
                      '@media (max-width: 600px)': {
                        fontSize: "14px",
                        textAlign: "justify",
                      },
                    }}
                  >
                    {text[index]?.description || "Description not found"}
                  </Typography>
                </Grid>
              ))}
            </Box>
            </Col>
        </Row>
        </Container>
    </Maindiv>
  );
};

export default About;

const Maindiv = styled.section`
  padding: 75px 0;

  @media screen and (max-width: 600px){
    padding: 40px 0;
  }

`;