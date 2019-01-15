import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import MediaQuery from 'react-responsive';
import { StaticQuery, graphql } from 'gatsby';

import { ParallaxGroup, ParallaxLayer } from '../parallax';

import { SVGPageSix } from '../svg-manager';

import { LastNoClickLayerSVG, AvatarBackgroundLayer } from '../../styles/parallax/parallax'

import VideoPlayer from '../video-player'

import ProjectPage from '../project/project-page'

//style
import { RotateDivider } from '../../styles/general'

// CSS
import '../../styles/video-player.css'
import '../../assets/scss/components/project-content.scss';

const VideoPlayerFlex = styled(VideoPlayer)`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`

const RotateDividerProject = styled(RotateDivider)`
  background: #171717;
  height: 80%;
`;

import { detect } from 'detect-browser'

const browser = detect();

const ProjectsWrapper = styled.div`
  ${({ isVisible }) => isVisible ? css`
      display: block;
    ` : css`
      display: none;
    `
  }
`

class ProjectContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gemeuVRIsPlaying: false,
      craneSim1IsPlaying: false,
      craneSim2IsPlaying: false,
      recaroIsPlaying: false,
      browser: ''
    }
    this.gemueVideo = React.createRef();
    this.craneSimMovie = React.createRef();
    this.craneSimMovie2 = React.createRef();
    this.recaroMovie = React.createRef();
    this.cancelVideos = this.cancelVideos.bind(this);
    this.startVideos = this.startVideos.bind(this);
  }

  cancelVideos(){
    setTimeout(() => {
      if(this.state.gemeuVRIsPlaying){
        try {
          this.gemueVideo.current.pause();
          this.setState({gemeuVRIsPlaying: false});
        }
        catch(error){

        }
      }
      if(this.state.craneSim1IsPlaying){
        try {
          this.craneSimMovie.current.pause();
          this.setState({craneSim1IsPlaying: false});
        }
        catch(error){

        }
      }
      if(this.state.craneSim2IsPlaying){
        try {
          this.craneSimMovie2.current.pause();
          this.setState({craneSim2IsPlaying: false});
        }
        catch(error){

        }
      }
      if(this.state.recaroIsPlaying){
        try {
          this.recaroMovie.current.pause();
          this.setState({recaroIsPlaying: false});
        }
        catch(error){

        }
      }
    }, 1500)
  }

  startVideos(){
    if(this.props.article === 'gemue-vr'){
      if(!this.state.gemeuVRIsPlaying){
        try {
          this.gemueVideo.current.load();
        }
        catch(error){

        }
        setTimeout(() => {
          try {
            var playPromise = this.gemueVideo.current.play();
            if (playPromise !== undefined) {
            playPromise.then(_ => {
              // Automatic playback started! // Show playing UI. // We can now safely pause video...
              this.setState({gemeuVRIsPlaying: true});
            })
            .catch(error => {
              // Auto-play was prevented // Show paused UI.
              //console.log("Gemue Movie Failed ");
            });
            }
          }
          catch(error){

          }
        }, 4000)
      }
    }
    if(this.props.article === 'simulator'){
      if(!this.state.craneSimMovie){
        try {
          this.craneSimMovie.current.load();
        }
        catch(error){

        }
        setTimeout(() => {
            try {
              var playPromise = this.craneSimMovie.current.play();
              if (playPromise !== undefined) {
                playPromise.then(_ => {
                  // Automatic playback started! // Show playing UI. // We can now safely pause video...
                  this.setState({craneSim1IsPlaying: true});
                })
                .catch(error => {
                  // Auto-play was prevented // Show paused UI.
                  //console.log("CraneSim Movie Failed");
                });
              }
            }
          catch(error){

          }
        }, 4000)
      }
    }
    if(this.props.article === 'recaro-vr'){
      if(!this.state.recaroMovie){
        try {
          this.recaroMovie.current.load();
        }
        catch(error){

        }
        setTimeout(() => {
          try {
            var playPromise = this.recaroMovie.current.play();
            if (playPromise !== undefined) {
            playPromise.then(_ => {
              // Automatic playback started! // Show playing UI. // We can now safely pause video...
              this.setState({recaroIsPlaying: true});
            })
            .catch(error => {
              // Auto-play was prevented // Show paused UI.
              //console.log("Recaro Movie Failed ");
            });
          }
        }
        catch(error){

        }
      }, 4000)
      }
    }
  }

  componentDidMount () {
    this.setState({browser: browser.name})
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if(prevProps.article !== this.props.article){
      if(this.props.article === ''){
        this.cancelVideos();
        //console.log("cancel");
      }
      else{
        //console.log("start");
        this.startVideos();
        //console.log("start");
      }
    }
  //  console.log(markdownFileArray);
  }

  checkIfDataExists(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

  render() {
    const markdownFileArray = this.props.data.allMarkdownRemark.edges
    const videoJsOptionsGemue = {
      autoplay: false,
      controls: true,
      loop: true,
      muted: true,
      fluid: true,
      preload: 'none',
      sources: [
        {
        src: 'https://media.stollvongati.com/files/media/StollvonGati_VR_Schulungsanwendung.mp4',
        type: 'video/mp4'
        },
        {
          src: 'https://media.stollvongati.com/files/media/StollvonGati_VR_Schulungsanwendung.webm',
          type: 'video/webm'
        },
        {
          src: 'https://media.stollvongati.com/files/media/StollvonGati_VR_Schulungsanwendung.ogv',
          type: 'video/ogg'
        }
      ]
    }
    const videoJsOptionsCraneSim1 = {
      autoplay: false,
      controls: true,
      loop: true,
      muted: true,
      fluid: true,
      preload: 'none',
      sources: [
        {
        src: 'https://media.stollvongati.com/files/media/liebherr_lisim_bauma_video.mp4.mp4',
        type: 'video/mp4'
        },
        {
          src: 'https://media.stollvongati.com/files/media/liebherr_lisim_bauma_video.webmhd.webm',
          type: 'video/webm'
        },
        {
          src: 'https://media.stollvongati.com/files/media/liebherr_lisim_bauma_video.oggtheora.ogv',
          type: 'video/ogg'
        }
      ]
    }
    const videoJsOptionsCraneSim2 = {
      autoplay: false,
      controls: true,
      loop: true,
      muted: true,
      fluid: true,
      preload: 'none',
      sources: [
        {
        src: 'https://media.stollvongati.com/files/media/Liebherr_710_Applikation_final.mp4',
        type: 'video/mp4'
        },
        {
          src: 'https://media.stollvongati.com/files/media/Liebherr_710_Applikation_final.webm',
          type: 'video/webm'
        },
        {
          src: 'https://media.stollvongati.com/files/media/Liebherr_710_Applikation_final.ogv',
          type: 'video/ogg'
        }
      ]
    }
    const videoJsOptionsRecaro = {
      autoplay: false,
      controls: true,
      loop: true,
      muted: true,
      fluid: true,
      preload: 'none',
      sources: [
        {
        src: 'https://media.stollvongati.com/files/media/AircraftInteriors_RECARO.mp4',
        type: 'video/mp4'
        },
        {
          src: 'https://media.stollvongati.com/files/media/AircraftInteriors_RECARO.webm',
          type: 'video/webm'
        },
        {
          src: 'https://media.stollvongati.com/files/media/AircraftInteriors_RECARO.ogv',
          type: 'video/ogg'
        }
      ]
    }

    return (
      <ParallaxGroup name="page6" easterEggOn={this.props.easterEggOn} xoffset={150 + this.props.xOffset} yoffset={0.5}>
        <AvatarBackgroundLayer speed={-0.4} zIndex={1}>
          <RotateDividerProject/>
        </AvatarBackgroundLayer>
        <AvatarBackgroundLayer speed={-0.3} zIndex={1} yOffset={1.2}>
          <RotateDividerProject/>
        </AvatarBackgroundLayer>
        <AvatarBackgroundLayer speed={-0.2} zIndex={1} yOffset={2.3}>
          <RotateDividerProject/>
        </AvatarBackgroundLayer>
        <LastNoClickLayerSVG speed={-0.1} zIndex={2}>
          <SVGPageSix />
        </LastNoClickLayerSVG>
        <ParallaxLayer speed={0.1} zIndex={3} browserName={this.state.browser}>
      <ProjectsWrapper id="project-content" isVisible={this.props.activeArticle}>
        <ProjectPage
          id="portfolio"
          markdownData={markdownFileArray[4]}
          isVisible={this.props.activeArticle === 'portfolio'}
        />
        <ProjectPage
          id="gemue-vr"
          markdownData={markdownFileArray[1]}
          videos={[
            <VideoPlayerFlex ref={this.gemueVideo} { ...videoJsOptionsGemue } />
          ]}
          isVisible={this.props.activeArticle === 'gemue-vr'}
        >
          <a href="https://stollvongati.com/de/projekte/vr-schulungsanwendung-fuer-gemue.html">Check out the project here!</a>
        </ProjectPage>
        <ProjectPage
          id="gemue-ar"
          markdownData={markdownFileArray[0]}
          isVisible={this.props.activeArticle === 'gemue-ar'}
        />
        <ProjectPage
          id="simulator"
          markdownData={markdownFileArray[3]}
          videos={[
            <VideoPlayerFlex ref={this.craneSimMovie} { ...videoJsOptionsCraneSim1 } />,
            <VideoPlayerFlex ref={this.craneSimMovie2} { ...videoJsOptionsCraneSim2 } />
          ]}
          isVisible={this.props.activeArticle === 'simulator'}
        >
          Check out the project <a href="https://stollvongati.com/de/projekte/lisim-simulator-fuer-liebherr-turmdrehkrane.html">here</a> and <a href="https://stollvongati.com/de/projekte/der-liebherr-turmdrehkran-710-hc-l-als-vr-erlebnis.html">here</a>!
        </ProjectPage>
        <ProjectPage
          id="intensaDrum"
          markdownData={markdownFileArray[2]}
          isVisible={this.props.activeArticle === 'intensaDrum'}
        />
        <ProjectPage
          id="recaro-vr"
          markdownData={markdownFileArray[5]}
          videos={[
            <VideoPlayerFlex ref={this.recaroMovie} { ...videoJsOptionsRecaro } />
          ]}
          isVisible={this.props.activeArticle === 'recaro-vr'}
        >
          <a href="https://stollvongati.com/de/projekte/virtuelle-flugzeugkabine-fuer-recaro-business-class-sitze.html">Check out the project here!</a>
        </ProjectPage>
        <ProjectPage
          id="traction-inverter"
          markdownData={markdownFileArray[5]}
          isVisible={this.props.activeArticle === 'traction-inverter'}
        />
      </ProjectsWrapper>
      </ParallaxLayer>
     </ParallaxGroup>
    )
  }
}

ProjectContent.propTypes = {
  easterEggOn: PropTypes.bool.isRequired,
  xOffset: PropTypes.number.isRequired,
  easteregg: PropTypes.func,
  activeArticle: PropTypes.string,
  timeout: PropTypes.bool
}

export default props => (
  <StaticQuery
    query={graphql`
      query ProjectQuery{
        allMarkdownRemark(
          filter : {
             frontmatter: {
               tags: {
                 in: ["project"]
               }
             }
           },
          sort : {
          fields: [frontmatter___title],
          order: ASC
        }) {
          edges {
            node {
              frontmatter {
                title
                projectTitle
                projectContext
                teamSize
                projectType
                tasks
                intention
                process
                technology
                platforms
                images {
                  publicURL
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 90, cropFocus: CENTER) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <ProjectContent data={data} {...props} />}
  />
)
