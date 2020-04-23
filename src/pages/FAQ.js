import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import enFAQ from '../assets/enFAQ';
import plFAQ from '../assets/plFAQ';

const FAQ = () => {
  return (
    <StyledFAQ>
      <Header />
      <FAQContainer>
        {enFAQ.map((item) => (
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
  margin-bottom: 200px;
`;
const FAQContainer = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 90%;
  display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    width: 400px;
  }

  @media (min-width: 800px) {
    width: 700px;
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
