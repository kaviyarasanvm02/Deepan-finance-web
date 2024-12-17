import React from 'react'
import styled from 'styled-components'
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {  
  return (
    <Topheader>
      <Navbar expand="lg" className=" my-topheader">
        <Container>
            <h6> #Deepan India </h6>
            
            <Topmenuitem>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex align-items-center">
                <NavDropdown title="Who We Are" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">  Leadership </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Resposicbility</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Get in</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#home">Investor Relationship</Nav.Link>
                <Nav.Link href="#link">News</Nav.Link>
                <NavDropdown title="Carrer" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">What we do</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2"> Carre</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Openings</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link"><Btntopheader>Contact</Btntopheader></Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Topmenuitem>
        </Container>
        </Navbar>
       </Topheader>
  )
}

export default Header

const Topmenuitem = styled.div`

.
`;
const Topheader = styled.div`
  background-color:#f6f6f6;
  h6{
    font-weight: 800;
    margin: 0;
  }
  a{
      font-size: 14px;
      padding: 0;
    }
     .dropdown-menu {
        padding: 10px 15px;
    }
`;
const Btntopheader = styled.button`
  padding: 6px 15px;
  border: 1px solid #013396;
  background-color: #fff;
  font-size: 14px;
  @media screen and (max-width: 600px){
    display: none;
  }
  `;

