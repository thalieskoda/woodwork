import ContactUs from "./contact-us"
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
    AiOutlineYoutube,
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineTwitter,
  } from "react-icons/ai";

export const Footer = () => {
    return(
    <>
        <Wrapper>
        <Link to="contact">Contact us</Link>
        <Link to="about">About Us</Link>
        <Link to="faq">FAQ</Link>
        <Link to="#">
          <AiOutlineYoutube />
        </Link>
        <Link to="#">
          <AiOutlineFacebook />
        </Link>
        <Link to="#">
          <AiOutlineInstagram />
        </Link>
        <Link to="#">
          <AiOutlineTwitter />
        </Link>
      </Wrapper>
        </>
    )
}



 
const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
  flex-direction: row;
  justify-content: space-around;
  &hover: {
    opacity: 70%;
  cursor: pointer;
  }
`;
const Wrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #f7f6f0;
`;

const Container = styled.div`
    background-color:blue;

`