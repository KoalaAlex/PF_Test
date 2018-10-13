/* global tw */
import React from 'react';
import styled from 'react-emotion';
import { Parallax, ParallaxLayer } from 'react-spring';
import { CSSParallax, CSSParallaxGroup, CSSParallaxLayer } from '../components/CSSParallax';

// import Components
import SEO from '../components/SEO';
import { SVG } from '../components/SVG';
import { SVGOriginals, SVGPageOne, SVGPageTwo, SVGPageThree, SVGPageFour, SVGPageFive, SVGPageSix } from '../components/SVGManager';
import Projects from '../components/Projects';
import ProjectContent from '../components/ProjectContent';
import { waveAnimation, boxShadowAnim, hopAnimDown, fadeAnimation } from '../styles/animations';
import { hidden } from '../styles/utils';
import { colors } from '../../tailwind';
import avatar from '../images/avatar.jpg';
import '../styles/global';
import config from '../../config/website';
import MediaQuery from 'react-responsive';

const commentText = "╔═╗┌─┐┌┬┐┌┬┐┌─┐┌┐┌┌┬┐┌─┐  ┌─┐┌─┐┬  ┬┌─┐  ┬  ┬┬  ┬┌─┐┌─┐┬ \n     ║  │ │││││││├┤ │││ │ └─┐  └─┐├─┤└┐┌┘├┤   │  │└┐┌┘├┤ └─┐│ \n     ╚═╝└─┘┴ ┴┴ ┴└─┘┘└┘ ┴ └─┘  └─┘┴ ┴ └┘ └─┘  ┴─┘┴ └┘ └─┘└─┘o";

// Scroll
import {Events, Link, scroller} from 'react-scroll'

import '../assets/scss/base/_page.scss';

// import Fonts
import '../../node_modules/@ibm/plex/scss/ibm-plex.scss';

const NoClickDivider = styled(CSSParallaxGroup)`
  pointer-events: none;
  backface-visibility: none;
`;

const ContentLayer = styled(CSSParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center')};
  justify-items: center;
  display: grid;
`;

const NoClickLayer = styled(ContentLayer)`
  pointer-events: none;
  backface-visibility: none;
`;

const NoClickLayerSVG = styled(CSSParallaxLayer)`
  pointer-events: none;
  backface-visibility: none;
`;

const LastNoClickLayerSVG = styled(NoClickLayerSVG)`
  overflow: hidden;
`;

const AnimationParallaxLayer = styled(CSSParallaxLayer)`
  fill: ${props => props.fill};
  pointer-events: none;
  backface-visibility: none;
`;

const AvatarBackgroundLayer = styled(CSSParallaxLayer)`
  display: grid;
  align-items: center;
`;

const ProjectParallaxLayer = styled(CSSParallaxLayer)`
  padding-left: 3rem;
  padding-right: 3rem;
  justify-items: center;
  adjust-items: center;
  display: grid;
`;

const RotateDivider = styled.div`
  transform: translateX(-5%) rotateZ(-3deg);
  width: 110%;
  background: #23262b;
  height: 100%;
`;

const AboutBackground = styled.div`
  background: #171717;
  width: 100%;
  height: 80%;
`;

const DividerMiddleBlur =  styled.div`
  transform: translate3D(2%, 0%, 0) rotateZ(-3deg);
  background: #262626;
  width: 96%;
  height: 100%;
`;

const DividerMiddleBoxShadow= styled.div`
  animation: ${boxShadowAnim} 2s ease-in-out infinite alternate;
  box-shadow: 0px 0px 4rem #7f00ff;
  width: 100%;
  height: 100%;
  will-change: opacity;
  backface-visibility: hidden;
`;

const DividerMiddleMain = styled.div`
  height:90%;
  opacity: 0.9;
`;

const Content = styled(CSSParallaxGroup)`
  position: absolute;
`;


const Hero = styled.div`
  ${tw('w-full xl:w-2/3')};
  margin: auto;
`;

const Inner = styled.div`
  ${tw('w-full xxl:w-5/6 text-center lg:text-left')};
  margin: auto;
`;

const BigTitle = styled.h1`
  ${tw('text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-white mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

const Title = styled.h1`
  ${tw('text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white mb-8 tracking-wide relative inline-block')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const Subtitle = styled.p`
  ${tw('text-xl sm:text-xl md:text-2xl lg:text-3xl text-white mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  a {
    color: #ff0057;
    text-decoration: none;
    text-shadow: 0 0.1rem 1rem rgb(30, 31, 36);
  }
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
  ${tw(' flex flex-col lg:flex-row items-center mt-8')};
  p {
    font-family:'IBM Plex Sans';
  }
`;

const Avatar = styled.img`
  ${tw('rounded-full w-32 xl:w-48 shadow-lg h-full')};
`;

const AboutSub = styled.p`
  ${tw('text-white pt-12 lg:pt-0 lg:pl-12 text-lg lg:text-xl xl:text-1xl')};
`;

const ContactText = styled.div`
  ${tw('text-grey-light text-xl md:text-2xl lg:text-3xl')};
  a {
    color: #ff0057;
    text-decoration: none;
    text-shadow: 0 0.1rem 1rem rgb(30, 31, 36);
  }
`;

const Footer = styled.footer`
  ${tw('text-center text-grey absolute pin-b p-6 text-md lg:text-lg')};
  pointer-events: all;
`;

const Albert = styled.div`
  ${tw(' flex flex-col items-center mt-8')};
  p {
    font-family:'IBM Plex Sans';
  }
`;

const MoveToPageOne = styled.div`
  display: inline-grid;
  pointer-events: all;
  align-items: center;
  justify-items: center;
  position: absolute;
  height: 6vh;
  top: 10vh;
  width: 60vw;
  background-color: rgba(255, 255, 255, .05);
  @supports ((-webkit-backdrop-filter: blur(1em)) or (backdrop-filter: blur(1em))) {
        -webkit-backdrop-filter: blur(1em);
        backdrop-filter: blur(1em);
  }
  border-radius: _size(border-radius);
  cursor: pointer;
  text-indent: 4rem;
  overflow: hidden;
  white-space: nowrap;
  svg {
    animation: ${hopAnimDown} 4s ease-in-out infinite alternate;
    transform: translate3d(0,0,0) rotateZ(-180deg);
    will-change: transform;
  }
  &:hover {
    background-color: _palette(border-bg);
    svg {
      animation: ${hopAnimDown} 1s ease-in-out infinite alternate;
    }
  }
  &:active {
    background-color: _palette(border-bg-alt);
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
    loading: 'is-loading',
    isSmallMobile: false,
    debugOn: false,
    xOffsetAllPages: 0
  }
  this.timeoutId;
  this.spaceKeyWasPressed;
  this.handleOpenArticle = this.handleOpenArticle.bind(this);
  this.handleCloseArticle = this.handleCloseArticle.bind(this);
  this.updateDimensions = this.updateDimensions.bind(this);
  this.keyDownFunction = this.keyDownFunction.bind(this);
  this.keyUpFunction = this.keyUpFunction.bind(this);
  this.toggleDebug = this.toggleDebug.bind(this);
  this.moveToPage2 = this.moveToPage2.bind(this);
  this.moveToPage1 = this.moveToPage1.bind(this);
  this.moveToProjectCards = this.moveToProjectCards.bind(this);
  this.moveToProjectContent = this.moveToProjectContent.bind(this);
}

toggleDebug(){
  this.setState({debugOn: !this.state.debugOn});
}

moveToPage2(){
  scroller.scrollTo('page3', {
    duration: 1500,
    delay: 0,
    smooth: 'easeInOut',
    containerId: 'parallax-scroller'
  });
}

moveToPage1(){
  scroller.scrollTo('page2', {
    duration: 1500,
    delay: 0,
    smooth: 'easeInOut',
    containerId: 'parallax-scroller'
  });
}

keyDownFunction(event){
    if(!this.spaceKeyWasPressed && event.keyCode === 32) {
      this.spaceKeyWasPressed = true;
      console.log(scroller);
       scroller.scrollTo('page2', {
         duration: 800,
         delay: 0,
         smooth: 'easeInOutQuint',
         containerId: 'parallax-scroller'
       });
      /*
      if(this.parallax.current < (this.parallax.space - offset))
      {
        this.parallax.scrollTo(1);
      }
      else if(this.parallax.current < ((this.parallax.space * 2) - offset))
      {
       this.parallax.scrollTo(2);
      }
      else if(this.parallax.current < ((this.parallax.space * 3) - offset))
      {
        this.parallax.scrollTo(3);
      }
      else{
        this.parallax.scrollTo(4);
      }
      */
    }
}

moveToProjectCards(){
  this.setState({xOffsetAllPages: 0});
}

moveToProjectContent(){
  this.setState({xOffsetAllPages: -125});
}

keyUpFunction(event){
  if(this.spaceKeyWasPressed && event.keyCode === 32) {
    this.spaceKeyWasPressed = false;
  }
}

componentDidMount () {
  this.timeoutId = setTimeout(() => {
      this.setState({loading: ''});
  }, 100);
  this.updateDimensions();
  window.addEventListener("resize", this.updateDimensions);
  document.addEventListener("keydown", this.keyDownFunction, false);
  document.addEventListener("keyup", this.keyUpFunction, false);

  // Scroll Listener
  Events.scrollEvent.register('begin', function () {
     console.log("begin", arguments);
   });

   Events.scrollEvent.register('end', function () {
     console.log("end", arguments);
   });
}

componentWillUnmount () {
  if (this.timeoutId) {
      clearTimeout(this.timeoutId);
  }
  window.removeEventListener("resize", this.updateDimensions);
  document.removeEventListener("keydown", this.keyDownFunction, false);
  document.removeEventListener("keyup", this.keyUpFunction, false);
  Events.scrollEvent.remove('begin');
  Events.scrollEvent.remove('end');
}

updateDimensions() {
  /*
  if(window.innerWidth <= 450){
    this.setState({
      isSmallMobile: true
    })
  }
  else{
    this.setState({
      isSmallMobile: false
    })
  }
  */
}


handleOpenArticle(article) {
  if(this.state.isArticleVisible){
    return;
  }
  this.moveToProjectContent();
  this.setState({
    isArticleVisible: true,
    article
  })

  setTimeout(() => {
    this.setState({
      timeout: !this.state.timeout
    })
  }, 325)

  setTimeout(() => {
    this.setState({
      articleTimeout: true
    })
  }, 350)
}

handleCloseArticle() {
  if(!this.state.articleTimeout){
    return;
  }
  this.moveToProjectCards();
  this.setState({
    articleTimeout: false
  })

  setTimeout(() => {
    this.setState({
      timeout: !this.state.timeout
    })
  }, 325)

  setTimeout(() => {
  this.setState({
      isArticleVisible: false,
      article: ''
    })
  }, 350)

}
  render() {
    return (
  <React.Fragment>
    <SEO />
    <div dangerouslySetInnerHTML={{__html: "<!-- " + commentText + " -->"}}/>
    <SVGOriginals />
    <CSSParallax id="parallax-scroller" pages={this.state.isSmallMobile ? 4 : 4}>
    {/*
        <Link activeClass="active" to="page3" smooth={true} duration={500} containerId="parallax-scroller">
            Go to first element inside container
        </Link>
        */}
      <CSSParallaxGroup name="page1" debugOn={this.state.debugOn} xoffset={this.state.xOffsetAllPages} yoffset={0}>
        <NoClickLayerSVG speed={-0.2} zIndex={1}>
          <SVGPageOne />
        </NoClickLayerSVG>
        <ContentLayer speed={0.2} zIndex={2}>
        <Hero>
          <BigTitle>
            HI,<br />WELCOME<MediaQuery query="(max-width: 600px)"><br /></MediaQuery> TO MY<br />PLAYGROUND
          </BigTitle>
          <Subtitle>My name is Alex and I am a frontend developer who loves to create impactful experiences for web, VR/ AR and mobile devices.
<br/><br/>Check out some of my <a onClick={() => {this.moveToPage2()}}>projects</a></Subtitle>.
        </Hero>
        </ContentLayer>
      </CSSParallaxGroup>
      <CSSParallaxGroup name="page2" debugOn={this.state.debugOn} xoffset={this.state.xOffsetAllPages} yoffset={this.state.isSmallMobile ? 1 : 0.8}>
        <AvatarBackgroundLayer speed={0} zIndex={2}>
          <AboutBackground/>
        </AvatarBackgroundLayer>
        <ContentLayer speed={0} zIndex={4}>
          <MoveToPageOne onClick={() => {this.moveToPage1()}}>
            <SVG icon="triangle" width={'8'} fill="#ff006f" useSelfAlign={true}/>
          </MoveToPageOne>
        </ContentLayer>
        <NoClickLayerSVG speed={0.1} zIndex={2}>
          <SVGPageTwo />
        </NoClickLayerSVG>
        <ContentLayer speed={0.2} zIndex={4}>
        <Inner>
          <Title>THIS IS WHAT MOTIVATES ME</Title>
          <AboutHero>
            <Avatar type="image/jpg" src={avatar} alt="Alexander Stricker" />
            <div>
              <MediaQuery query="(min-width: 800px)">
                <AboutSub>
                  As a front-end developer I am confident that with the help of the right approaches like
    agile software development and user centered design almost all technical and human
    problems can be solved. Working closely with designers and other developers is a very
    natural thing for me. I love to bring distinct and delightful experiences to life. More
    importantly these solutions have to serve the ultimate goal to make the users lives
    easier!
                </AboutSub>
              </MediaQuery>
              <AboutSub>
                If I would need to point out something that makes me special it would be my urge to
  add a little something to all of my work - let’s call it <a onClick={() => {this.toggleDebug()}}>easteregg</a> ;)
              </AboutSub>
            </div>
          </AboutHero>
        </Inner>
       </ContentLayer>
      </CSSParallaxGroup>
      <CSSParallaxGroup name="page4" debugOn={this.state.debugOn} xoffset={this.state.xOffsetAllPages} yoffset={this.state.isSmallMobile ? 3 : 2.8}>
        <AvatarBackgroundLayer speed={0} zIndex={1}>
          <AboutBackground/>
        </AvatarBackgroundLayer>
        <NoClickLayerSVG speed={0.1} zIndex={2}>
          <SVGPageFour />
        </NoClickLayerSVG>
        <ContentLayer speed={0.2} zIndex={3}>
          <Inner>
            <Albert>
              <AboutSub>
                “Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning”
              </AboutSub>
              <AboutSub>
                Albert Einstein
              </AboutSub>
            </Albert>
          </Inner>
       </ContentLayer>
      </CSSParallaxGroup>
      <CSSParallaxGroup name="page3" debugOn={this.state.debugOn} xoffset={this.state.xOffsetAllPages} yoffset={this.state.isSmallMobile ? 2 : 1.8}>
        <CSSParallaxLayer speed={0} zIndex={1}>
          <RotateDivider />
        </CSSParallaxLayer>
        <NoClickLayerSVG speed={0.1} zIndex={2}>
          <SVGPageThree />
        </NoClickLayerSVG>
        <ProjectParallaxLayer speed={0.2} zIndex={3}>
          <Inner>
            <Title>SOME OF MY NON CONFIDENTIAL ROJECTS</Title>
                <Projects onOpenArticle={this.handleOpenArticle} />
          </Inner>
        </ProjectParallaxLayer>
      </CSSParallaxGroup>
      <CSSParallaxGroup name="page5" debugOn={this.state.debugOn} xoffset={this.state.xOffsetAllPages} yoffset={this.state.isSmallMobile ? 4 : 3.8}>
        <AnimationParallaxLayer speed={0} fill="#23262b" zIndex={2}>
          <WaveWrapper>
            <InnerWave>
              <svg viewBox="0 0 800 338.05" preserveAspectRatio="none">
                <path className={waveAnimation}>
                </path>
              </svg>
            </InnerWave>
          </WaveWrapper>
        </AnimationParallaxLayer>
        <LastNoClickLayerSVG speed={0.1} zIndex={3}>
          <SVGPageFive />
        </LastNoClickLayerSVG>
        <ContentLayer speed={0.2} zIndex={4}>
          <Inner>
            <Title>GET IN TOUCH</Title>
            <ContactText>
              <p>Feel free to say <a href="mailto:s_alexander@hotmail.de">hi</a> to me.</p>
              <p>Find out more about me on {' '}
                <a href={config.siteFacebook}>Facebook</a> &{' '}
                <a href={config.siteInstagram}>Instagram</a>
              </p>
            </ContactText>
          </Inner>
        </ContentLayer>
        <ContentLayer speed={0} zIndex={4}>
          <Footer>
            <p>&copy; 2018 by Alexander Stricker.{' '}</p>
            <a href={config.github}>Github Repository</a>.
          </Footer>
        </ContentLayer>
      </CSSParallaxGroup>
      <CSSParallaxGroup name="page6" debugOn={this.state.debugOn} xoffset={125 + this.state.xOffsetAllPages} yoffset={this.state.isSmallMobile ? 1 : 1.8}>
        <AvatarBackgroundLayer speed={-0.2} zIndex={1}>
          <AboutBackground/>
        </AvatarBackgroundLayer>
        <LastNoClickLayerSVG speed={-0.1} zIndex={2}>
          <SVGPageSix />
        </LastNoClickLayerSVG>
        <ContentLayer speed={0} zIndex={3}>
          <ProjectContent
            isArticleVisible={this.state.isArticleVisible}
            timeout={this.state.timeout}
            articleTimeout={this.state.articleTimeout}
            article={this.state.article}
            onCloseArticle={this.handleCloseArticle}
          />
       </ContentLayer>
      </CSSParallaxGroup>
    </CSSParallax>
    <noscript>Your browser does not support JavaScript!</noscript>
  </React.Fragment>
);
}
}

export default Index;
