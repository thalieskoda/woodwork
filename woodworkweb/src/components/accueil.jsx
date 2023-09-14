import styled from "styled-components";
import { BsCart3 } from "react-icons/bs";
import { FiLoader } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import woody from "../components/woody.jpg";
import { About } from "./footer/about";
import { Carousel } from "./products/carousel";
import { Thankyou } from "./footer/thankyou";
export const Accueil = () => {
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
          <About />
          <Carousel />
          <Thankyou />
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
  height: 80vh;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Button = styled(NavLink)`
  color: white;
  text-decoration: none;
  flex-direction: row;
  justify-content: space-around;
  background-color: #8a9a5b;
  padding: 10px 40px;
  margin-top: 20px;

  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    color:white;
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
  flex-direction: column;
`;
const Paragraph = styled.p`
  font-family: philosopher;
  font-weight: 100;
  font-size: 25px;
  opacity: 0.5;
  padding-bottom: 10px;
`;
const Title = styled.h1`
  font-family: unica one;
  text-align: center;
  font-size: 100px;
`;
