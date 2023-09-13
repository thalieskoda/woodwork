import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image3 from "../footer/image3.jpg";
import Image4 from "../footer/image4.jpg";
import Image7 from "../footer/image7.jpg";
import {
  PiArrowBendDownRightBold,
  PiArrowBendDownLeftBold,
} from "react-icons/pi";
export const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });
  const paragraphVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 1 },
  };
  return (
    <>
      <Wrapper>
        <Title>A little bit about myself</Title>

        <Container>
          <P
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={paragraphVariants}>
            Hello! My name is Geneviève, but most people call me Gen ! I am
            excited to share a bit about myself with you. As I studied in winery
            and transport logistic in college, I knew there was something more
            in life that I wanted to do.
          </P>
          <Img src={Image3} alt="Desk" />
          <Icon>
            <PiArrowBendDownRightBold />
          </Icon>
          <SmallText>This is my first workspace for WOODWORK</SmallText>
        </Container>
        <Container>
          <SmallText>My very first engraving machine!</SmallText>
          <Icon>
            <PiArrowBendDownLeftBold />
          </Icon>

          <Img src={Image4} alt="Desk" />
          <P
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={paragraphVariants}>
            Since 2019, I have been on a journey of self-discovery and
            exploration. As I entered the workforce, I quickly realized that my
            true passion lay elsewhere, specifically where I could build and
            create. The endless design and creation possibilities truly brings
            me joy.
          </P>
        </Container>
        <Container>
          <P
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={paragraphVariants}>
            I approach every project with enthusiasm and I'm always willing to
            go the extra mile to ensure the best possible results, just for you.
            Thank you for taking the time to learn a bit about me, and I look
            forward to the opportunity to collaborate with you!
          </P>
          <Img src={Image7} alt="Desk" />

          <Icon>
            <PiArrowBendDownRightBold />
          </Icon>
          <SmallText>One test among many others</SmallText>
        </Container>
      </Wrapper>
    </>
  );
};

const SmallText = styled.p`
  font-size: 15px;
  width: 100px;
  color: var(--color-accent);
`;
const Title = styled.h1`
  width: 100%;
  text-align: center;
  padding-top: 80px;
`;

const Img = styled.img`
  height: 200px;
  width: 200px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px;
  justify-content: center;
  align-items: center;
`;

const P = styled(motion.p)`
  padding: 20px;
  width: 50vw;
  font-size: 20px;
`;
const Wrapper = styled.div`
  background-color: #f7f6f0;
  border: 1px #f7f6f0 solid;

  flex-direction: column;
  justify-content: space-around;
`;

const Icon = styled.div`
  font-size: 30px;
  padding: 20px;
`;
