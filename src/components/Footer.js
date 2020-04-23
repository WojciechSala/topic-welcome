import React from 'react';
import styled from 'styled-components';
import logo from '../assets/word 1k bl.png';
import { Link } from 'react-router-dom';

const Footer = ({ lang }) => {
  return (
    <StyledFooter>
      <FooterContainer>
        <img src={logo} alt="logo" />
        <FooterSection>
          <SectionHeader>{lang === 'pl' ? 'Produkt' : 'Product'}</SectionHeader>
          <span>
            <Link to="/faq">Android App</Link>
          </span>
          <span>
            <Link to="/faq">iOS App</Link>
          </span>
          <span>
            <Link to="/faq">Web App</Link>
          </span>
        </FooterSection>

        {lang === 'pl' ? (
          <FooterSection>
            <SectionHeader>Dokumenty</SectionHeader>
            <span>
              <Link to="/faq">O nas & FAQ</Link>
            </span>
            <span>Opinia</span>
            <span>Pomoc</span>
            <span>Polityka prywatności</span>
          </FooterSection>
        ) : (
          <FooterSection>
            <SectionHeader>Resources</SectionHeader>
            <span>
              <Link to="/faq">About & FAQ</Link>
            </span>
            <span>Feedback</span>
            <span>Support</span>
            <span>Terms & Privacy</span>
          </FooterSection>
        )}
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
  margin-top: 30px;

  img {
    width: 60px;
    margin-top: 15px;
  }

  @media (min-width: 500px) {
    justify-content: space-around;
  }

  @media (min-width: 1400px) {
    width: 1000px;
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
