import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import Cardimg3 from '../../../assets/landingImage3.jpg'
import Cardimg4 from '../../../assets/slider-img1.jpg'
import Cardimg5 from '../../../assets/slider-img2.jpg'
import Cardimg6 from '../../../assets/slider-img3.jpg'
import Cardimg7 from '../../../assets/slider-img4.jpg'
import Cardimg8 from '../../../assets/slider-img5.jpg'
import Cards from './Cards';

    
export default function Cardpart() {
  return (
    <Maindiv id='card'>
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
                <Cards cardImg={Cardimg8} cardTitle="News | Investment Advisory"  cardText="Life goals like education, retirement" />
            </a>
        </Col> 
        <Col sm={12} xs={12} md={4} lg={4} xl={4}>
            <a href="#">
                <Cards cardImg={Cardimg7} cardTitle="News | Financial Planning"  cardText=" Personalized investment strategies" />
            </a>
        </Col> 
        <Col sm={12} xs={12} md={4} lg={4} xl={4}>
            <a href="#">
                <Cards cardImg={Cardimg6} cardTitle="News | Wealth Management"  cardText=" Comprehensive wealth management services" />
            </a>
        </Col>    
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
        <Col sm={12} xs={12} md={4} lg={4} xl={4}>
            <a href="#">
                <Cards cardImg={Cardimg3} cardTitle="Case Study | Educational Content"  cardText="  Swing Trading, Day trading & Option strategies" />
            </a>
        </Col> 
        <Col sm={12} xs={12} md={4} lg={4} xl={4}>
            <a href="#">
                <Cards cardImg={Cardimg4} cardTitle="News | Market Updates"  cardText="Full time career / Second Income opportunities"   />
            </a>
        </Col> 
        <Col sm={12} xs={12} md={4} lg={4} xl={4}>
            <a href="#">
                <Cards cardImg={Cardimg5} cardTitle="News | Financial Tools"  cardText=" Our Team assists to choose right funds based on investors goal" />
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
