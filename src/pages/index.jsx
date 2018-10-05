/* global tw */
import React from 'react';
import styled from 'react-emotion';
import { Parallax, ParallaxLayer } from 'react-spring';

// import Components
import SEO from '../components/SEO';
import SVG from '../components/SVG';
import { SVGTop, SVGMiddle, SVGDown } from '../components/SVGManager';
import Layout from '../components/layout'
import Projects from '../components/Projects';
import Main from '../components/Main';
import { rotate, UpDown, UpDownWide, waveAnimation, blurNormal, blurBig, boxShadowAnim } from '../styles/animations';
import { hidden } from '../styles/utils';
import { colors } from '../../tailwind';
import triangle from '../images/triangle.svg';
import avatar from '../images/avatar.jpg';
import '../styles/global';
import config from '../../config/website';

// import Fonts
import '../../node_modules/@ibm/plex/scss/ibm-plex.scss';

const Divider = styled(ParallaxLayer)`
  ${tw('absolute w-full h-full')};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const DividerMiddleBlur = styled.div`
  ${tw('absolute')};
  transform: rotate(3deg);
  animation: ${boxShadowAnim} 2s ease-in-out infinite alternate;
  background: linear-gradient(to right, #262626 0%, #202020 100%);
  width: 100%;
  height:90%;
  will-change: animation, box-shadow;
`;
const DividerMiddleMain = styled.div`
  height:90%;
  opacity: 0.9;
`;

const Content = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
`;

const Hero = styled.div`
  ${tw('w-full xl:w-2/3')};
`;

const Inner = styled.div`
  ${tw('w-full xxl:w-2/3 text-center lg:text-left')};
`;

const BigTitle = styled.h1`
  font-family:'IBM Plex Mono';
  ${tw('text-5xl lg:text-6xl text-white mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

const Title = styled.h1`
  font-family:'IBM Plex Mono';
  ${tw('text-4xl lg:text-4xl text-white mb-8 tracking-wide relative inline-block')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: absolute;
    background-size: 40px;
    animation: ${rotate} 4s linear infinite;
    left: -60px;
    top: 5px;
  }
`;

const Subtitle = styled.p`
  font-family:'IBM Plex Mono';
  ${tw('text-2xl lg:text-4xl text-white mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const WaveWrapper = styled.div`
  ${tw('absolute pin-b w-full')};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw('relative h-full')};
  svg {
    width: 100%;
    height: 40vh;
  }
`;

const AboutHero = styled.div`
  ${tw('flex flex-col lg:flex-row items-center mt-8')};
`;

const Avatar = styled.img`
  ${tw('rounded-full w-32 xl:w-48 shadow-lg h-full')};
`;

const AboutSub = styled.span`
  font-family:'IBM Plex Mono';
  ${tw('text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl')};
`;

const AboutDesc = styled.p`
  font-family:'IBM Plex Mono';
  ${tw('text-grey-light text-lg md:text-xl lg:text-2xl pt-6 md:pt-12 text-justify')};
`;

const ContactText = styled.p`
font-family:'IBM Plex Mono';
  ${tw('text-grey-light text-xl md:text-2xl lg:text-3xl')};
  a {
    color: #ff0057;
    text-decoration: none;
  }
`;

const Footer = styled.footer`
font-family:'IBM Plex Mono';
  ${tw('text-center text-grey absolute pin-b p-6 text-md lg:text-lg')};
  a {
    color: #ff0057;
    text-decoration: none;
  }
`;

// const Index = () => (
class Index extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    isArticleVisible: false,
    timeout: false,
    articleTimeout: false,
    article: '',
    loading: 'is-loading'
  }
  this.handleOpenArticle = this.handleOpenArticle.bind(this)
  this.handleCloseArticle = this.handleCloseArticle.bind(this)
}

componentDidMount () {
  this.timeoutId = setTimeout(() => {
      this.setState({loading: ''});
  }, 100);
}

componentWillUnmount () {
  if (this.timeoutId) {
      clearTimeout(this.timeoutId);
  }
}

handleOpenArticle(article) {

  this.setState({
    isArticleVisible: !this.state.isArticleVisible,
    article
  })

  setTimeout(() => {
    this.setState({
      timeout: !this.state.timeout
    })
  }, 325)

  setTimeout(() => {
    this.setState({
      articleTimeout: !this.state.articleTimeout
    })
  }, 350)

}

handleCloseArticle() {

  this.setState({
    articleTimeout: !this.state.articleTimeout
  })

  setTimeout(() => {
    this.setState({
      timeout: !this.state.timeout
    })
  }, 325)

  setTimeout(() => {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article: ''
    })
  }, 350)

}
  render() {
    return (
  <React.Fragment>
    <SEO />
    <Parallax pages={4}>
      <SVGTop />
      <Content speed={0.4} offset={0}>
        <Hero>
          <BigTitle>
            Hello, <br /> I'm Alex.
          </BigTitle>
          <Subtitle>I'm creating state of the art web, VR and app experiences.</Subtitle>
        </Hero>
      </Content>
      <Divider speed={-0.2} offset={1.1}>
      <DividerMiddleBlur />
      </Divider>
      <Content speed={0.4} offset={1}>
        <Inner>
          <Title>PROJECTS</Title>
           <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
              <div id="wrapper">
                  <Projects onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
                  <Main
                    isArticleVisible={this.state.isArticleVisible}
                    timeout={this.state.timeout}
                    articleTimeout={this.state.articleTimeout}
                    article={this.state.article}
                    onCloseArticle={this.handleCloseArticle}
                  />
              </div>
          </div>
        </Inner>
      </Content>
      <SVGMiddle />
      <Content speed={0.4} offset={2}>
        <Inner>
          <Title>ABOUT</Title>
          <AboutHero>
            <Avatar type="image/jpg" src={avatar} alt="John Doe" />
            <AboutSub>
              The English language can not fully capture the depth and complexity of my thoughts. So I'm incorporating
              Emoji into my speech to better express myself. Winky face.
            </AboutSub>
          </AboutHero>
          <AboutDesc>
            You know the way you feel when you see a picture of two otters holding hands? That's how you're gonna feel
            every day. My mother cried the day I was born because she knew she’d never be prettier than me. You should
            make me your campaign manager. I was born for politics. I have great hair and I love lying. Captain? The
            kids want to know where Paulie the Pigeon is. I told them he got sucked up into an airplane engine, is that
            all right?
          </AboutDesc>
        </Inner>
      </Content>
      <Divider fill="#23262b" speed={0.2} offset={3}>
        <WaveWrapper>
          <InnerWave>
            <svg viewBox="0 0 800 338.05" preserveAspectRatio="none">
              <path className={waveAnimation}>
              </path>
            </svg>
          </InnerWave>
        </WaveWrapper>
      </Divider>
      <Content speed={0.4} offset={3}>
        <Inner>
          <Title>GET IN TOUCH</Title>
          <ContactText>
            Say <a href="mailto:s_alexander@hotmail.de">Hi</a> or find me on other platforms:{' '}
            <a href={config.siteFacebook}>Facebook</a> &{' '}
            <a href={config.siteInstagram}>Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2018 by Alexander Stricker.{' '}
          <a href={config.github}>Github Repository</a>.
        </Footer>
      </Content>
      <SVGDown />
    </Parallax>
    <noscript>Your browser does not support JavaScript!</noscript>
  </React.Fragment>
);
}
}

export default Index;
