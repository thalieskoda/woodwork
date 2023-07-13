import styled from "styled-components";

//Component containing simple information about where and how to contact Future-Fit
const ContactUs = () => {
  return (
    <Wrapper>
      <Title>Contact Us</Title>
      <Box>
        <Section>
          <SectionTitle>Customer Service</SectionTitle>
          <SectionText>
            For any questions you might have, please reach out to our customer
            service team at the following email address:
          </SectionText>
          <SectionLink href="mailto:info@futurefit.com">
            info@futurefit.com
          </SectionLink>
        </Section>
        <Section>
          <SectionTitle>Careers</SectionTitle>
          <SectionText>
            If you would like to work with us, please send us your CV at the
            following email address:
          </SectionText>
          <SectionLink href="mailto:career@futurefit.com">
            career@futurefit.com
          </SectionLink>
        </Section>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin: 48px;
`;

const Box = styled.div`
  border: 1px solid black;
  border-radius: 2px;
  padding: 24px;
  max-width: 600px;
`;

const Section = styled.div`
  margin-bottom: 32px;
  padding: 20px;
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
  border-radius: 25px;
  color: black;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 50px;
  transition: all 0.3s ease;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px black solid;

  &:hover {
    background-color: #d4ff8a;
  }
`;

export default ContactUs;
