import React from 'react';
import styled from 'styled-components';

const Content = () => {
  return (
    <StyledContent>
      <Hero>
        <HeroHeading>What's Topic?</HeroHeading>
        <HeroInner>
          <HeroText>
            Topic is a platform that allows you to meet people that share your{' '}
            specific interests. You no longer will have to ask questions such as{' '}
            <i>What are you up to?</i> or <i>What's your interest?</i> Let's
            just say it's Omegle but with different approach.
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
`;
const Hero = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 90%;
`;
const HeroHeading = styled.p`
  font-size: 1.5rem;
  font-weight: 700;

  @media (min-width: 500px) {
    font-size: 2rem;
  }
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

  i {
    color: #f44336;
  }
  a {
    color: #f44336;
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
