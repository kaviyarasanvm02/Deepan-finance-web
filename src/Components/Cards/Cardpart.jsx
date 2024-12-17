import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import Cardimg1 from '../../assets/landingImage1.jpg'
import Cardimg2 from '../../assets/landingImage2.jpg'
import Cardimg3 from '../../assets/landingImage3.jpg'
import Cards from './Cards';

    
export default function Cardpart() {
  return (
    <Maindiv>
        <Container>
            <Row>
                <Col md={12}>
                    <Heading>Investor Relations</Heading>
                </Col>
            </Row> 
    <Carousel >
      <Carousel.Item>
        <Row>
        <Col sm={12} xs={12} md={4} lg={4} xl={4}>
            <a href="#">
                <Cards cardImg={Cardimg1} cardTitle="News | Investment Advisory"  cardText="Life goals like education, retirement" />
            </a>
        </Col> 
        <Col sm={12} xs={12} md={4} lg={4} xl={4}>
            <a href="#">
                <Cards cardImg={Cardimg2} cardTitle="News | Financial Planning"  cardText=" Personalized investment strategies" />
            </a>
        </Col> 
        <Col sm={12} xs={12} md={4} lg={4} xl={4}>
            <a href="#">
                <Cards cardImg={Cardimg3} cardTitle="News | Wealth Management"  cardText=" Comprehensive wealth management services" />
            </a>
        </Col>    
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
        <Col sm={12} xs={12} md={4} lg={4} xl={4}>
            <a href="#">
                <Cards cardImg={Cardimg2} cardTitle="Case Study | Educational Content"  cardText=" Leading pharma improves speed to insights by 60% with " />
            </a>
        </Col> 
        <Col sm={12} xs={12} md={4} lg={4} xl={4}>
            <a href="#">
                <Cards cardImg={Cardimg3} cardTitle="News | Market Updates"  cardText="  Scrip Story: How to Speed Up MLR Reviews" />
            </a>
        </Col> 
        <Col sm={12} xs={12} md={4} lg={4} xl={4}>
            <a href="#">
                <Cards cardImg={Cardimg1} cardTitle="News | Financial Tools"  cardText="  Scrip Story: How to Speed Up MLR Reviews" />
            </a>
        </Col>    
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
        <Col sm={12} xs={12} md={4} lg={4} xl={4}>
            <a href="#">
                <Cards cardImg={Cardimg3} cardTitle="News | Medical Affairs"  cardText="  Scrip Story: How to Speed Up MLR Reviews" />
            </a>
        </Col> 
        <Col sm={12} xs={12} md={4} lg={4} xl={4}>
            <a href="#">
                <Cards cardImg={Cardimg2} cardTitle="News | Medical Affairs"  cardText="  Scrip Story: How to Speed Up MLR Reviews" />
            </a>
        </Col> 
        <Col sm={12} xs={12} md={4} lg={4} xl={4}>
            <a href="#">
                <Cards cardImg={Cardimg2} cardTitle="News | Medical Affairs"  cardText="  Scrip Story: How to Speed Up MLR Reviews" />
            </a>
        </Col>    
        </Row>
      </Carousel.Item>
    </Carousel>
                
        </Container>
    </Maindiv>
  )
}
const Maindiv = styled.section`
  padding: 80px 0;

  .carousel-control-prev, .carousel-control-next {
    opacity: 1; /* Ensure controls are visible */
  }

  .carousel-indicators {
    bottom: -55px;
    z-index: 10; /* Ensure indicators are accessible */
  }

  .carousel-indicators [data-bs-target] {
    width: 40px;
    height: 6px;
    background-color: #0539a5;
  }
`;

const Heading = styled.h1`
    padding: 10px 0
    font-size: 18px;
    font-weight: 900;
    `;
