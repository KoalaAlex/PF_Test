/* global tw */
import React from 'react';
import { Global } from "@emotion/core"
//Parts
import Welcome from '../components/parts/welcome'
import AboutMe from '../components/parts/about-me'
import Projects  from '../components/parts/projects'
import Quote  from '../components/parts/quote'
import ContactMe  from '../components/parts/contact-me'
import ProjectContent  from '../components/parts/project-content'
// import Components
import { SEO } from '../components/seo-component'
import { SVGOriginals } from '../components/svg-manager'
import { Parallax } from '../components/parallax'
import CloseWrapper from '../components/close-wrapper'
// Style
import { hidden } from '../styles/utils'
// CSS
import GlobalString from '../styles/global'
// Scroll
import {Events, scroller} from 'react-scroll'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.timeoutId
    this.spaceKeyWasPressed
    this.keyDownFunction = this.keyDownFunction.bind(this)
    this.keyUpFunction = this.keyUpFunction.bind(this)
    this.toggleEasterEgg = this.toggleEasterEgg.bind(this)
    this.moveToPage1 = this.moveToPage1.bind(this)
    this.moveToPage2 = this.moveToPage2.bind(this)
    this.openProject = this.openProject.bind(this)
    this.closeProject = this.closeProject.bind(this)
    this.moveToProjectCards = this.moveToProjectCards.bind(this)
    this.moveToProjectContent = this.moveToProjectContent.bind(this)
    this.state = {
      isArticleVisible: false,
      activeArticle: '',
      loading: 'is-loading',
      isSmallMobile: false,
      easterEggOn: false,
      xOffsetAllPages: 0
    }
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''})
    }, 100)
    document.addEventListener("keydown", this.keyDownFunction, false)
    document.addEventListener("keyup", this.keyUpFunction, false)
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId)
    }
    document.removeEventListener("keydown", this.keyDownFunction, false)
    document.removeEventListener("keyup", this.keyUpFunction, false)
  }

  toggleEasterEgg(){
    this.setState({easterEggOn: !this.state.easterEggOn})
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

  // Scroll on Space click
  keyDownFunction(event){
    if(!this.spaceKeyWasPressed && event.keyCode === 32) {
      this.spaceKeyWasPressed = true
       scroller.scrollTo('page2', {
         duration: 800,
         delay: 0,
         smooth: 'easeInOutQuint',
         containerId: 'parallax-scroller'
       })
    }
  }

  keyUpFunction(event){
    if(this.spaceKeyWasPressed && event.keyCode === 32) {
      this.spaceKeyWasPressed = false
    }
  }

  moveToProjectCards(){
    this.setState({xOffsetAllPages: 0})
    if(!this.state.easterEggOn){
      scroller.scrollTo('page3', {
        duration: 1000,
        delay: 1000,
        smooth: 'ease',
        containerId: 'parallax-scroller'
      })
    }
  }

  moveToProjectContent(){
    this.setState({xOffsetAllPages: -150});
    if(!this.state.easterEggOn){
      scroller.scrollTo('page6', {
        duration: 1000,
        delay: 1000,
        smooth: 'ease',
        containerId: 'parallax-scroller'
      });
    }
  }

  openProject(article) {
    if(this.state.isArticleVisible){
      return;
    }
    this.setState({
      isArticleVisible: true,
      activeArticle: article
    })
    this.moveToProjectContent();
  }

  closeProject() {
    this.setState({
        isArticleVisible: false,
        activeArticle: ''
      })
    this.moveToProjectCards();
  }
  render() {
    return (
  <>
  <Global
     styles={GlobalString}
   />
    <SEO />
    <SVGOriginals />
    <Parallax id="parallax-scroller" pages={this.state.isSmallMobile ? 4 : 4}>
      <Welcome
        easterEggOn={this.state.easterEggOn}
        xOffset={this.state.xOffsetAllPages}
        moveToPage2={this.moveToPage2}
       />
      <AboutMe
        easterEggOn={this.state.easterEggOn}
        xOffset={this.state.xOffsetAllPages}
        yOffset={this.state.isSmallMobile ? 1 : 0.8}
        moveToPage1={this.moveToPage1}
        toggleEasterEgg={this.toggleEasterEgg}
      />
      <Quote
        easterEggOn={this.state.easterEggOn}
        xOffset={this.state.xOffsetAllPages}
        yOffset={this.state.isSmallMobile ? 3 : 2.8}
      />
      <Projects
        easterEggOn={this.state.easterEggOn}
        xOffset={this.state.xOffsetAllPages}
        yOffset={this.state.isSmallMobile ? 2 : 1.8}
        openProject={this.openProject}
      />
      <ContactMe
        easterEggOn={this.state.easterEggOn}
        xOffset={this.state.xOffsetAllPages}
        yOffset={this.state.isSmallMobile ? 4 : 3.8}
      />
      <ProjectContent
        easterEggOn={this.state.easterEggOn}
        xOffset={this.state.xOffsetAllPages}
        easteregg={this.toggleEasterEgg}
        isArticleVisible={this.state.isArticleVisible}
        activeArticle={this.state.activeArticle}
      />
    </Parallax>
    <CloseWrapper
      isArticleVisible={this.state.isArticleVisible}
      onClick={this.closeProject}
    />
    <noscript>Your browser does not support JavaScript!</noscript>
  </>
);
}
}

export default Index;
