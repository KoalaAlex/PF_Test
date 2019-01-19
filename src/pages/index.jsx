/* global tw */
import React, { useState, useEffect } from 'react';
import { Global } from "@emotion/core"
//Parts
import Welcome from '../components/parts/welcome'
import AboutMe from '../components/parts/about-me'
import Projects  from '../components/parts/projects'
import Quote  from '../components/parts/quote'
import ContactMe  from '../components/parts/contact-me'
import ProjectContent  from '../components/parts/project-content'
// import Components
import { Seo } from '../components/seo-component'
import { SVGOriginals } from '../components/svg-manager'
import { Parallax } from '../components/parallax'
import CloseWrapper from '../components/close-wrapper'
// CSS
import GlobalString from '../styles/global'
// Scroll
import {scroller} from 'react-scroll'

export default function Index(props) {
  const [isArticleVisible, setIsArticleVisible] = useState(false);
  const [activeArticle, setActiveArticle] = useState("");
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const [easterEggOn, setEasterEggOn] = useState(false);
  const [xOffsetAllPages, setXOffsetAllPages] = useState(0);
  const [spaceKeyWasPressed, setSpaceKeyWasPressed] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

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
        <Welcome
          easterEggOn={easterEggOn}
          xOffset={xOffsetAllPages}
          moveToPage2={moveToPage2}
         />
        <AboutMe
          easterEggOn={easterEggOn}
          xOffset={xOffsetAllPages}
          yOffset={isSmallMobile ? 1 : 0.8}
          moveToPage1={moveToPage1}
          toggleEasterEgg={() => setEasterEggOn(!easterEggOn)}
        />
        <Quote
          easterEggOn={easterEggOn}
          xOffset={xOffsetAllPages}
          yOffset={isSmallMobile ? 3 : 2.8}
        />
        <Projects
          easterEggOn={easterEggOn}
          xOffset={xOffsetAllPages}
          yOffset={isSmallMobile ? 2 : 1.8}
          openProject={openProject}
        />
        <ContactMe
          easterEggOn={easterEggOn}
          xOffset={xOffsetAllPages}
          yOffset={isSmallMobile ? 4 : 3.8}
        />
        <ProjectContent
          easterEggOn={easterEggOn}
          xOffset={xOffsetAllPages}
          easteregg={() => setEasterEggOn(!easterEggOn)}
          isArticleVisible={isArticleVisible}
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
