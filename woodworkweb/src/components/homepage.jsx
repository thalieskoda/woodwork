import styled from "styled-components";
import { BsCart3 } from "react-icons/bs";
import { FiLoader } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import woody from "../components/woody.jpg"
import { About } from "./footer/about";
import { Carousel } from "./products/carousel";
import { Thankyou } from "./footer/thankyou";
export const Homepage = () => {
const [isLoading, setIsLoading] = useState(false);

return (
    <>
     {isLoading ? (
        <LoadingIcon>
          <FiLoader />
        </LoadingIcon>
      ) : (
        <>
          <Container>
            <Title>WOODWORK</Title>
            <Paragraph>Engrave it, Make it unique</Paragraph>
            <Button to={"/products"}>Shop now</Button>
          </Container>
          <Div>
            <About/>
          </Div>
            <Carousel/>
            <Thankyou/>
        </>
      )}
    </>
  );
};

const LoadingIcon = styled(FiLoader)`
  position: relative;
  left: 50%;
  top: 10px;
  animation: spin 1s infinite linear;
  height:80vh;
  
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
 
const Button = styled(NavLink)`
  color: black;
  text-decoration: none;
  flex-direction: row;
  justify-content: space-around;
  
  &hover: {
      opacity: 70%;
      cursor: pointer;
  }
`;

const Container = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${woody});
  background-position: center;
  background-size: cover;
  flex-direction:column;
`;
const Paragraph = styled.p`
    font-family: philosopher;
    font-weight:100;
    font-size:20px;
    opacity:0.5;
    padding-bottom:10px;
    `
const Title = styled.h1`
    font-family: unica one;
    text-align:center;
`
const Div = styled.section`
    height:100vh;
    background-color:#f7f6f0
`