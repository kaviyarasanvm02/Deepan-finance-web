import React, { useState } from "react";
import styled from "styled-components";
import Deepalogo from "../../assets/logos/logo-deepan.png";
import Container from "react-bootstrap/Container";
import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const Header = styled.header`
  position: sticky;
  top: 0;
  background: #fff;
  width: 100%;
  z-index: 2;
 
  }
`;

const MyContainer = styled.div`
  padding: 0 2rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const LogoContainer = styled.div`
  flex: 1;
`;

const Logo = styled.img`
  width: 30%;
`;

const NavBtn = styled.div`
  display: flex;

  @media (max-width: 920px) {
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: white;
    transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-100%)")};
    transition: transform 0.3s ease-in-out;
    z-index: 10;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 920px) {
    flex-direction: column;
    width: 100%;
  }
`;

const NavLink = styled.li`
  position: relative;
  color: #000;
  padding: 0 0.8rem;
  letter-spacing: 1px;
  font-size: 0.9rem;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    transform: scale(1);
  }

  @media (max-width: 920px) {
    width: 100%;
    padding: 1rem;
    text-align: left;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  width: 15rem;
  background-color: #fff;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transform: ${({ show }) => (show ? "translateY(0)" : "translateY(5px)")};
  pointer-events: ${({ show }) => (show ? "auto" : "none")};
  transition: opacity 0.3s, transform 0.3s;
  z-index: 10;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: block;
      font-size: 0.7rem;
      padding: 0.5rem 1rem;
      color: #000;
      background: #fff;
      transition: 0.3s;

      &:hover {
        color: #fff;
        background-color: #013396;
        border-top: 5px solid blue;
      }
    }
  }

  @media (max-width: 920px) {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;

  @media (max-width: 920px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25px;
    height: 15px;
    cursor: pointer;

    div {
      width: 100%;
      height: 3px;
      background-color: #07319f;
      transition: all 0.3s;

      &:nth-child(1) {
        transform: ${({ isOpen }) => (isOpen ? "rotate(45deg) translateY(8px)" : "none")};
      }
      &:nth-child(2) {
        opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
      }
      &:nth-child(3) {
        transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg) translateY(-8px)" : "none")};
      }
    }
  }
`;

const HeaderBottom = () => {
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // Added state for mobile menu
  let hoverTimeout;

  const handleMouseEnter = (index) => {
    clearTimeout(hoverTimeout);
    setVisibleDropdown(index);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setVisibleDropdown(null);
    }, 300);
  };

  return (
    <Header>
      <Container>
        <MyContainer>
          <LogoContainer>
            <Logo src={Deepalogo} alt="Logo" />
          </LogoContainer>
          <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
            <div />
            <div />
            <div />
          </Hamburger>
          <NavBtn isOpen={isOpen}>
            <NavLinks>
              <NavLink
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={handleMouseLeave}
              >
                Who We Serve <FaAngleDown />
                <Dropdown show={visibleDropdown === 0}>
                  <ul>
                    <li>Biopharmaceuticals</li>
                    <li>Emerging Biotech</li>
                    <li>Medical Devices</li>
                  </ul>
                </Dropdown>
              </NavLink>
              <NavLink
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              >
                What We Do <FaAngleDown />
                <Dropdown show={visibleDropdown === 1}>
                  <ul>
                  <li>Enterprise Commercial Solutions</li>
                  <li>Enterprise Medical Solutions</li>
                  <li>Enterprise Clinical Solutions</li>
                  <li>Omnichannel Activation Solutions</li>
                  <li>Generative AI-Powered Commercialization</li>
                  <li>Connected Commercial</li>
                  <li>Connected Content Ecosystemx</li>
                  <li>Connected Content Ecosystem</li>
                  <li>Agency Of Scale</li>
                  <li>NEXT Technology Platforms</li>
                  </ul>
                </Dropdown>
              </NavLink>
              <NavLink
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
              >
                How We Deliver <FaAngleDown />
                <Dropdown show={visibleDropdown === 2}>
                  <ul>
                  <li>Consulting</li>
                  <li>Centers of Excellence</li>
                  <li>Tech-Led GCC Capabilities</li>
                  <li>Development and Co-Commercialization</li>
                  </ul>
                </Dropdown>
              </NavLink>
              <NavLink
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}
              >
                What We Think <FaAngleDown />
                <Dropdown show={visibleDropdown === 3}>
                  <ul>
                  <li>Blogs</li>
                  <li>Videos</li>
                  <li>Reports</li>
                  <li>Case Studies</li>
                  <li>Indegene Digital Summit</li>
                  <li>Industry Councils</li>
                  </ul>
                </Dropdown>
              </NavLink>
              <NavLink className="search">
                <FaSearch />
              </NavLink>
            </NavLinks>
          </NavBtn>
        </MyContainer>
      </Container>
    </Header>
  );
};

export default HeaderBottom;
