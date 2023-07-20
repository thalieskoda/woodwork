import styled from "styled-components";

export const Thankyou = () => {
  return (
    <Container>
      <Circle>
        <Thanks>Thank you for your support!</Thanks>
      </Circle>
      <Weird>
        
        <Review>Don't hesitate to leave a review</Review>
      </Weird>
    </Container>
  );
};

const Thanks = styled.h1`
font-size:20px;
`;

const Review = styled.h1`
font-size:15px;
color:white;
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
  height: 50vh;
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
  background-color: #8A9A5B;
  height: 50vh;
  width: 20vw;
  margin:20px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efe8dd;
  height: 50vh;
`;