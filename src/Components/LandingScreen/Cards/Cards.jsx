import React from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card';
import { Url } from '../../../utils/api';
export default function Cards({ e }) {
  // const image = Url || e?.image || "";
  const { description, subTitle, title } = e || {};
  console.log(e)
  return (
    <Mycard>
      <Card >
        <CardImg>
          <img className='cardimg' src={typeof e?.image === "object"
            ? URL.createObjectURL(e.image)
            : Url + e.image} />
        </CardImg>
        <Card.Body className='card-bordy'>
          <Card.Title>{subTitle}</Card.Title>
          <Card.Text className='text'>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Mycard>
  )
}


const Mycard = styled.div`
 margin: 15px 0;

  Img{
    height: 250px;
  }
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
const CardImg = styled.div`
    position: relative;
    overflow: hidden;
    transition: 0.6s ease-in-out;
   
    .cardimg{
        transform: scale(1.1);
        transition: all 0.5s ease-in-out;
         width: 100%;
        
    }
    &:hover .cardimg{
         transform: scale(1.2);
    }    
 `; 
