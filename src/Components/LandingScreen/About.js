import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const About = ({ content = [] }) => {
  const text = [
    {
      title: "Your trusted partner in investments,  and financial planning.,",
      description: `
        Ultra high net-worth individuals in India growing at 12% CAGR: Motilal Oswal. India's HNWI and UHNWI population is booming, with a 12% annual growth rate fueled by a strong economy and equity markets. However, organized wealth management penetration remains low, creating opportunities for expansion.
        Ultra high net-worth individuals in India growing at 12% CAGR: Motilal Oswal. India's HNWI and UHNWI population is booming, with a 12% annual growth rate fueled by a strong economy and equity markets. However, organized wealth management penetration remains low, creating opportunities for expansion..
      `,
    },
  ];
 
  return (
    <Maindiv>
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

`;