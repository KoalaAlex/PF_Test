/* global tw */
import React, { useState, useEffect } from 'react';
import Loadable from 'react-loadable';
import { Global } from "@emotion/core"
import styled from '@emotion/styled'
//Parts
//import Welcome from '../components/parts/welcome'
// import Components
import { Seo } from '../components/seo-component'
import { SVGOriginals } from '../components/svg-manager'
import { Parallax } from '../components/parallax'
import CloseWrapper from '../components/close-wrapper'
// CSS
import GlobalString from '../styles/global'
import { loading } from '../styles/animations';
// Scroll
import {scroller} from 'react-scroll'

//const Welcome = lazy(() => import('../components/parts/welcome'))
//const AboutMe = lazy(() => import('../components/parts/about-me'))
//const Projects = lazy(() => import('../components/parts/projects'))
//const Quote = lazy(() => import('../components/parts/quote'))
//const ContactMe = lazy(() => import('../components/parts/contact-me'))
//const ProjectContent = lazy(() => import('../components/parts/project-content'))

const LazySkeleton = styled.div`
  width: 100%;
  height: 100%;
  color: red;
  display:block;
  border-radius:6px;
  background-color: #171717;
  background-image: linear-gradient(90deg, #171717 30%, #ff006d 50%,#171717 70%);
  background-repeat: no-repeat;
  animation: ${loading} 1.5s linear infinite;
`;

const LazyWelcome = Loadable({
  loader: () => import('../components/parts/welcome'),
  loading() {
    return <LazySkeleton/>;
  }
});

const LazyAboutMe = Loadable({
  loader: () => import('../components/parts/about-me'),
  loading() {
    return <LazySkeleton/>;
  }
});

const LazyProjects = Loadable({
  loader: () => import('../components/parts/projects'),
  loading() {
    return <LazySkeleton/>;
  }
});
const LazyQuote = Loadable({
  loader: () => import('../components/parts/quote'),
  loading() {
    return <LazySkeleton/>;
  }
});
const LazyContactMe = Loadable({
  loader: () => import('../components/parts/contact-me'),
  loading() {
    return <LazySkeleton/>;
  }
});
const LazyProjectContent = Loadable({
  loader: () => import('../components/parts/project-content'),
  loading() {
    return <LazySkeleton/>;
  }
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
