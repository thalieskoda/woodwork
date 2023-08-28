import styled from "styled-components";

//Component containing simple information about where and how to contact Future-Fit
const ContactUs = () => {
  return (
    <Wrapper>
      <Section>
        <SectionTitle>Customer Service</SectionTitle>
        <SectionText>
          For any questions you might have, please reach out at the following
          email address:
        </SectionText>
        <SectionLink href="mailto:woodwork@hotmail.com">
          woodwork@hotmail.com
        </SectionLink>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding-bottom: 50px;
  height: 86vh;
`;

const Section = styled.div`
  margin-top: 24vh;

  margin-bottom: 32px;
  padding: 100px;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 16px;
`;

const SectionText = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
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

export default ContactUs;
