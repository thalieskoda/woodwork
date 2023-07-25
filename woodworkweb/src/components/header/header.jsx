import styled from "styled-components";
import { NavLink } from "react-router-dom";
import picture from "../header/poups.png"

export const Header = () => {
  return (
    <Wrapper>
      <LogoContainer to="/" >

        <Img src={picture} alt="Your SVG" />
      </LogoContainer>
      <Container>
        <Link to="/">Home</Link>
        <Link>Shop</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="/about">About us</Link>
        <Link>FAQ</Link>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 999;
  background-color: transparent;
  /* background-color: #8A9A5B; */
  display: flex;
opacity:0.6;
  align-items: center;
  justify-content: space-between; 
`
const LogoContainer = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-left: 20px; 
`

const Img = styled.img`
  height: 100px;
  width: 100px;
`;

const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin: 0 30px;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const Container = styled.div`
  font-family: poppins;
  font-weight: 600;
  display: flex;
  align-items: center;
  padding: 10px 60px;
`;