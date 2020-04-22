import React from 'react';
import styled from 'styled-components';
import logo from '../assets/word 1k bl.png';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <img src={logo} alt="logo" />
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

  img {
    width: 60px;
    margin-top: 15px;
  }

  @media (min-width: 500px) {
    justify-content: space-around;
  }
`;
const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  span {
    margin-top: 15px;
  }
`;
const SectionHeader = styled.p`
  font-weight: 700;
`;
