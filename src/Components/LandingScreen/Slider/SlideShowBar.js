import { Box, Typography } from "@mui/material";
import { IoArrowForwardSharp } from "react-icons/io5";
import styled from "styled-components";
import { BaseUrl, Url } from "../../../utils/api";

export const SlideShowBar = ({ data }) => {
  const image = data?.[0]?.image || ''; 
  const { subTitle, title, description, button_name } = data[0] || {}; 
  console.log(image)
  return (
    <Slidersec>
      <Slidersecinner />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100vh",
          position: "relative",
        }}
      >
      
          <div
            style={{
              width: "100%",
              height: "100vh",
              position: "relative",
            }}
          >
            <img
               src={`${Url}${image}`}
              alt="slide"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "20%",
                left: "15%",
                right: "15%",
                color: "white",
                textAlign: "left",
                zIndex: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  mb: 1,
                  zIndex: 1,
                  "@media (max-width: 600px)": {
                    fontSize: "12px",
                  },
                }}
              >
                {subTitle}
              </Typography>
              <Typography
                sx={{
                  fontSize: "46px",
                  fontWeight: "bold",
                  mb: 1,
                  "@media (max-width: 600px)": {
                    fontSize: "18px",
                  },
                }}
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <Typography
                sx={{
                  fontSize: "20px",
                  maxWidth: "800px",
                  zIndex: 1,
                  "@media (max-width: 600px)": {
                    fontSize: "16px",
                  },
                  mb: 2,
                }}
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
              <Box
                sx={{
                  cursor: "pointer",
                  mt: 2,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: "16px",
                    fontWeight: "bold",
                    zIndex: 1,
                    mr: 1,
                    "@media (max-width: 600px)": {
                      fontSize: "12px",
                    },
                  }}
                >
                  {button_name}
                </Typography>
                <IoArrowForwardSharp
                  style={{
                    color: "#ffffff",
                    fontSize: "16px",
                  }}
                />
              </Box>
            </Box>
          </div>
      
      </Box>
    </Slidersec>
  );
};

const Slidersec = styled.section`
  position: relative;
  z-index: 0; /* Ensure this is not negative */
`;

const Slidersecinner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1; /* Keeps the gradient background behind other content */
  background: linear-gradient(90deg, rgb(0 0 0 / 97%) 1%, rgb(0 0 0 / 0%) 96%);
`;
