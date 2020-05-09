import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Content from '../components/Content';
import Functions from '../components/Functions';
import Quotes from '../components/Quotes';
import Posts from '../components/Posts';
import Reason from '../components/Reason';
import Footer from '../components/Footer';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import firstPlan from '../assets/1st.png';
import secondPlan from '../assets/2nd.png';
import detectBrowserLanguage from 'detect-browser-language';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      lang: 'en',
      parallax: {
        pages: 6,
        content: 1,
        functions: 1.9,
        quotes: 2.5,
        posts: 3,
        reason: 4.8,
        footer: 5.6
      }
    };
  }

  componentDidMount() {
    const lang = detectBrowserLanguage();
    if (lang === 'pl-PL' || lang === 'pl') this.setState({ lang: 'pl' });
    else this.setState({ lang: 'en' });

    // Parallax RWD
    // iphone 5/SE
    if (window.innerHeight < 640) {
      this.setState({
        parallax: {
          pages: 7,
          content: 1,
          functions: 1.999,
          quotes: 2.7,
          posts: 3.6,
          reason: 5.3,
          footer: 6.5
        }
      });
    }
    // sm android
    else if (window.innerHeight === 640) {
      this.setState({
        parallax: {
          pages: 6,
          content: 1,
          functions: 1.9,
          quotes: 2.5,
          posts: 3,
          reason: 4.8,
          footer: 5.6
        }
      });
    }
    // iphone x
    else if (window.innerWidth === 375 && window.innerHeight === 812) {
      this.setState({
        parallax: {
          pages: 5.2,
          content: 1,
          functions: 1.8,
          quotes: 2.2,
          posts: 2.99,
          reason: 4,
          footer: 4.999
        }
      });
      // ipad vertical
    } else if (window.innerWidth === 768 && window.innerHeight === 1024) {
      this.setState({
        parallax: {
          pages: 4.5,
          content: 1,
          functions: 1.5,
          quotes: 2,
          posts: 2.6,
          reason: 3.6,
          footer: 4
        }
      });
    } else if (window.innerWidth < 800 && window.innerHeight > 760) {
      this.setState({
        parallax: {
          pages: 4.75,
          content: 1,
          functions: 1.7,
          quotes: 2,
          posts: 2.7,
          reason: 3.9,
          footer: 4.3
        }
      });
    }
    // ipad pro
    else if (window.innerWidth === 1024 && window.innerHeight === 1366) {
      this.setState({
        parallax: {
          pages: 3.48,
          content: 1,
          functions: 1.38,
          quotes: 1.99,
          posts: 2,
          reason: 2.8,
          footer: 3
        }
      });
    } else if (window.innerWidth > 800 && window.innerHeight < 760) {
      this.setState({
        parallax: {
          pages: 3,
          content: 1.2,
          posts: 1.9,
          footer: 2.6
        }
      });
    } else if (window.innerWidth > 800 && window.innerHeight > 760) {
      this.setState({
        parallax: {
          pages: 4.2,
          content: 1,
          functions: 1.6,
          quotes: 2,
          posts: 2.6,
          reason: 3.2,
          footer: 3.99
        }
      });
    }
  }

  render() {
    return (
      <StyledHome>
        <Header lang={this.state.lang} />
        <Parallax pages={this.state.parallax.pages}>
          <ParallaxLayer offset={0.3} speed={0.5}>
            <Heading>
              {this.state.lang === 'pl'
                ? 'Platforma dla ludzi z pasją.'
                : 'The platform for people with passion.'}
            </Heading>
          </ParallaxLayer>
          <ParallaxLayer offset={0.7} speed={0.5}>
            <img src={secondPlan} alt="parallax second plan smartphones" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.8} speed={1}>
            <img src={firstPlan} alt="parallax first plan smartphones" />
          </ParallaxLayer>
          <ParallaxLayer offset={this.state.parallax.content} speed={0.5}>
            <Content lang={this.state.lang} />
          </ParallaxLayer>
          <ParallaxLayer offset={this.state.parallax.functions} speed={0.5}>
            <Functions lang={this.state.lang} />
          </ParallaxLayer>
          <ParallaxLayer offset={this.state.parallax.quotes} speed={0.5}>
            <Quotes lang={this.state.lang} />
          </ParallaxLayer>
          <ParallaxLayer offset={this.state.parallax.posts} speed={0.5}>
            <Posts lang={this.state.lang} />
          </ParallaxLayer>
          <ParallaxLayer offset={this.state.parallax.reason} speed={0.5}>
            <Reason lang={this.state.lang} />
          </ParallaxLayer>
          <ParallaxLayer offset={this.state.parallax.footer} speed={0.5}>
            <Footer lang={this.state.lang} />
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
