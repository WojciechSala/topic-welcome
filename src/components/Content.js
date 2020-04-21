import React from 'react';
import styled from 'styled-components';

const Content = () => {
  return (
    <StyledContent>
      <Heading>The new social media you've been waiting for.</Heading>
      <Hero>
        <HeroImage></HeroImage>
        <HeroHeading>What's Topic?</HeroHeading>
        <HeroInner>
          <HeroText>
            Topic is a platform that allows you to meet people that share your{' '}
            <b>specific</b> interests. You no longer will have to ask questions
            such as <i>What are you up to?</i> or <i>What's your interests?</i>{' '}
            Let's just say it's Omegle but with different approach.
          </HeroText>
          <HeroText>
            If you want to know more about the project we made a{' '}
            <a
              href="https://www.behance.net/gallery/95608867/Topic-app-mockup"
              target="_blank"
            >
              mockup
            </a>{' '}
            that shows some of our features. If you like our idea and want us to
            succeed as we do, check out our{' '}
            <a href="https://www.facebook.com/topicplatform/" target="_blank">
              facebook
            </a>{' '}
            and{' '}
            <a href="https://twitter.com/topicplatform" target="_blank">
              twitter
            </a>{' '}
            page, leave a follow and share!
          </HeroText>
        </HeroInner>
      </Hero>
    </StyledContent>
  );
};

export default Content;

const StyledContent = styled.div`
  width: 100vw;
  margin-top: 120px;
`;
const Heading = styled.p`
  margin: 0 auto;
  text-align: center;
  font-weight: 700;
  width: 90%;
  font-size: 2rem;

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
const Hero = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 90%;
`;
const HeroImage = styled.div`
  width: 90%;
  height: 300px;
  background: grey;
  margin: 0 auto;
  margin-bottom: 100px;
`;
const HeroHeading = styled.p`
  font-size: 2rem;
  font-weight: 700;
`;
const HeroInner = styled.div`
  width: 90%;
  margin: 0 auto;

  @media (min-width: 700px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
`;
const HeroText = styled.p`
  text-align: left;
  width: 100%;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 50px 0;

  a {
    color: #00ffdd;
    font-weight: 700;

    &:hover {
      cursor: pointer;
    }
  }

  @media (min-width: 700px) {
    width: 45%;
    text-align: left;
    margin: 0;
  }

  @media (min-width: 900px) {
    width: 300px;
  }
`;