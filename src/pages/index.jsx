/* global tw */
import React, { useState, useEffect } from 'react';
import { Global } from "@emotion/core"
import styled from '@emotion/styled'
import Loadable from 'react-loadable';
//Parts
//import Welcome from '../components/parts/welcome'
// import Components
import { Seo } from '../components/seo-component'
import { SVGOriginals } from '../components/svg-manager'
import { Parallax } from '../components/parallax'
import CloseWrapper from '../components/close-wrapper'
// CSS
import GlobalString from '../styles/global'
import { loadingAnim } from '../styles/animations';
// Scroll
import {scroller} from 'react-scroll'

const LazySkeleton = styled.div`
  position: absolute;
    &:empty{
      margin: auto;
  		width: 100vw;
  		height: 100vh;
      background-color: #171717;
  		background-image:
  			radial-gradient( circle 10vh at 20vh 20vh, #404040 99%, transparent 0 ),
  			linear-gradient( 100deg, rgba(23, 23, 23, 0), rgba(23, 23, 23, 0.5) 50%, rgba(23, 23, 23, 0) 80% ),
  			linear-gradient( #404040 20px, transparent 0 ),
  			linear-gradient( #404040 20px, transparent 0 ),
  			linear-gradient( #404040 20px, transparent 0 ),
  			linear-gradient( #404040 20px, transparent 0 );
  		background-repeat: no-repeat;
  		background-size:
  			40vh 40vh, /* circle */
  			50px 100%, /* highlight */
  			80% 5%,
  			60% 5%,
  			40% 5%,
  			20% 5%;
  		background-position:
  			50% 20%, /* circle */
  			0 0, /* highlight */
  			50% 60%,
  			50% 70%,
  			50% 80%,
  			50% 90%;
  		animation: ${loadingAnim} 1s infinite;
      transform: translate3d(${(props => props.xOffset)}vw, ${(props => props.yOffset * 100)}vh, 0);
    }
`;

const LazyWelcome = Loadable({
  loader: () => import('../components/parts/welcome'),
  loading() {
    return <LazySkeleton yOffset={0}/>;
  },
  delay: 3000
});

const LazyAboutMe = Loadable({
  loader: () => import('../components/parts/about-me'),
  loading() {
    return <LazySkeleton yOffset={1} xOffset={0}/>;
  },
  delay: 3000
});

const LazyProjects = Loadable({
  loader: () => import('../components/parts/projects'),
  loading() {
    return <LazySkeleton yOffset={2} xOffset={0}/>;
  },
  delay: 3000
});
const LazyQuote = Loadable({
  loader: () => import('../components/parts/quote'),
  loading() {
    return <LazySkeleton yOffset={3} xOffset={0}/>;
  },
  delay: 3000
});
const LazyContactMe = Loadable({
  loader: () => import('../components/parts/contact-me'),
  loading() {
    return <LazySkeleton yOffset={4} xOffset={0}/>;
  },
  delay: 3000
});
const LazyProjectContent = Loadable({
  loader: () => import('../components/parts/project-content'),
  loading() {
    return <LazySkeleton xOffset={-150} yOffset={0}/>;
  },
  delay: 3000
});

export default function Index(props) {
  const [isArticleVisible, setIsArticleVisible] = useState(false);
  const [activeArticle, setActiveArticle] = useState("");
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const [easterEggOn, setEasterEggOn] = useState(false);
  const [xOffsetAllPages, setXOffsetAllPages] = useState(0);
  const [spaceKeyWasPressed, setSpaceKeyWasPressed] = useState(false);

  // cDM , cWU
  useEffect(() => {
    document.addEventListener("keydown", keyDownFunction, false)
    document.addEventListener("keyup", keyUpFunction, false)
    return () => {
      document.removeEventListener("keydown", keyDownFunction, false)
      document.removeEventListener("keyup", keyUpFunction, false)
    };
  }, [props]);

  function moveToPage2(){
    scroller.scrollTo('page3', {
      duration: 1500,
      delay: 0,
      smooth: 'easeInOut',
      containerId: 'parallax-scroller'
    });
  }

  function moveToPage1(){
    scroller.scrollTo('page2', {
      duration: 1500,
      delay: 0,
      smooth: 'easeInOut',
      containerId: 'parallax-scroller'
    });
  }

  // Scroll on Space click
  function keyDownFunction(event){
    if(!spaceKeyWasPressed && event.keyCode === 32) {
      setSpaceKeyWasPressed(true)
       scroller.scrollTo('page2', {
         duration: 800,
         delay: 0,
         smooth: 'easeInOutQuint',
         containerId: 'parallax-scroller'
       })
    }
  }

  function keyUpFunction(event){
    if(spaceKeyWasPressed && event.keyCode === 32) {
      setSpaceKeyWasPressed(false)
    }
  }

  function moveToProjectCards(){
    setXOffsetAllPages(0)
    if(!easterEggOn){
      scroller.scrollTo('page3', {
        duration: 1000,
        delay: 1000,
        smooth: 'ease',
        containerId: 'parallax-scroller'
      })
    }
  }

  function moveToProjectContent(){
    setXOffsetAllPages(-150)
    if(!easterEggOn){
      scroller.scrollTo('page6', {
        duration: 1000,
        delay: 1000,
        smooth: 'ease',
        containerId: 'parallax-scroller'
      });
    }
  }

  function openProject(article) {
    if(isArticleVisible){
      return;
    }
    setIsArticleVisible(true)
    setActiveArticle(article)
    moveToProjectContent();
  }

  function closeProject() {
    if(!isArticleVisible){
      return;
    }
    setIsArticleVisible(false)
    setActiveArticle("")
    moveToProjectCards();
  }

  return (
    <>
    <Global
       styles={GlobalString}
     />
     <Seo />
      <SVGOriginals />
      <Parallax id="parallax-scroller" pages={isSmallMobile ? 4 : 4}>
        <LazyWelcome
          easterEggOn={easterEggOn}
          xOffset={xOffsetAllPages}
          moveToPage2={moveToPage2}
        />
        <LazyAboutMe
          easterEggOn={easterEggOn}
          xOffset={xOffsetAllPages}
          yOffset={isSmallMobile ? 1 : 0.8}
          moveToPage1={moveToPage1}
          toggleEasterEgg={() => setEasterEggOn(!easterEggOn)}
        />
        <LazyQuote
          easterEggOn={easterEggOn}
          xOffset={xOffsetAllPages}
          yOffset={isSmallMobile ? 3 : 2.8}
        />
        <LazyProjects
          easterEggOn={easterEggOn}
          xOffset={xOffsetAllPages}
          yOffset={isSmallMobile ? 2 : 1.8}
          openProject={openProject}
        />
        <LazyContactMe
          easterEggOn={easterEggOn}
          xOffset={xOffsetAllPages}
          yOffset={isSmallMobile ? 4 : 3.8}
        />
        <LazyProjectContent
          easterEggOn={easterEggOn}
          xOffset={xOffsetAllPages}
          activeArticle={activeArticle}
        />
      </Parallax>
      <CloseWrapper
        isArticleVisible={isArticleVisible}
        onClick={closeProject}
      />
      <noscript>Your browser does not support JavaScript!</noscript>
    </>
  );
}
