import styled from "styled-components";
import { Questions } from "./questions";

export const Faq = () => {
  return (
    <Wrapper>
      <Section>
        <SectionTitle>FAQ</SectionTitle>
        <Questions/>
        <Help>
          <HelpText>
            For any unanswered questions that you might have, please reach out
            at the following email address:
          </HelpText>
          <SectionLink href="mailto:woodwork@hotmail.com">
            woodwork@hotmail.com
          </SectionLink>
        </Help>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`;

const Help = styled.div`
  text-align: center;
`;

const HelpText = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;
const Section = styled.div`
  padding: 100px 100px 0px 100px;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 16px;
`;

const SectionText = styled.button`
  font-size: 16px;
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 15px;
`;

const SectionLink = styled.a`
  background-color: var(--color-accent);
  border: none;
  border-radius: 8px;
  color: black;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 50px;
  transition: all 0.3s ease;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px black solid;

  &:hover {
    background-color: #edf0f2;
  }
`;

export default Faq;
