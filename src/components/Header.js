import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/word 1k or.png';

const Header = ({ lang }) => {
  return (
    <StyledHeader>
      <HeaderInner>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <Link class="more-btn" to="/faq">
          {lang === 'pl-PL' || lang === 'pl'
            ? 'WIĘCEJ SZCZEGÓŁÓW'
            : 'MORE DETAILS'}
        </Link>
      </HeaderInner>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  height: 60px;
  width: 100%;
  z-index: 2;

  -webkit-box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
`;
const HeaderInner = styled.div`
  width: calc(100vw - 100px);
  height: 100%; margin: 0 auto;
   font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 60px;
  }

  .more-btn {
    transition: color 0.3s ease-in;
    -webkit-transition: color 0.3s ease-in;
    -moz-transition: color 0.3s ease-in;
    -ms-transition: color 0.3s ease-in;
    -o-transition: color 0.3s ease-in;

    :hover {
      color: #f44336;
      transition: color 0.3s ease-in
      -webkit-transition: color 0.3s ease-in;
      -moz-transition: color 0.3s ease-in;
      -ms-transition: color 0.3s ease-in;
      -o-transition: color 0.3s ease-in;
    }
  }
`;
