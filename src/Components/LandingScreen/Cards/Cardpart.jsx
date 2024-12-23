import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Cards from './Cards';

export default function Cardpart({ data }) {
  // Group data into chunks of 3 for the carousel
  const chunkedData = [];
  for (let i = 0; i < data.length; i += 3) {
    chunkedData.push(data.slice(i, i + 3));
  }

  return (
    <Maindiv id="card">
      <Container>
        <Row>
          <Col md={12}>
            <Heading>Investor Relations</Heading>
          </Col>
        </Row>
        <Carousel>
          {chunkedData.map((chunk, i) => (
            <Carousel.Item key={i}>
              <Row>
                {chunk.map((e, index) => (
                  <Col sm={12} xs={12} md={4} lg={4} xl={4} key={index}>
                    <a href="#">
                      <Cards e={e} />
                    </a>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </Maindiv>
  );
}

const Maindiv = styled.section`
  padding: 80px 0;

  @media screen and (max-width: 600px) {
    padding: 40px 0;
  }

  .carousel-control-prev,
  .carousel-control-next {
    opacity: 1; /* Ensure controls are visible */
  }

  .carousel-indicators {
    bottom: -55px;
    z-index: 10; 
    //  background-color: #d1d3d4;
  }

  .carousel-indicators [data-bs-target] {
    width: 40px;
    height: 6px;
    background-color: #034EA2;
  }
`;

const Heading = styled.h1`
  padding: 10px 0;
  font-size: 36px;
  font-weight: 900;
`;
