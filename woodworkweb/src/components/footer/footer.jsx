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
        <h1>This is the footer</h1>

        <Link to="contact">Contact us</Link>
        <Link to="about">About Us</Link>
        <Wrapper>
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
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;