import React from "react";
import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/system";
import { styled, keyframes } from "styled-components";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import backImage from "../../../assets/top-view-piggy-bank-money.jpg";
import back1Image from "../../../assets/home-second-block-bg-removebg-preview.png";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Choose = () => {
  return (
    <MainBox image={backImage}>
      <ContentBox>
        <InsideBox>
          <Grid container spacing={4} alignItems="center">
            {/* Image Column (Hidden on md and smaller screens) */}
            <Grid item xs={12} sm={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
              <img src={back1Image} alt="img" width="100%" />
            </Grid>

            {/* Text Column */}
            <Grid item xs={12} sm={12} md={6}>
              <LeftBox>
                <Typography
                  sx={{ fontSize: { xs: "28px", md: "40px" }, color: "black", fontWeight: "900", textAlign: "center" }}
                >
                  Why Choose Deepan India
                </Typography>
                <Box>
                  {[
                    "One single destination for your entire financial and investment needs",
                    "Get your own Personal Investment Coach",
                    "World class in-house Research Team",
                    "Get access to FundsIndia Select Funds and Specialized Products"
                  ].map((text, index) => (
                    <BlockBox key={index}>
                      <RoundBox>
                        <AdsClickIcon sx={{ fontSize: "24px" }} />
                      </RoundBox>
                      <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                        {text}
                      </Typography>
                    </BlockBox>
                  ))}
                </Box>
              </LeftBox>
            </Grid>
          </Grid>
        </InsideBox>
      </ContentBox>
    </MainBox>
  );
};

export default Choose;

/* Styled Components */
const MainBox = styled(Box)`
  position: relative;
  width: 100%;
  height: auto;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  animation: ${slideIn} 0.8s ease-in-out;
  background-attachment: fixed;

  @media (max-width: 900px) {
    height: auto;
    background-attachment: scroll;
  }
`;

const ContentBox = styled(Box)`
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 80px 50px;

  @media (max-width: 900px) {
    padding: 40px 20px;
  }
`;

const InsideBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LeftBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const BlockBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background: linear-gradient(to right, white, #23395d);
  border-radius: 50px;
  padding: 20px;
  margin-top: 20px;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 15px;
  }
`;

const RoundBox = styled(Box)`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(129, 109, 238);
  border-radius: 50px;
  margin-right: 10px;

  @media (max-width: 600px) {
    margin-bottom: 10px;
  }
`;
