import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Content from '../components/Content';
import Posts from '../components/Posts';
import Footer from '../components/Footer';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import firstPlan from '../assets/1st.png';
import secondPlan from '../assets/2nd.png';

const Home = () => {
  return (
    <StyledHome>
      <Header />
      <Parallax pages={window.innerWidth > 800 ? 2.9 : 3.6}>
        <ParallaxLayer offset={0.3} speed={0.5}>
          <Heading>The new social media you've been waiting for.</Heading>
        </ParallaxLayer>
        <ParallaxLayer offset={0.7} speed={0.5}>
          <img src={secondPlan} />
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={1}>
          <img src={firstPlan} />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <Content />
        </ParallaxLayer>
        <ParallaxLayer offset={window.innerWidth > 800 ? 1.7 : 1.8} speed={0.5}>
          <Posts />
        </ParallaxLayer>
        <ParallaxLayer offset={window.innerWidth > 800 ? 2.45 : 3} speed={0.5}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  width: 100vw;
  text-align: center;

  .parallax-layer {
    width: 100vw;
    margin: 0 auto;
  }
  .parallax-image {
    margin: 0 auto;
  }
`;
const Heading = styled.p`
  margin: 0 auto;
  text-align: center;
  font-weight: 700;
  width: 80%;
  font-size: 1.8rem;

  margin-bottom: 50px;

  @media (min-width: 500px) {
    width: 80%;
    font-size: 2.2rem;
  }
  @media (min-width: 820px) {
    width: 550px;
    font-size: 2.5rem;
  }
`;
