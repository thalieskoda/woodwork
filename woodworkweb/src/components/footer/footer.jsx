import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { PiTiktokLogo } from "react-icons/pi";
export const Footer = () => {
  return (
    <>
      <Wrapper>
        <Link to="contact">Contact us</Link>
        <Link to="about">About Us</Link>
        <Link to="faq">FAQ</Link>

        <Link to="#">
          <AiOutlineFacebook />
        </Link>
        <Link to="#">
          <AiOutlineInstagram />
        </Link>
        <Link to="#">
          <PiTiktokLogo />
        </Link>
      </Wrapper>
    </>
  );
};

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
