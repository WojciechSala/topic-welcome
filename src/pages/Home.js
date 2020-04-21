import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Content from '../components/Content';
import Posts from '../components/Posts';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <StyledHome>
      <Header />
      <Content />
      <Posts />
      <Footer />
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  width: 100vw;
`;
