import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, TextareaAutosize, Radio, RadioGroup, FormControlLabel, FormControl, FormGroup, Checkbox, Button } from '@mui/material';
import { IoIosRefresh } from 'react-icons/io';
import { GiSpeaker } from 'react-icons/gi';
import { Container,Row,Col } from 'react-bootstrap';
import Cardimg1 from '../../assets/slider-img3.jpg'
export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState('');

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleCaptchaRefresh = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput('');
  };

  const handleCaptchaSpeak = () => {
    const speech = new SpeechSynthesisUtterance(captcha);
    window.speechSynthesis.speak(speech);
  };

  const handleCaptchaInputChange = (e) => {
    setCaptchaInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaInput !== captcha) {
      alert('CAPTCHA Mismatch. Please try again.');
      handleCaptchaRefresh();
      return;
    }

    if (!formData.agreeToPrivacy) {
      alert('You must agree to the Privacy Policy.');
      return;
    }

    alert('Form submitted successfully!');
    console.log(formData);
    // Reset form
    setFormData({
      email: '',
      password: '',
    });
    handleCaptchaRefresh();
  };

  return (
    <MainDiv>
        <Container>
            <Row>
                <Col md={12}>
                    <Heading>Let’s partner for #FutureReady Deepan India</Heading>
                </Col>
            </Row>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col md={12}>
                            <TextField
                            className="my-3"
                            fullWidth
                            label="Enter your Email ID"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            required
                            />
                            
                    </Col>
                    <Col md={12}>
                    <TextField
                            className="my-3"
                            fullWidth
                            label="Enter your password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleFormChange}
                            />
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col md={4}>
                        <Submitbtn type='submit'>Login</Submitbtn>
                    </Col>
                </Row>          
            </form>  
        </Container>
    </MainDiv>
  );
}


const MainDiv = styled.div`
  padding: 80px 0px;
`;

const Heading = styled.h1`
text-align: left;
  font-size: 34px;
  font-weight: bold;
  fontFamily: "Nunito Sans",
  margin-bottom: 20px;

  @media screen and (max-width: 600px){
  font-size: 24px;
  }
`;

const CaptchaWrapper = styled.div`
  margin: 20px 0;
`;

const CaptchaBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
`;

const CaptchaText = styled.div`
  font-size: 18px;
  font-weight: bold;
  fontFamily: "Nunito Sans",
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  &:hover {
    color: #007bff;
  }
`;

const Input = styled.input`
fontFamily: "Nunito Sans",
  width: 100%;
  height: 45px;
  padding: 10px;
  font-size: 16px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Submitbtn = styled.button`
    background-color: #fff;
    border: 1px solid #013396;
    padding: 10px 15px;
    margin: 10px 0;
    width: 100%;
    color: blue;
    font-weight: 800;
    transition: all 0.5s ease-in-out;
    &:hover{
    background-color: #013396;
    color: #fff;
    border: 1px solid #fff;
    }
`;
