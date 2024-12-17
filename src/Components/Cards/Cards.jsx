import React from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card';
export default function Cards({cardImg, cardTitle, cardText}) {
  return (
    <Mycard>
        <Card >
        <CardImg>
        <Card.Img variant="top" className='cardimg' src={cardImg} />
        </CardImg>
        <Card.Body className='card-bordy'>
            <Card.Title>{cardTitle}</Card.Title>
            <Card.Text className='text'>
            {cardText}
            </Card.Text>
        </Card.Body>
        </Card>
    </Mycard>
  )
}


 const Mycard = styled.div`
 margin: 15px 0;


 .card-bordy
 {position: relative;
  padding: 20px;
  background-color: #fff;
  height: 200px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px; /* Adjust the height of the "border" */
    background: linear-gradient(90deg, rgba(250,0,1,1) 1%, rgba(0,0,0,0.7147233893557423) 54%, rgba(7,49,159,1) 97%);
  }
   .text{
    font-weight: 900;
    font-size: 26px;

       @media screen and (max-width: 600px) {
  font-size: 22px ;

} 

      @media (min-width: 768px) and (max-width: 1024px) {
  font-size: 16px ;

} 
 `;  
 const CardImg =styled.div`
    position: relative;
    overflow: hidden;
    transition: 0.6s ease-in-out;
    .cardimg{
        transform: scale(1.1);
        transition: all 0.5s
    }
    &:hover .cardimg{
         transform: scale(1.2);
    }    
 `; 
