import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { PiTiktokLogo } from "react-icons/pi";
export const Thankyou = () => {
  return (
    <Container>
      <Circle>
        <Thanks>Thank you for your support!</Thanks>
      </Circle>
      <Weird>
        <Review>Don't hesitate to leave a review</Review>
      </Weird>
      <Follow>
        <Text>Follow me</Text>
        <SocialMedia>
          <Link to="#">
            <AiOutlineFacebook />
          </Link>
          <Link to="#">
            <AiOutlineInstagram />
          </Link>
          <Link to="#">
            <PiTiktokLogo />
          </Link>
        </SocialMedia>
      </Follow>
    </Container>
  );
};

const Link = styled(NavLink)`
  color: white;
  text-decoration: none;
  display: inline-block; /* Ensures that the link doesn't take the full width */
  font-size: 20px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
    transform: scale(1.3); /* Enlarge the icon without affecting layout */
  }
`;

const Thanks = styled.h1`
  font-size: 20px;
`;

const Review = styled.h1`
  font-size: 15px;
  color: white;
`;
const Text = styled.h1`
  font-size: 15px;
  color: white;
  margin: 100px;
`;
const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: #f7f6f0;
  height: 70vh;
  width: 20vw;
`;
const Weird = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 100px;
  border-top-right-radius: 100%;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: #8a9a5b;
  height: 70vh;
  width: 20vw;
  margin: 20px;
`;
const Follow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top-left-radius: 50%;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: #aabd73;
  height: 70vh;
  width: 20vw;
  margin: 20px;
`;
const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efe8dd;
  height: 70vh;
`;
