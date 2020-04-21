import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <div>LOGO</div>
        <FooterSection>
          <SectionHeader>Product</SectionHeader>
          <span>Android App</span>
          <span>iOS App</span>
          <span>Web App</span>
        </FooterSection>
        <FooterSection>
          <SectionHeader>Resources</SectionHeader>
          <span>About & FAQ</span>
          <span>Feedback</span>
          <span>Support</span>
          <span>Terms & Privacy</span>
        </FooterSection>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  width: 100%;
  height: 300px;
  background: #f7f7f7;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const FooterContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 50px;

  @media (min-width: 700px) {
    justify-content: space-around;
  }
`;
const FooterSection = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-top: 15px;
  }
`;
const SectionHeader = styled.p`
  font-weight: 700;
`;
