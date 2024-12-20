import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

export const About = ({data }) => {
  const {title,description} = data[0] || {};
 
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
              {data.map((index, key) => (
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
                    {title || "Title not found"}
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
                    {description || "Description not found"}
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



const Maindiv = styled.section`
  padding: 75px 0;

  @media screen and (max-width: 600px){
    padding: 40px 0;
  }

`;