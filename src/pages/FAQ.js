import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import FAQtext from '../assets/FAQtext';

const FAQ = () => {
  return (
    <StyledFAQ>
      <Header />
      <FAQContainer>
        {FAQtext.map((item) => (
          <FAQInner>
            <Question>{item.Q}</Question>
            <Answer>{item.A}</Answer>
          </FAQInner>
        ))}
      </FAQContainer>
    </StyledFAQ>
  );
};

export default FAQ;

const StyledFAQ = styled.div`
  width: 100vw;
`;
const FAQContainer = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: self-start;

  @media (min-width: 500px) {
  }
`;
const FAQInner = styled.div`
  margin-bottom: 20px;
`;
const Question = styled.p`
  font-weight: 700;
  font-size: 1.6rem;
`;
const Answer = styled.p``;
