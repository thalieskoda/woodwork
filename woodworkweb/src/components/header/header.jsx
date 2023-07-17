import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "../header/cat.webp"


export const Header =() => {
    return (
        <Container>
        <h1>WoodWork</h1>
    <Link to="/">
        <Img src={logo}/>
    </Link>
        </Container>
        
    )
};
const Link = styled(NavLink)`
  color: black;
  text-decoration: none;

  &hover: {
    opacity: 70%;
  cursor: pointer;
  }`;

const Img = styled.img`
  height: 150px;
  width: 200px;
  object-fit: contain;
  align-self: center;
  transition: transform 0.3s ease-in-out;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-size: cover;
  height: auto;
  padding: 0 40px 0 14px;
  border-bottom: 1px black solid;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 1450px) {
    flex-direction: column;
    height: auto;
    padding: 10px 0 0 0;
  }
`;