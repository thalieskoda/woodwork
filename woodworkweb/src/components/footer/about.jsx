import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

//Component containing simple information about Future-Fit
export const About = () => {

  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.6 });
  const paragraphVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 1},
  };
  return (
    <>
      <Wrapper>
        <h1>About me</h1>
        <Container>
        <P ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={paragraphVariants}>
          Hello! My name is Thalie, and I am excited to share a bit about myself
          with you. I earned my Bachelor's degree in Administration of Business
          in 2021 and have since been on a journey of self-discovery and
          exploration. From a young age, I have been involved in sports,
          specifically hockey and soccer, and have been fortunate enough to lead
          my teams as captain or assistant on multiple occasions. This
          experience has taught me the importance of teamwork, communication,
          and dedication, all of which have been essential in shaping who I am
          today.
        </P>
        </Container>
        <Container>
        <P  ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={paragraphVariants}>
          As I entered the workforce, I quickly realized that my true passion
          lay elsewhere, specifically in the tech industry. With an insatiable
          desire to learn and grow, I decided to pivot from my previous role in
          customer service to pursue a more fulfilling career in web
          development. The endless design possibilities and thrill of overcoming
          obstacles bring me immense satisfaction, and I am eager to continue
          developing my skills in this field.
        </P>
        </Container>
        <Container>
        <P ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={paragraphVariants}>
          Despite my career shift, the skills I developed in customer service
          have been invaluable to my growth as a web developer. Exceptional
          problem-solving and communication skills are essential to any
          successful team, and I am grateful for the experience I have gained in
          this area. I approach every task with enthusiasm and am always willing
          to go the extra mile to ensure the best possible results. Thank you
          for taking the time to learn a bit about me, and I look forward to the
          opportunity to collaborate with you!
        </P>
        </Container>
      </Wrapper>
    </>
  );
};

const Container = styled.div`
display:flex;
flex-direction:row;
margin:40px;
`

const P = styled(motion.p)`
  padding: 20px;

`;
const Wrapper = styled.div`
  height: 100vh;
  flex-direction: column;
  justify-content: space-around;
`;