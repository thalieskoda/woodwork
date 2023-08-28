import styled from "styled-components";

export const Faq = () => {
  return (
    <Wrapper>
      <Section>
        <SectionTitle>FAQ</SectionTitle>
        <SectionText>
          How long will it take for my order to be delivered ?
        </SectionText>
        <SectionText>
          What payment methods are accepted on the e-commerce platform? Is my
          payment information secure?
        </SectionText>
        <SectionText>
          How can I track the status of my order after making a purchase?
        </SectionText>
        <SectionText>
          Are there any shipping options available? What are the shipping costs
          and estimated delivery times?
        </SectionText>
        <SectionText>
          Can I return or exchange products if I'm not satisfied? What's the
          return policy?
        </SectionText>
        <SectionText>
          Are there any discounts, promotions, or loyalty programs offered for
          frequent customers or bulk orders?
        </SectionText>
        <SectionText>
          How do I contact customer support if I have questions about products,
          orders, or any issues?
        </SectionText>
        <SectionText>
          Are product reviews and ratings available? How can I trust the quality
          and authenticity of products?
        </SectionText>
        <SectionText>
          Can I track my previous orders and reorder items easily? Is there a
          purchase history feature?
        </SectionText>
        <SectionText>
          What options are available for customizing products, such as color,
          size, engraving, etc.?
        </SectionText>
        <SectionText>
          Is there an additional cost for customizing products, and if so, how
          is the pricing determined?
        </SectionText>
        <SectionText>
          Can I preview how the customized product will look before placing my
          order?
        </SectionText>
        <SectionText>
          Can I return or exchange a customized product if I'm not satisfied
          with how it turned out?
        </SectionText>
        <SectionText>
          What's the process for providing specific requirements or design files
          for custom products?
        </SectionText>
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

const SectionText = styled.p`
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
