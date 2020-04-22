import React from 'react';
import styled from 'styled-components';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import firstPlan from '../assets/1st.png';
import secondPlan from '../assets/2nd.png';

const Banner = () => {
  return (
    <StyledBanner>
      <Parallax pages={2}>
        <ParallaxLayer offset={0} speed={0.1}>
          <Heading>The new social media you've been waiting for.</Heading>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.1}>
          <img src={secondPlan} />
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={1}>
          <img src={firstPlan} />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}></ParallaxLayer>
      </Parallax>
    </StyledBanner>
  );
};

export default Banner;

const StyledBanner = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
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
    width: 60%;
    font-size: 2.5rem;
  }
  @media (min-width: 1024px) {
    width: 40%;
  }
`;
