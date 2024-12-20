import { Box, Typography } from "@mui/material";
import { IoArrowForwardSharp } from "react-icons/io5";
import styled from "styled-components";
import { Url } from "../../../utils/api";

export const Joiningpart = ({ data }) => {
  // Ensure the data is an array and destructure correctly
  const image = data?.[0]?.image || '';
  const { title, button_name1, button_name2 } = data?.[0] || {};

  return (
    <Maindiv image={image}>
      <ContentWrapper>
        <TextOverlay>
          <Typography variant="h1">{title}</Typography>
          <Joinbtns>
            <a href="#">
              <div>{button_name1}</div>
            </a>
            <a href="#">
              <div>{button_name2}</div>
            </a>
          </Joinbtns>
        </TextOverlay>
      </ContentWrapper>
    </Maindiv>
  );
};


const Maindiv = styled.section`
  padding: 85px 0;
  background: linear-gradient(
      90deg,
      rgba(250, 0, 1, 0.26) 1%,
      rgba(0, 0, 0, 0.52) 54%,
      rgba(7, 49, 159, 0.18) 97%
    ),
    url(${(props) => props.image || '/default-image-path.jpg'}); 
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 70vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.6s ease-in-out;
  filter: blur(1px);

  @media screen and (max-width: 600px) {
    padding: 40px 0;
  }

  &:hover {
    filter: blur(0); 
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 20%;
  left: 15%;
  right: 15%;
  text-align: left;
  color: white;
  z-index: 1;
  max-width: 600px;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    margin: 0 0 20px 0;
    @media screen and (max-width: 600px) {
      font-size: 2rem;
    }
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
`;

const Joinbtns = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 600px) {
    display: block;
  }

  div {
    color: #fff;
    font-size: 1.3rem;
    font-weight: 600;
    padding: 15px 10px;
    border: 1px solid;
    margin: 10px 15px;
    text-align: center;
    width: 20rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    &:hover {
      background-color: red;
      border: 1px solid red;
    }

    @media screen and (max-width: 600px) {
      font-size: 1rem;
      padding: 15px 10px;
      margin: 10px 5px;
      width: 15rem;
    }
  }
`;
