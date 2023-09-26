import React, { useState } from "react";
import styled from "styled-components";

export const Questions = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpen1, setIsOpen1] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [isOpen3, setIsOpen3] = React.useState(false);
  const [isOpen4, setIsOpen4] = React.useState(false);
  const [isOpen5, setIsOpen5] = React.useState(false);
  const [isOpen6, setIsOpen6] = React.useState(false);
  const [isOpen7, setIsOpen7] = React.useState(false);
  const [isOpen8, setIsOpen8] = React.useState(false);
  const [isOpen9, setIsOpen9] = React.useState(false);

  const toggleQuestion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Wrapper>
        <Section>
          <div>
            <SectionText onClick={toggleQuestion}>
              How long will it take for my order to be delivered ?
            </SectionText>
            {isOpen && (
              <>
                <p>bonsoir</p>
              </>
            )}
          </div>
          <div>
            <SectionText>
              What payment methods are accepted on the e-commerce platform? Is
              my payment information secure?
            </SectionText>
          </div>
          <SectionText>
            Are there any shipping options available? What are the shipping
            costs and estimated delivery times?
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
            How do I contact customer support if I have questions about
            products, orders, or any issues?
          </SectionText>
          <SectionText>
            Are product reviews and ratings available? How can I trust the
            quality and authenticity of products?
          </SectionText>
          <SectionText>
            Can I preview how the customized product will look before placing my
            order?
          </SectionText>
          <SectionText>
            Can I return or exchange a customized product if I'm not satisfied
            with how it turned out?
          </SectionText>
        </Section>
      </Wrapper>
    </>
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
