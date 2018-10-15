import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import MediaQuery from 'react-responsive';

import CSSSlider from  './CSSSlider';
import ProjectOverview from  './ProjectOverview';

import pic03 from '../images/pic03.jpg';

import { SVG }from '../components/SVG';

// MultiplayerVR
import gemuevr01 from '../images/gemue-vr/gm_vr_01_800x450.jpg';
import gemuevr02 from '../images/gemue-vr/gm_vr_02_800x450.jpg';
import gemuevr03 from '../images/gemue-vr/gm_vr_03_800x450.jpg';
import gemuevr04 from '../images/gemue-vr/gm_vr_04_800x450.jpg';
import gemuevr05 from '../images/gemue-vr/gm_vr_05_800x450.jpg';

// Interactive and Touch
// traktions
import traktionsStrom01 from '../images/traktions/rec_01_800x500.jpg';
import traktionsStrom02 from '../images/traktions/rec_02_800x455.jpg';
import traktionsStrom03 from '../images/traktions/rec_03_800x454.jpg';
import traktionsStrom04 from '../images/traktions/rec_04_800x452.jpg';
import traktionsStrom06 from '../images/traktions/rec_06_800x450.jpg';

// Simulator and Configurator
// Recaro
import recaro01 from '../images/recaro/rec_01_800x565.jpg';
import recaro02 from '../images/recaro/rec_02_800x565.jpg';
import recaro03 from '../images/recaro/rec_03_800x480.jpg';
// liebherr
import cranesim01 from '../images/cranesim/cranesim01_800x450.jpg';
import cranesim02 from '../images/cranesim/cranesim_cabine_1024_576.jpg';
import cranesim03 from '../images/cranesim/cranesim_LasVegas_1600x900.jpg';
import cranesim04 from '../images/cranesim/cranesim_avard_570x320.jpg';

//IntensaDrum
import intensaDrum01 from '../images/intensa-drum/id_01_800x600.jpg';
import intensaDrum02 from '../images/intensa-drum/id_02_800x600.jpg';
import intensaDrum03 from '../images/intensa-drum/id_03_800x600.jpg';
import intensaDrum04 from '../images/intensa-drum/id_04_800x450.jpg';
import intensaDrum05 from '../images/intensa-drum/id_05_800x442.jpg';
import intensaDrum06 from '../images/intensa-drum/id_06_800x440.jpg';
import intensaDrum07 from '../images/intensa-drum/id_07_800x440.jpg';

// GemueAR
import gemueAR01 from '../images/gemue-ar/gm_01_800x600.jpg';
import gemueAR02 from '../images/gemue-ar/gm_02_800x600.jpg';
import gemueAR03 from '../images/gemue-ar/gm_03_800x600.jpg';
import gemueAR04 from '../images/gemue-ar/gm_04_800x600.jpg';

// Portfolio
import portfolio_01 from '../images/portfolio/portfolio_01_800x500.jpg';
import portfolio_02 from '../images/portfolio/portfolio_02_800x500.jpg';
import portfolio_03 from '../images/portfolio/portfolio_03_800x500.jpg';
import portfolio_04 from '../images/portfolio/portfolio_04_800x500.jpg';
import portfolio_05 from '../images/portfolio/portfolio_05_800x500.jpg';

const gemueVR_A = [gemuevr01, gemuevr02, gemuevr03, gemuevr04, gemuevr05];
const gemueAR_A = [gemueAR01, gemueAR02, gemueAR03, gemueAR04];
const intensadrum_A =  [intensaDrum01, intensaDrum02, intensaDrum03, intensaDrum04, intensaDrum05, intensaDrum06, intensaDrum07];
const portfolioA =  [portfolio_01, portfolio_02, portfolio_03, portfolio_04, portfolio_05];
const recaroVR_A = [recaro01, recaro02, recaro03];
const craneSimul_A = [cranesim01, cranesim02, cranesim03, cranesim04];
const tractionInverter_A = [traktionsStrom01, traktionsStrom02, traktionsStrom03, traktionsStrom04, traktionsStrom06];

import '../assets/scss/components/ProjectContent.scss';

const CloseWrapper = styled.div`
  pointer-events: all;
  //transform: translate3d(0px, 0px, 10px);

    display: inline-grid;
    align-items: center;
    justify-items: center;
    position: absolute;
    height: 80%;
    left: 0;
    width: 1.5rem;
    background-color: rgba(255, 255, 255, .05);
    @supports ((-webkit-backdrop-filter: blur(1em)) or (backdrop-filter: blur(1em))) {
          backdrop-filter: blur(1em);
    }
    border-radius: _size(border-radius);
    @media (min-width: 600px) {
      width: 3rem;
    }
    @media (min-width: 900px) {
      width: 5rem;
    }
    cursor: pointer;
    text-indent: 4rem;
    overflow: hidden;
    white-space: nowrap;

    svg {
      animation: hopAnim 4s ease-in-out infinite alternate;
      transform: translate3d(0,0,0) rotateZ(-90deg);
      will-change: transform;
    }

    &:hover {
      background-color: _palette(border-bg);
      svg {
        animation: hopAnim 1s ease-in-out infinite alternate;
      }
    }

    &:active {
      background-color: _palette(border-bg-alt);
    }
`;

const CloseWrapperOffset = styled(CloseWrapper)`
  transform: translate3d(0, ${(props => props.yOffset)}vh, 0);
`;

const Overview = styled.div`
  display: grid;
  justify-items: center;
  align-items:top;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 899px) {
      grid-template-columns: repeat(2, 1fr);
  }
`;

const OverviewItem = styled.div`

`;

const ProjectTypeItem = styled(OverviewItem)`
  @media (max-width: 899px) {
      grid-column-start: 1;
      grid-column-end: 3;
  }
`;

const ItemTitel = styled.h1`
  font-size: 2rem;
`;

const Concept = styled.div`
  font-size: 1rem;
`;

const UsedTechnology = styled.div`

`;

const TaskTitle = styled(ItemTitel)`
  grid-column-start: 1;
  grid-column-end: 4;
  @media (max-width: 799px) {
      grid-column-end: 3;
  }
`;

const Movie = styled.div`
  display: block;
  align-items: center;
  justify-items: center;
  height: 100%;
  width: 100%;
  video {
      pointer-events: all;
      max-width: 980px;
      cursor: pointer;
  }
`;

const TestVideo = styled.div`
  position: relative:
`;

const CodeHTML = styled.span`
background: #303030;
  :before {
    Content : "<";
  }
  :after {
    Content : ">";
  }
`;

const TextToLeftSide = styled.span`
  text-align: start;
`;

const Article = styled.article`
  padding: 3rem;
  @media (min-width: 500px) {
    padding: 4rem;
  }
  @media (min-width: 900px) {
    padding: 6rem;
  }
`;

const Wrapper = styled.div`
@media (min-width: 500px) {
  padding: 1rem;
}
@media (min-width: 900px) {
  padding: 3rem;
}
`;

class ProjectContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gemeuVRIsPlaying: false,
      craneSim1IsPlaying: false,
      craneSim2IsPlaying: false,
      recaroIsPlaying: false,
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
        this.gemueVideo.current.pause();
        this.setState({gemeuVRIsPlaying: false});
      }
      if(this.state.craneSim1IsPlaying){
        this.craneSimMovie.current.pause();
        this.setState({craneSim1IsPlaying: false});
      }
      if(this.state.craneSim2IsPlaying){
        this.craneSimMovie2.current.pause();
        this.setState({craneSim2IsPlaying: false});
      }
      if(this.state.recaroIsPlaying){
        this.recaroMovie.current.pause();
        this.setState({recaroIsPlaying: false});
      }
    }, 2000)
  }

  startVideos(){
    if(this.props.article === 'gemue-vr'){
      if(!this.state.gemeuVRIsPlaying){
        setTimeout(() => {
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
        }, 4000)
      }
    }
    if(this.props.article === 'simulator'){
      if(!this.state.craneSimMovie){
        setTimeout(() => {
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
        }, 4000)
      }
      /*
      if(!this.state.craneSimMovie2){
        var playPromise2 = this.refs.craneSimMovie2.play();
        if (playPromise2 !== undefined) {
        playPromise2.then(_ => {
          // Automatic playback started! // Show playing UI. // We can now safely pause video...
          this.setState({craneSim2IsPlaying: true});
        })
        .catch(error => {
          // Auto-play was prevented // Show paused UI.
          console.log("CraneSim Movie 2 Failed");
        });
        }
      }
      */
    }
    if(this.props.article === 'recaro-vr'){
      if(!this.state.recaroMovie){
        setTimeout(() => {
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
      }, 4000)
      }
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if(prevProps.article !== this.props.article){
      if(this.props.article == ''){
        this.cancelVideos();
        //console.log("cancel");
      }
      else{
        this.startVideos();
        //console.log("start");
      }
    }
  }

  render() {
    return (
      <React.Fragment>
      <div id="project-content" style={this.props.timeout ? {display: 'block'} : {display: 'none'}}>
      <Article id="portfolio" className={`${this.props.article === 'portfolio' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="major">My Portfolio Playground</h2>
        <span className="image main">
          <CSSSlider images={portfolioA} images2x={portfolioA}/>
        </span>
        <Wrapper>
          <ProjectOverview
            projectContext={["skill presentation", "job application", "show projects"]}
            teamSize={"solo project"}
            projectType={"portfolio"}
            tasks={["front end development", "user experience", "research", "opimisation", "visual design", "quick prototype"]}
            />
          <Concept>
            <h1>The Intention</h1>
            <TextToLeftSide>
              <p>One platform for a presentation of my work in a playful, dynamic and colorful way. It should use state fo the art technology like react and rely mostly on css manipulations and transitions.</p>
            </TextToLeftSide>
          </Concept>
          <Concept>
            <h1>Work in Process</h1>

            <TextToLeftSide>
              <p>I started with a demo from gatsby <a href="https://github.com/LeKoArts/gatsby-starter-portfolio-cara">starter</a> for quick development. While working on it I discovered performance issues on my mac book pro (2013). The main issue was on the one hand the parallax effect made with <a href="https://github.com/drcmda/react-spring" >react spring</a> and on the other hand the enormous count of SVGs.
              <br />I started to redesign the whole parallax effect to work with CSS and not to depend on javascript. While developing i found the <a onClick={() => {this.props.easteregg()}}>esteregg</a> which was orginaly designed for debuging the Layer effect.<br />
              Also I don't liked the portoflio card wich referenced to a seperate side. For this I found a solution to change the perspective to fade on the hidden right side of the page an there lie's the content for the projects.
              <a href="https://www.facebook.com/StrickerTobi">My brother</a> helped me out with the svg's. Then I made use of the href attribute and the <CodeHTML>use</CodeHTML> element on all SVGs. This saves me a lot of performance.
              </p>
            </TextToLeftSide>
          </Concept>
          <UsedTechnology>
            <h1>Used Technology</h1>
            <p>Framework: React</p>
            <p>Deploy: Netlify</p>
            <p>SourceControl: Github</p>
            <p>IDE: Atom</p>
            <p>Side Generator: Gatsby</p>
          </UsedTechnology>
          <UsedTechnology>
            <h1>Platforms</h1>
            <p>web</p>
          </UsedTechnology>
        </Wrapper>
      </Article>
        <Article id="gemue-vr" className={`${this.props.article === 'gemue-vr' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Gemue VR</h2>
          <span className="image main">
            <CSSSlider
              images={gemueVR_A}
              images2x={gemueVR_A}
              videos={[
              <video ref={this.gemueVideo} src="https://media.stollvongati.com/files/media/StollvonGati_VR_Schulungsanwendung.mp4" controls loop muted preload="auto">
                <source type="video/mp4" src="https://media.stollvongati.com/files/media/StollvonGati_VR_Schulungsanwendung.mp4" />
                <source type="video/webm" src="https://media.stollvongati.com/files/media/StollvonGati_VR_Schulungsanwendung.webm" />
                <source type="video/ogg" src="https://media.stollvongati.com/files/media/StollvonGati_VR_Schulungsanwendung.ogv" />
              </video>]}
              />
          </span>
          <Wrapper>
            <ProjectOverview
              projectContext={["global meetings", "maintainance training", "product presentation"]}
              teamSize={"middle size project"}
              projectType={"work project"}
              tasks={["developer", "network syncronisation", "research", "opimisation", "interaction design"]}
              />
            <Concept>
              <h1>The Intention</h1>
              <p>The Main Idea was to build a trainings system for engineers in regards to the VR Technology. On top of that the client wanted to have a virtual meeting place for all his headquarters.
              <br />So it should be possible to meet other engineers or start the training as a group via network connection.</p>
            </Concept>
            <Concept>
              <h1>Work in Process</h1>
              <p>This was one of the funnies and also one of the toughest projects i made.</p>
              <p>Most of the bugs were discovert via multiplayer because you have to be very specific who is the manipulator of which item in the scene and how the transfer ownership works.</p>
              <p>You start the application in the Lobby where you can modify your Avatar. Therefore you have to go the the mirrow and start selecting outfits and change the color via colorplates. This mode is not connected to multiplayer in regards to new players wich zero knowledge. This players has to acclimate first about the interaction system and the possibilities in VR. Then they join the training or the meeting mode via a doorknob like in the real world.</p>
              <p>Both modis are possible to play via multiplayer. One is the workshop room where you can start the maintainance training step by step along a questline that hints your mistakes and gives you tips. The other one is the meeting room wher you can relax an chitchat with other gemue users. Dont miss the lasersword easter egg and the one with the duck ;)</p>
              <p>The whole project was made in the gameengine Unity and is highly driven from 3D objects from 3dsMax. The best part was the multiplayer mode. It is so much fun to meet peaple in VR just like the ones are realy in the same room only they appear as an Avatar.  The main aspect is a maintanance of a ventil with a membran change with tighten or loosen a screw.</p>
            </Concept>
            <UsedTechnology>
              <h1>Used Technology</h1>
              <p>Devlopment: Unity</p>
              <p>VR interaction system: VRTK</p>
              <p>VR release: SteamVR</p>
              <p>Network syncronisation: Photon Engine</p>
              <p>3D models: 3dsMax</p>
              <p>IDE: Visual Studio</p>
            </UsedTechnology>
            <UsedTechnology>
              <h1>Platforms</h1>
              <p>Windows Standalone</p>
            </UsedTechnology>
            <a href="https://stollvongati.com/de/projekte/vr-schulungsanwendung-fuer-gemue.html">Project Overview SvG</a>
          </Wrapper>
        </Article>
        <Article id="gemue-ar" className={`${this.props.article === 'gemue-ar' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Gemue AR</h2>
          <span className="image main">
            <CSSSlider images={gemueAR_A} images2x={gemueAR_A}/>
          </span>
          <Wrapper>
            <ProjectOverview
              projectContext={["global meetings", "maintainance training", "product presentation"]}
              teamSize={"small size project"}
              projectType={"work project"}
              tasks={["developer", "AR tracking and stability", "research", "opimisation", "interaction design"]}
              />
            <Concept>
              <h1>The Intention</h1>
              <p>This projects idea was to find a way to present the product of gemue to his customers with the AR technology. Not to forget the normal 3D scene where you can get additional informations about a specific product.</p>
            </Concept>
            <Concept>
              <h1>Work in Process</h1>
              <p>In this project it was realy helpful to rely on the ARKit demo for quick development. But further on it was a little annoying to alwas deploy via XCode to tets the ar mode. While developing we were discovering the arkit remote feature that enables you to test directly in the Unity Editor while connecting your iPhone via lightning cable. That saved us a lot of time.</p>
              <p>It was the first app that we made via the Unity Cinemachine and it also had some annoying beaviours... One was when you switch between the cameras that it appears at start a very long frame. when managed to overcome this by scripting our own camera interpolation switch and not to rely on the one from the Framework</p>
            </Concept>
            <UsedTechnology>
              <h1>Used Technology</h1>
              <p>Devlopment: Unity</p>
              <p>AR Framework: AR Kit Apple</p>
              <p>3D Models: 3dsMax</p>
              <p>IDE: Visual Studio</p>
            </UsedTechnology>
            <UsedTechnology>
              <h1>Platforms</h1>
              <p>iPad and iPhone</p>
            </UsedTechnology>
            <a href="https://stollvongati.com/de/projekte/lisim-simulator-fuer-liebherr-turmdrehkrane.html">Website SvG</a>
          </Wrapper>
        </Article>
        <Article id="traction-inverter" className={`${this.props.article === 'traction-inverter' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Traction Inverter</h2>
          <span className="image main">
            <CSSSlider images={tractionInverter_A} images2x={tractionInverter_A}/>
          </span>
          <Wrapper>
            <ProjectOverview
              projectContext={["manual camera movement", "use case product", "product presentation"]}
              teamSize={"small size project"}
              projectType={"work project"}
              tasks={["developer", "dynamic camera movement", "research", "opimisation", "interaction design"]}
              />
            <Concept>
              <h1>The Intention</h1>
              <p>This application was made for a messe showcase. The need of the client was to show his product in an interactive and playfull way.
              <br />It should include the new CI of Voith and therefore the style was in close connection to it.</p>
            </Concept>
            <Concept>
              <h1>Work in Process</h1>
              <p>In this kind of project the cinemachine was realy handy and we could rely on the the nice smooth camera fade script from <a href="javascript:;" onClick={() => {this.props.onOpenArticle("gemue-ar")}}>gemeu-ar</a></p>
            </Concept>
            <UsedTechnology>
              <h1>Used Technology</h1>
              <p>Devlopment: Unity</p>
              <p>Camera: Cinemachine</p>
              <p>3D Models: 3dsMax</p>
              <p>IDE: Visual Studio</p>
            </UsedTechnology>
            <UsedTechnology>
              <h1>Platforms</h1>
              <p>iPad and iPhone</p>
            </UsedTechnology>
          </Wrapper>
        </Article>
        <Article id="simulator" className={`${this.props.article === 'simulator' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Simulator VR</h2>
          <CSSSlider images={craneSimul_A} images2x={craneSimul_A}
          videos={[
            <video
            src="https://media.stollvongati.com/files/media/liebherr_lisim_bauma_video.mp4.mp4" ref={this.craneSimMovie} controls loop muted preload="auto">
              <source type="video/webm" src="https://media.stollvongati.com/files/media/liebherr_lisim_bauma_video.webmhd.webm" />
              <source type="video/ogg" src="https://media.stollvongati.com/files/media/liebherr_lisim_bauma_video.oggtheora.ogv" />
              <source type="video/mp4" src="https://media.stollvongati.com/files/media/liebherr_lisim_bauma_video.mp4.mp4" />
            </video>
            ,
            <video
            src="https://media.stollvongati.com/files/media/Liebherr_710_Applikation_final.mp4" ref={this.craneSimMovie2} controls loop muted preload="auto">
              <source type="video/webm" src="https://media.stollvongati.com/files/media/Liebherr_710_Applikation_final.webm" />
              <source type="video/ogg" src="https://media.stollvongati.com/files/media/Liebherr_710_Applikation_final.ogv" />
              <source type="video/mp4" src="https://media.stollvongati.com/files/media/Liebherr_710_Applikation_final.mp4" />
            </video>
            ,
          ]
          }/>
          <Wrapper>
            <ProjectOverview
              projectContext={["crane bending", "workload testing", "product presentation", "training", "showcase", "greenscreen", "map real cabin with virtual world"]}
              teamSize={"middle size project"}
              projectType={"work project"}
              tasks={["developer", "highscore implementation", "crane bending shader", "research", "opimisation", "interaction design", "rope physics", "greenscreen shader"]}
              />
            <Concept>
              <h1>The Intention</h1>
              <p>This was a mega project the offer was to create an training system for Liebherr with the VR Google Oculus. It relys on real physic calculation for the crane bending if the workload is to big or the wind to strong the physics starts working on the crane. It was calculated via an seperate system from the University. <br />
              the actor should sit in a cabin the windows there were all green. In the end it should record the actors sight via an extra camera sitting in front of the Oculus. This camera renders out the green Color of the windows an maps the virtual world over it. So that the actor can see his hands and the real interface.
              </p>
            </Concept>
            <Concept>
              <h1>Work in Process</h1>
              <p>The greenscreen shader was written in Unitys shader system in which you can select one color range to be rendered as transparent.
                At the start almost everything was calculated on the CPU like image capturing via the 120fps camera, the physic, the data transphere via the Beckhoff computer and so on.</p>
            </Concept>
            <UsedTechnology>
              <h1>Used Technology</h1>
              <p>Devlopment: Unity</p>
              <p>VR release: SteamVR</p>
              <p>Crane physics: in cooperation with University Stuttgart</p>
              <p>Physics data transfer: via Beckhoff</p>
              <p>3D Models: 3dsMax</p>
              <p>IDE: Visual Studio</p>
            </UsedTechnology>
            <UsedTechnology>
              <h1>Platforms</h1>
              <p>Windows Standalone</p>
            </UsedTechnology>
            <a href="https://stollvongati.com/de/projekte/lisim-simulator-fuer-liebherr-turmdrehkrane.html">Crane Simulator SvG</a>
            <a href="https://stollvongati.com/de/projekte/der-liebherr-turmdrehkran-710-hc-l-als-vr-erlebnis.html">Las Vegas Application - SvG</a>
          </Wrapper>
        </Article>
        <Article id="intensaDrum" className={`${this.props.article === 'intensaDrum' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Augmented Reality</h2>
          <CSSSlider images={intensadrum_A} images2x={intensadrum_A}/>
          <Wrapper>
            <ProjectOverview
              projectContext={["augmented reality", "interactive", "product presentation", "product information"]}
              teamSize={"small size project"}
              projectType={"work project"}
              tasks={["developer", "augmented reality kit", "cinemachine", "world UI", "opimisation", "interaction design"]}
              />
            <Concept>
              <h1>The Intention</h1>
              <p>The client wants to show his product and its functionality in an interactive App / AR App.</p>
              <p>The App starts with a normal 3D Mode where you can move via touch/scroll/pinch/tap to the 3D Object and you can click some of the hotspots.<br />
              On one of them you can start the Physic to work. Some containers will start moving into the drum and will be shreddered to a liquid molasse.<br />
              The other hotspots traverse you to a specific part of the facility where you can get adittional informations and play video descriptions.</p>
              <p>The App has to rely on an Image Target what can be downloaded via the homepage or from a prospect of Voith<br />
              After placing the image in front of the camera it start the AR behaviour an the 3D Models can be surveyed.</p>
            </Concept>
            <Concept>
              <h1>Work in Process</h1>
              <p>The client want's a AR App that works on his iPad Air so therefore we could not integrate the ARKit and so we choose the Wikitude Framework</p>
              <p>The AR Framework had a major downgrade on build time because aftre every export to XCode it needed to be asigned in XCode binarys and also manualy insert a runscript to remove the simulator achitecture. we get along with it by scripting a linker script right from Unity.</p>
              <p>We made the moving packages </p>
              <p>Another difficulty was the physic to work in AR Mode because because at default it rotates the 3D Model an the physic got realy messed up. So we changed it to rotate and scale the camera so the object stays static.</p>
            </Concept>
            <UsedTechnology>
              <h1>Used Technology</h1>
              <p>Devlopment: Unity</p>
              <p>AR Framework: Wikitude</p>
              <p>Camera: Cinemachine</p>
              <p>3D Models: 3dsMax</p>
              <p>IDE: Visual Studio</p>
            </UsedTechnology>
            <UsedTechnology>
              <h1>Platforms</h1>
              <p>iPad and iPhone, Windows (without AR)</p>
            </UsedTechnology>
          </Wrapper>
        </Article>
        <Article id="recaro-vr" className={`${this.props.article === 'recaro-vr' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Recaro VR</h2>
          <CSSSlider
            images={recaroVR_A}
            images2x={recaroVR_A}
            videos={[
              <video
              src="https://media.stollvongati.com/files/media/AircraftInteriors_RECARO.mp4" ref={this.recaroMovie} controls loop muted preload="auto">
                <source type="video/webm" src="https://media.stollvongati.com/files/media/AircraftInteriors_RECARO.webm" />
                <source type="video/ogg" src="https://media.stollvongati.com/files/media/AircraftInteriors_RECARO.ogv" />
                <source type="video/mp4" src="https://media.stollvongati.com/files/media/AircraftInteriors_RECARO.mp4" />
              </video>
            ]
            }/>
          <Wrapper>
            <ProjectOverview
              projectContext={["configurateable behaviour", "dynamic daytime and light system", "product presentation", "showcase"]}
              teamSize={"middle size project"}
              projectType={"work project"}
              tasks={["developer", "inteaction system", "model/color switcher", "dynamic light system", "research", "opimisation", "interaction design"]}
              />
            <Concept>
              <h1>The Intention</h1>
              <p>Recaro wants an configurator vor his seat product. It should be the light version of an prototype configurator because it startet only wich one product... the CL6710<br />
              Almost every part can be tintent witch a color and some parts completly changed. The interaction is made with controllers. The left one is for global states like daytime, cabin, seat position etc. The right one is for picking a color, change animatons (e.g. monitor or seat divider).
              <br />So the interaction was a little overloaded completely new persons in VR therfore we developed a connection via an iPad in which an operator can change all the states in the VR Scene as well. Plus he has a collection of color preset tha can be quickli presented to the interested party.
            </p>
            </Concept>
            <Concept>
              <h1>Work in Process</h1>
              <p>At the time the project starts it was not much available about interaction systems in VR therefore we created our own. At the base of the project we used SteamVR and the common Button Events.
                <br />At this Events we created to link to our custom behaviours like pointer raycast to objects and so on. It was a lot of recherch needed and also much trial and error for the right beahviour.
                <br /> On top of that the whole system needed to be as dynamic as possible. We created a global material manager and a shader switcher which connects all function for 3D Object called MOG.
                <br /> The tablet connection was not done by me. But I handled the receiving events in Unity. And also passed the parameter back to the tablet via the socket connection. Some states needed to be bidirectional for example if the VR actor changes the daytime in needed to be visible in the tablet and so on.
              </p>
            </Concept>
            <UsedTechnology>
              <h1>Used Technology</h1>
              <p>Devlopment: Unity</p>
              <p>VR interaction system: selfmade</p>
              <p>VR release: SteamVR</p>
              <p>Camera: Cinemachine</p>
              <p>3D Models: 3dsMax</p>
              <p>IDE: Visual Studio</p>
            </UsedTechnology>
            <UsedTechnology>
              <h1>Platforms</h1>
              <p>Windows Standalone</p>
            </UsedTechnology>
            <a href="https://stollvongati.com/de/projekte/virtuelle-flugzeugkabine-fuer-recaro-business-class-sitze.html">Project Overview SvG</a>
          </Wrapper>
        </Article>
      </div>
      <CloseWrapperOffset yOffset={0} onClick={() => {this.props.onCloseArticle()}}><SVG icon="triangle" width={'8'} fill="#ff006f" useSelfAlign={true}/></CloseWrapperOffset>
      <CloseWrapperOffset yOffset={100} onClick={() => {this.props.onCloseArticle()}}><SVG icon="triangle" width={'8'} fill="#ff006f" useSelfAlign={true}/></CloseWrapperOffset>
      <CloseWrapperOffset yOffset={200} onClick={() => {this.props.onCloseArticle()}}><SVG icon="triangle" width={'8'} fill="#ff006f" useSelfAlign={true}/></CloseWrapperOffset>
      </React.Fragment>
    )
  }
}

ProjectContent.propTypes = {
  easteregg: PropTypes.func,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default ProjectContent
