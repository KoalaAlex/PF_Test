/* global tw */
import React from 'react';
import styled from '@emotion/styled'
import { Global } from "@emotion/core"
import { CSSParallax, CSSParallaxGroup, CSSParallaxLayer } from '../components/CSSParallax'
import Img from 'gatsby-image'
// import Components
import SEO from '../components/SEO'
import { SVGOriginals } from '../components/SVGManager'
import { hidden } from '../styles/utils'
// css string
import GlobalString from '../styles/global'

//Parts
import PartOne from '../components/parts/part-one'
import PartTwo from '../components/parts/part-two'
import PartThree  from '../components/parts/part-three'
import PartFour  from '../components/parts/part-four'
import PartFive  from '../components/parts/part-five'
import PartSix  from '../components/parts/part-six'
import CloseWrapper from '../components/closeWrapper'
const commentText1 = "<!-- ╔═╗┌─┐┌┬┐┌┬┐┌─┐┌┐┌┌┬┐┌─┐  ┌─┐┌─┐┬  ┬┌─┐  ┬  ┬┬  ┬┌─┐┌─┐┬ -->"
const commentText2 = "<!-- ║  │ │││││││├┤ │││ │ └─┐  └─┐├─┤└┐┌┘├┤   │  │└┐┌┘├┤ └─┐│ -->"
const commentText3 = "<!-- ╚═╝└─┘┴ ┴┴ ┴└─┘┘└┘ ┴ └─┘  └─┘┴ ┴ └┘ └─┘  ┴─┘┴ └┘ └─┘└─┘o -->"

// Scroll
import {Events, scroller} from 'react-scroll'


class Index extends React.Component {
  constructor(props) {
    super(props)
    this.timeoutId
    this.spaceKeyWasPressed
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.keyDownFunction = this.keyDownFunction.bind(this)
    this.keyUpFunction = this.keyUpFunction.bind(this)
    this.toggleDebug = this.toggleDebug.bind(this)
    this.moveToPage1 = this.moveToPage1.bind(this)
    this.moveToPage2 = this.moveToPage2.bind(this)
    this.moveToProjectCards = this.moveToProjectCards.bind(this)
    this.moveToProjectContent = this.moveToProjectContent.bind(this)
    this.handleArticleClick = this.handleArticleClick.bind(this)
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
  }

  toggleDebug(){
    this.setState({debugOn: !this.state.debugOn})
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
      this.spaceKeyWasPressed = true
       scroller.scrollTo('page2', {
         duration: 800,
         delay: 0,
         smooth: 'easeInOutQuint',
         containerId: 'parallax-scroller'
       })
    }
  }

  moveToProjectCards(){
    this.setState({xOffsetAllPages: 0})
    if(!this.state.debugOn){
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
    if(!this.state.debugOn){
      scroller.scrollTo('page6', {
        duration: 1000,
        delay: 1000,
        smooth: 'ease',
        containerId: 'parallax-scroller'
      });
    }
  }

  keyUpFunction(event){
    if(this.spaceKeyWasPressed && event.keyCode === 32) {
      this.spaceKeyWasPressed = false
    }
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''})
    }, 100)
    document.addEventListener("keydown", this.keyDownFunction, false)
    document.addEventListener("keyup", this.keyUpFunction, false)

    // Scroll Listener
    Events.scrollEvent.register('begin', function () {
       //console.log("begin", arguments);
     });

     Events.scrollEvent.register('end', function () {
       //console.log("end", arguments);
     });
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId)
    }
    document.removeEventListener("keydown", this.keyDownFunction, false)
    document.removeEventListener("keyup", this.keyUpFunction, false)
    Events.scrollEvent.remove('begin')
    Events.scrollEvent.remove('end')
  }

  handleArticleClick(article) {
    this.setState({
      articleTimeout: false
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 525)

    setTimeout(() => {
    this.setState({
        isArticleVisible: false,
        article: ''
      })
    }, 550)

    setTimeout(() => {
      this.setState({
        isArticleVisible: true,
        article
      })
    }, 600)

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 1125)

    setTimeout(() => {
      this.setState({
        articleTimeout: true
      })
    }, 1150)
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
  <>
  <Global
     styles={GlobalString}
   />
    <SEO />
    <div dangerouslySetInnerHTML={{__html: commentText1 + commentText2 + commentText3}}/>
    <SVGOriginals />
    <CSSParallax id="parallax-scroller" pages={this.state.isSmallMobile ? 4 : 4}>
      <PartOne
        debugOn={this.state.debugOn}
        xOffset={this.state.xOffsetAllPages}
        moveToPage2={this.moveToPage2}
       />
      <PartTwo
        debugOn={this.state.debugOn}
        xOffset={this.state.xOffsetAllPages}
        yOffset={this.state.isSmallMobile ? 1 : 0.8}
        moveToPage1={this.moveToPage1}
        toggleDebug={this.toggleDebug}
      />
      <PartFour
        debugOn={this.state.debugOn}
        xOffset={this.state.xOffsetAllPages}
        yOffset={this.state.isSmallMobile ? 3 : 2.8}
      />
      <PartThree
        debugOn={this.state.debugOn}
        xOffset={this.state.xOffsetAllPages}
        yOffset={this.state.isSmallMobile ? 2 : 1.8}
        handleOpenArticle={this.handleOpenArticle}
      />
      <PartFive
        debugOn={this.state.debugOn}
        xOffset={this.state.xOffsetAllPages}
        yOffset={this.state.isSmallMobile ? 4 : 3.8}
      />
      <PartSix
        debugOn={this.state.debugOn}
        xOffset={this.state.xOffsetAllPages}
        easteregg={this.toggleDebug}
        isArticleVisible={this.state.isArticleVisible}
        timeout={this.state.timeout}
        articleTimeout={this.state.articleTimeout}
        article={this.state.article}
        onCloseArticle={this.handleCloseArticle}
        onOpenArticle={this.handleArticleClick}
      />
    </CSSParallax>
    <CloseWrapper
      timeout={this.state.timeout}
      onClick={this.handleCloseArticle}
    />
    <noscript>Your browser does not support JavaScript!</noscript>
  </>
);
}
}

export default Index;
