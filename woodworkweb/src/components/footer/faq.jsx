import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

//Component containing simple information about Future-Fit
export const Faq = () => {

  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.6 });
  const paragraphVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 1},
  };
  return (
    <>
      <Wrapper>
     ALLO
      </Wrapper>
    </>
  );
};

const P = styled(motion.p)`
  padding: 20px;

`;
const Wrapper = styled.div`
  height: 100vh;
  flex-direction: column;
  justify-content: space-around;
`;
