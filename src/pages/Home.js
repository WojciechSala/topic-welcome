import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Content from '../components/Content';
import Posts from '../components/Posts';
import Footer from '../components/Footer';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import firstPlan from '../assets/1st.png';
import secondPlan from '../assets/2nd.png';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      parallax: {
        pages: 3.6,
        content: 1,
        posts: 1.8,
        footer: 3,
      },
    };
  }

  componentDidMount() {
    if (window.innerWidth < 800 && window.innerHeight > 760) {
      this.setState({
        parallax: {
          pages: 3,
          content: 1,
          posts: 1.6,
          footer: 2.7,
        },
      });
    } else if (window.innerWidth > 800 && window.innerHeight < 760) {
      this.setState({
        parallax: {
          pages: 3,
          content: 1.2,
          posts: 1.9,
          footer: 2.6,
        },
      });
    } else if (window.innerWidth > 800 && window.innerHeight > 760) {
      this.setState({
        parallax: {
          pages: 2.54,
          content: 1,
          posts: 1.6,
          footer: 2,
        },
      });
    }
  }

  render() {
    return (
      <StyledHome>
        <Header />
        <Parallax pages={this.state.parallax.pages}>
          <ParallaxLayer offset={0.3} speed={0.5}>
            <Heading>The new social media you've been waiting for.</Heading>
          </ParallaxLayer>
          <ParallaxLayer offset={0.7} speed={0.5}>
            <img src={secondPlan} alt="parallax second plan smartphones" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.8} speed={1}>
            <img src={firstPlan} alt="parallax first plan smartphones" />
          </ParallaxLayer>
          <ParallaxLayer offset={this.state.parallax.content} speed={0.5}>
            <Content />
          </ParallaxLayer>
          <ParallaxLayer offset={this.state.parallax.posts} speed={0.5}>
            <Posts />
          </ParallaxLayer>
          <ParallaxLayer offset={this.state.parallax.footer} speed={0.5}>
            <Footer />
          </ParallaxLayer>
        </Parallax>
      </StyledHome>
    );
  }
}

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
