import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import MediaQuery from 'react-responsive';

import CSSSlider from  './CSSSlider';
import CSSSliderGastbyImg from  './CSSSliderGastbyImg';
import ProjectOverview from  './ProjectOverview';
import Img from 'gatsby-image';

import { Player as VideoPlayer} from 'video-react';

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
import cranesim02 from '../images/cranesim/cranesim_cabine_1024x576.jpg';
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
import "../../node_modules/video-react/dist/video-react.css";

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
  //  console.log(this.props.articlesContentQuery);
  }

  checkIfDataExists(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

  render() {
    return (
      <React.Fragment>
      <div id="project-content" style={this.props.timeout ? {display: 'block'} : {display: 'none'}}>
      <Article id="portfolio" className={`${this.props.article === 'portfolio' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="major">PORTFOLIO PLAYGROUND</h2>
        <span className="image main">
          <CSSSliderGastbyImg images={this.props.articlesContentQuery[4].node.frontmatter.images} />
        </span>
        <Wrapper>
          <ProjectOverview
            projectContext={["Personal Project (2018)"]}
            teamSize={"Solo Project"}
            projectType={"Web Project"}
            tasks={["Frontend Development", "User Experience Conception", "Design Research", "Performance Optimization", "Visual Design", "Rapid Prototyping"]}
            />
          <Concept>
            <h1>Intention</h1>
            <TextToLeftSide>
              <p>I felt the urge to create a platform where I could present my work to the world. One very important aspect for me was that this platform represents myself as a human being. Therefore it was clear from the beginning that it needed to be playful, dynamic and colorful. The portfolio should make clear to its viewers how I love to work and highlight what is important for me when it comes to frontend development.</p>
              <p>One platform for a presentation of my work in a playful, dynamic and colorful way. It should rely on state fo the art technology like react and use css manipulations and transitions.</p>
          </TextToLeftSide>
          </Concept>
          <Concept>
            <h1>Process</h1>
              {/*
              <p>I started with a demo from gatsby <a href="https://github.com/LeKoArts/gatsby-starter-portfolio-cara">starter</a> for quick development. While working on it I discovered performance issues on my mac book pro (2013). The main issue was on the one hand the parallax effect made with <a href="https://github.com/drcmda/react-spring" >react spring</a> and on the other hand the enormous count of SVGs.
              <br />I started to redesign the whole parallax effect to work with css and not to depend on javascript. While developing I found the <a onClick={() => {this.props.easteregg()}}>esteregg</a> which was orginaly designed for debuging the layer effect.<br />
              Also I don't liked the portoflio cards system from the starter, wich only referenced to a seperate side. For this I found a solution to change the perspective to fade on the hidden right side of the page an there lie's the content.
              <a href="https://www.facebook.com/StrickerTobi">My brother</a> helped me out with the svg's. For performance issues and reusability of the calculated svgs I made of the href attribute and the<CodeHTML>use</CodeHTML> element on all SVGs.
              </p>
              */}
            <TextToLeftSide>
              <p>I kicked off this project with a quick research activity on understanding what the current state of the art for such kind of portfolios is. Besides that I’ve created a rapid prototype on pen and paper to showed it to friends and colleagues in order to collect their opinion on it. After some fixes I was ready with the concept and knew where I’d like to go with it. I have decided to use a demo template from GatsbyJS to have a quick jump into development. </p>
              <p>However while working on it I’ve discovered bigger performance issues on my MacBook Pro (2013). The biggest problems were related to the parallax effect created with the React spring node module and the big count of SVGs used. As a solution to this I’ve restructured the whole parallax effect to work with CSS and not depend on JavaScript. In order resolve the SVG problem I’ve created href-attributes for them in order to make them reusable through the <CodeHTML>use</CodeHTML> element.</p>
              <p>The templates modal card system used for the projects part of the portfolio was also not fitting with what I had envisioned. My solution was to enable a pagination navigation pattern which slides to the right in order to display the projects content. I worked closely with my brother, who is a UI/UX designer to create the SVGs used in the background. While developing the website I also implemented a little easteregg for you to discover.</p>
              <p>This portfolio is still in a work in progress state and is constantly updated by me.</p>
            </TextToLeftSide>
          </Concept>
          <UsedTechnology>
            <h1>Technology used</h1>
            <p>Framework: React</p>
            <p>Deploy: Netlify</p>
            <p>SourceControl: Github</p>
            <p>IDE: Atom</p>
            <p>Side Generator: Gatsby</p>
          </UsedTechnology>
          <UsedTechnology>
            <h1>Platforms</h1>
            <p>Web</p>
          </UsedTechnology>
        </Wrapper>
      </Article>
        <Article id="gemue-vr" className={`${this.props.article === 'gemue-vr' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">GEMUE - VR Schulungsanwendung</h2>
          <span className="image main">
            <CSSSliderGastbyImg
              images={this.props.articlesContentQuery[1].node.frontmatter.images}
              videos={[
                <VideoPlayer ref={this.gemueVideo} controls loop muted preload="none">
                  <source type="video/mp4" src="https://media.stollvongati.com/files/media/StollvonGati_VR_Schulungsanwendung.mp4" />
                  <source type="video/webm" src="https://media.stollvongati.com/files/media/StollvonGati_VR_Schulungsanwendung.webm" />
                  <source type="video/ogg" src="https://media.stollvongati.com/files/media/StollvonGati_VR_Schulungsanwendung.ogv" />
                </VideoPlayer>
              ]}
              />
          </span>
          <Wrapper>
            <ProjectOverview
              projectContext={["Client Project (2017-now)"]}
              teamSize={"Middle Size Team (~10 people)"}
              projectType={"Virtual Reality Application"}
              tasks={["Frontend Development", "Research", "Interaction Design", "Network Synchronization", "Performance Optimization"]}
              />
            <Concept>
              <h1>Intention</h1>
              <TextToLeftSide>
                <p>The main idea was to build a training system for engineers with the help of VR Technology. On top of that the client required to have a virtual meeting place for all his headquarters. It should be possible for engineers to meet other peers remotely via network in a virtual space to start training activities as a group. The user starts the application in a lobby where they can modify their avatar. In order to do this they have to move towards a mirror. Users are able to change the visual appearance of their avatar ranging from outfits, faces, hair color etc. This is an encapsulated experience that has no multiplayer component so that users with zero VR knowledge can take their time to get used to it. The users can acclimate first and take time learn the interaction system of the application.</p>
                <p>When the user feels ready they can join the workshop- or the meeting room via a doorknob. Both modes have a strong multiplayer component. Users are able to see colleagues in there and interact with them.</p>
                <p>The workshop room is the place where a user can start the maintenance training through a step by step process. They receive “quests” that hints to their mistakes and gives hives tips. The training is covering a scenario of the maintenance on a valve with a membrane change.</p>
                <p>The meeting room is a place where users can take some time off and relax. They are able to chitchat with other Gemue peers. Of course I’ve added some eastereggs to this project too. Look out for laser-swords and ducks.</p>
              </TextToLeftSide>
        </Concept>
            <Concept>
              <h1>Process</h1>
              <TextToLeftSide>
                <p>This was one of the most fun and but also toughest projects I’ve ever worked on. Most of the bugs were discovered in the multiplayer implementation. You had to be very clear about who was the manipulator of which item in a scene and how the transfer ownership works. Because of certain limitations in transferring data not all variables where kept synchronized between the users. The objects that were the most troublesome where the ones that could be manipulated in their position/rotation. Item-, button-states and the quest system were also quite difficult to implement properly.</p>
                <p>To prevent bigger bugs in the quest-line we had to make a check before each new player entered the workshop room. The solution to this problem included a check to inspect if the quest is currently active or not. If it would return FALSE another user would be able to join otherwise they would be rejected.</p>
                <p>The project is being released in phases. It has matured very well and is still maintained by the team. The client is already using this solution for their training purposes.</p>
              </TextToLeftSide>
            </Concept>
            <UsedTechnology>
              <h1>Technology used</h1>
              <p>Development: Unity</p>
              <p>VR interaction system: VRTK</p>
              <p>VR release: SteamVR</p>
              <p>Network synchronization: Photon Engine</p>
              <p>3D models: 3dsMax</p>
              <p>IDE: Visual Studio</p>
            </UsedTechnology>
            <UsedTechnology>
              <h1>Platforms</h1>
              <p>Windows Standalone</p>
            </UsedTechnology>
            <a href="https://stollvongati.com/de/projekte/vr-schulungsanwendung-fuer-gemue.html">Check out the project here!</a>
          </Wrapper>
        </Article>
        <Article id="gemue-ar" className={`${this.props.article === 'gemue-ar' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">GEMUE - AR App</h2>
          <span className="image main">
            <CSSSliderGastbyImg images={this.props.articlesContentQuery[0].node.frontmatter.images} />
          </span>
          <Wrapper>
            <ProjectOverview
              projectContext={["Client Project (2018)"]}
              teamSize={"Small Size Team (~4 people)"}
              projectType={"Augmented Reality Application"}
              tasks={["Frontend Development", "Research", "Interaction Design", "AR Tracking and Stability ", "Performance Optimization"]}
              />
            <Concept>
              <h1>Intention</h1>
              <TextToLeftSide>
                <p>The main idea for this project was to find an interesting and immersive way to present products of Gemue to their customers with the help of AR technology on mobile devices. This was achieved through the metaphor of a catalog where users are able to select a product they want to see in three dimensions. This product can then be placed into the real world. Users are even able to derive additional information when interacting with the object. Around eight interactive product objects were implemented in the application.</p>
              </TextToLeftSide>
          </Concept>
            <Concept>
              <h1>Process</h1>
              <TextToLeftSide>
                <p>Apples ARKit technology was used in order to create this project. While it was very helpful for quick development it was also quiet time consuming to deploy the Xcode project all the time in order to test the AR behavior. In the middle of the development process my team and I discovered the ARKit remote feature which enables you to test directly within the Unity Editor while connecting your iPhone via lightning cable. This saved us a lot of time and helped to speed up the development.</p>
                <p>The Gemue AR App was the first project that we’ve created using the Unity Cinemachine. However we were also facing some problems with this framework. It was a big problem to switch between the cameras without having a significant frame drop of the application. We managed to overcome this issue by scripting our own camera interpolation switch instead of relying on the original one, which instantiate the new camera after clicking. This is a no go for mobile devices.</p>
              </TextToLeftSide>
          </Concept>
            <UsedTechnology>
              <h1>Technology used</h1>
              <p>Devlopment: Unity</p>
              <p>AR Framework:  Apple ARKit technology</p>
              <p>3D Models: 3dsMax</p>
              <p>IDE: Visual Studio</p>
            </UsedTechnology>
            <UsedTechnology>
              <h1>Platforms</h1>
              <p>iOS Devices</p>
            </UsedTechnology>
          </Wrapper>
        </Article>
        <Article id="traction-inverter" className={`${this.props.article === 'traction-inverter' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Voith - EmCon Traction Inverter</h2>
          <span className="image main">
            <CSSSliderGastbyImg images={this.props.articlesContentQuery[6].node.frontmatter.images} />
          </span>
          <Wrapper>
            <ProjectOverview
              projectContext={["Client Project (2018)"]}
              teamSize={"Small Size Team (~3 people)"}
              projectType={"Windows Touch Application"}
              tasks={["Frontend Development", "Interaction Design", "Research", "Performance Optimization", "Dynamic Camera Movement"]}
              />
            <Concept>
              <h1>Intention</h1>
              <TextToLeftSide>
                <p>This application was designed to be shown at an exhibition for the company Voith. The need of the client was to present his product in an interactive and playful way. It should include the new cooperate identity of Voith. This was a very important requirement from the client and we needed to make sure we are following the guidelines pixel perfect. The target platform for this project was a windows touch based device.</p>
              </TextToLeftSide>
          </Concept>
            <Concept>
              <h1>Process</h1>
              <TextToLeftSide>
                {/*<a href="javascript:;" onClick={() => {this.props.onOpenArticle("gemue-ar")}}>gemeu-ar</a> */}
                <p>For these kind of projects the cinemachine technology is really handy to use. This also ensured that we were able to reuse some assets from other projects in order to create smooth camera movement. The interaction for the camera movement utilized basic touch inputs (e.g. pinch, swipe and tap).</p>
                <p>Hotspots within the UI were used to show additional information and trigger actions on the 3D object. The “high performance” hotspot had the most logical connections implemented. The accelerate and decelerate buttons were connected to the speed of he train. Besides that an event system/animator calls specific events at a specific timepoints.</p>
                <p>To prevent end of int/float values and weird camera bugs with the infinitely moving train we managed to rotate the surroundings in a big loop by not moving the train directly. This created the illusion of moving a moving train. This approach also saved us from many performance issues related to the train object that has many vertices.</p>
              </TextToLeftSide>
          </Concept>
            <UsedTechnology>
              <h1>Technology used</h1>
              <p>Devlopment: Unity</p>
              <p>Camera: Cinemachine</p>
              <p>3D Models: 3dsMax</p>
              <p>IDE: Visual Studio</p>
            </UsedTechnology>
            <UsedTechnology>
              <h1>Platforms</h1>
              <p>Windows Touch Device</p>
            </UsedTechnology>
          </Wrapper>
        </Article>
        <Article id="simulator" className={`${this.props.article === 'simulator' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Simulator VR</h2>
          <CSSSliderGastbyImg images={this.props.articlesContentQuery[3].node.frontmatter.images}

          videos={[
            <VideoPlayer ref={this.craneSimMovie} controls loop muted preload="none">
              <source type="video/mp4" src="https://media.stollvongati.com/files/media/liebherr_lisim_bauma_video.mp4.mp4" />
              <source type="video/webm" src="https://media.stollvongati.com/files/media/liebherr_lisim_bauma_video.webmhd.webm" />
              <source type="video/ogg" src="https://media.stollvongati.com/files/media/liebherr_lisim_bauma_video.oggtheora.ogv" />
            </VideoPlayer>
            ,
            <VideoPlayer ref={this.craneSimMovie2} controls loop muted preload="none">
              <source type="video/mp4" src="https://media.stollvongati.com/files/media/Liebherr_710_Applikation_final.mp4" />
              <source type="video/webm" src="https://media.stollvongati.com/files/media/Liebherr_710_Applikation_final.webm" />
              <source type="video/ogg" src="https://media.stollvongati.com/files/media/Liebherr_710_Applikation_final.ogv" />
            </VideoPlayer>
            ,
          ]
          }/>
          <Wrapper>
            <ProjectOverview
              projectContext={["Client Project (2016)"]}
              teamSize={"Big Size Team (~30 people)"}
              projectType={"Virtual Reality Application"}
              tasks={["Frontend Development", "Interaction Design", "Research", "Performance Optimization", "Crane Bending Shader", "Highscore Implementation", "Rope Physics", "Greenscreen Shader"]}
              />
            <Concept>
              <h1>Intention</h1>
              <TextToLeftSide>
                <p>The client asked to create a VR training system for Liebherr for the Oculus Rift Headset. The highest complexity for this was that crane behaviour should behave as realistically as possible. This means it had to rely on real physics. For example when the wind is blowing strong or the workload on the crane is too big the crane-arm will start moving or bending in a very realistic manner.</p>
                <p>From the get go we knew that the Unity Physics were not accurate enough for these requirements. Therefore we reached out for help from the University Stuttgart. They were responsible for the calculation of the forces. These physic values were passed over in real time to our VR application through socket connection (Beckhoff system).</p>
                <p>To have the full experience there was also a real crane cabin provided by Liebherr for the users to sit in. This cabin is connected with a hydraulic system so that it is able to rotate and tilt. All the windows in the cabin are colored in a green (looks like a really fancy green screen setup). An external 120fps camera attached to the Oculus Rift captured the cabin from a users perspective. A system renders out the green color of the windows and maps the virtual world onto it. The outcome is that users are able to see the real life cabin and their hands combined with the virtual crane. This means we’ve created a mixed reality experience with the help of multiple different types of technology.</p>
              </TextToLeftSide>
            </Concept>
            <Concept>
              <h1>Process</h1>
              <TextToLeftSide>
                <p>In the beginning phase of the project almost everything was calculated on the CPU (e.g. image capturing via the 120fps camera, physics, data transfer of the Beckhoff system). We managed to separate some of these processes into threads for multicore cpu usage. However, at that time Unity only supported a maximum of 2 cores. This means the tread system had to be relatively simple. The first attempts of connecting the unity physics with the external calculated physic system lead to a very funny behavior which we kept as an easteregg in the final product (swingboat crane). The green screen shader was written in Unity’s shader system were it is able to select one color.</p>
                <p>Initially none of us could stay longer than 2 minutes in the application with the headset on before getting sick. The biggest problem we had to deal with were floating point errors while transferring and converting the position and rotation data to the external system. Another problem was the latency we got while passing the data and receiving the new one. We solved these things after damping the output value and interpolating the data on the last couple of frames shown to the user. range to be rendered as transparent.</p>
              </TextToLeftSide>
            </Concept>
            <UsedTechnology>
              <h1>Technology used</h1>
              <p>Devlopment: Unity</p>
              <p>VR Release: SteamVR</p>
              <p>Crane Physics: University Stuttgart</p>
              <p>Physics Data Transfer: Beckhoff System</p>
              <p>3D Models: 3dsMax</p>
              <p>IDE: Visual Studio</p>
            </UsedTechnology>
            <UsedTechnology>
              <h1>Platforms</h1>
              <p>Windows Standalone</p>
            </UsedTechnology>
            Check out the project <a href="https://stollvongati.com/de/projekte/lisim-simulator-fuer-liebherr-turmdrehkrane.html">here</a> and <a href="https://stollvongati.com/de/projekte/der-liebherr-turmdrehkran-710-hc-l-als-vr-erlebnis.html">here</a>!
          </Wrapper>
        </Article>
        <Article id="intensaDrum" className={`${this.props.article === 'intensaDrum' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">VOITH - INTENSA DRUM</h2>
            <CSSSliderGastbyImg images={this.props.articlesContentQuery[2].node.frontmatter.images} />
          <Wrapper>
            <ProjectOverview
              projectContext={["Client Project (2017)"]}
              teamSize={"Small Size Team (~5 people)"}
              projectType={"Desktop-/Augmented Reality Application"}
              tasks={["Frontend Development", "Interaction Design", "AR Tracking and Stability", "world UI", "Performance Optimization"]}
              />
            <Concept>
              <h1>Intention</h1>
              <TextToLeftSide>
                <p>Our client, Voith GmbH wanted to show their product and its functionality in an interactive application. They also asked to create an AR App for mobile devices. This solutions should be used at exhibitions and for customer acquisition. The app offers a 3D view of the Intensa Drum product. Users are able to the object through touch/scroll/pinch interactions. This is used to get a feeling of how the product looks like and works.</p>
                <p>It is also possible to tap/click specific hotspots to get further information about the Intensa Drum.
  These hotspots can also trigger animations for the 3D object. It shows some containers moving into the drum and getting shredded to become liquid molasses. Other hotspots guide users to a specific part of the facility where they can get additional information and watch video descriptions of the products behavior.</p>
  <p>The AR application requires an image-target that can be downloaded from the companies homepage or can be found on some flyers/magazines. Placing this image in front of the device camera triggers the AR behavior of the product. This image is needed to place the 3D object in a three dimensional space.</p>
            </TextToLeftSide>
          </Concept>
            <Concept>
              <h1>Process</h1>
              <TextToLeftSide>
                <p>One client requirement was that the AR application hat to work on an iPad Air. Therefore we were not able to integrate Apples ARKit technology as it is not supporting this device. Thats why we chose the Wikitude Framework instead. This framework had a major downside on building time, because after every export to XCode it needed to be assigned in XCode binarys. A runscript to remove the simulator architecture had also to be inserted manually. Our solution to this problem was to code a linker script right from Unity.</p>
                <p>Another difficulty was to make the physics work in AR mode as various interactions were messing them up completely. We figured out a way to solve this by moving all rotating and scaling interactions away from the 3D object to the camera object.</p>
              </TextToLeftSide>
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
              <p>iOS Devices, Windows (without AR)</p>
            </UsedTechnology>
          </Wrapper>
        </Article>
        <Article id="recaro-vr" className={`${this.props.article === 'recaro-vr' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Recaro - Seat configurator</h2>
          <CSSSliderGastbyImg images={this.props.articlesContentQuery[5].node.frontmatter.images}
            videos={[
              <VideoPlayer ref={this.recaroMovie} controls loop muted preload="none">
                <source type="video/mp4" src="https://media.stollvongati.com/files/media/AircraftInteriors_RECARO.mp4" />
                <source type="video/webm" src="https://media.stollvongati.com/files/media/AircraftInteriors_RECARO.webm" />
                <source type="video/ogg" src="https://media.stollvongati.com/files/media/AircraftInteriors_RECARO.ogv" />
              </VideoPlayer>
            ]
            }/>
          <Wrapper>
            <ProjectOverview
              projectContext={["Client Project (2016-2017)"]}
              teamSize={"Middle Size Team (~8 people)"}
              projectType={"Virtual Reality Application"}
              tasks={["Frontend Development", "Interaction System", "Research", "Performance Optimization", "Model/Color Switcher System", "Dynamic Light System"]}
              />
            <Concept>
              <h1>Intention</h1>
              <TextToLeftSide>
                <p>The client Recaro wanted to create a VR configurator for their seat products as an application that can be shown at exhibitions. It should be in general a lite version of their a basic seat configurator. It is considered a lite version because it covers only one of their products: The CL6710.</p>
                <p>Some parts of the seat can be colorized by the users for personalization purposes. Some other devices could be completely changed and modified. The user is operating the application through VR controllers. With the left one they are able to manipulate the global states of the scene like daytime, cabin light, seat position etc. With the right one the user is able to modify the seat and trigger animations (e.g. for opening the entertainment screen or seat divider).</p>
                <p>The interactions could get easily overloaded. Originally the interaction system was designed for engineers which have less to medium experience in VR. Especially for the exhibition in Hamburg we added an extra goal to this project. We wanted it be as easy as possible to operate by everyone without VR skills. That’s why we created a tablet connection where a trained person could also make some inputs to the VR application. These inputs were ranging from triggering animations, changing the daytime or colors of the seats.</p>
              </TextToLeftSide>
          </Concept>
            <Concept>
              <h1>Process</h1>
              <TextToLeftSide>
                <p>At the beginning of this project there were not many interactions kits available for VR applications. Therefore we had to created our own one. For the base of this project we used SteamVR for common button inputs. We then linked these events to our custom behaviors (e.g. pointer raycast on objects). It required a lot of research work and many trial and error approaches for the behavior to work properly.</p>
                <p>On top of that the whole system needed to be as dynamic as possible. We created a global material manager and a shader switcher which connects all function for 3D objects called MOG.
  The general tablet connection was not implemented by me but I handled the received informations from the socket connection in Unity and passed some parameter information back via to the tablet. Some states needed to be implemented bidirectional for example if the VR user changes the daytime it also needed to be reflected on the tablet client.</p>
              </TextToLeftSide>
        </Concept>
            <UsedTechnology>
              <h1>Used Technology</h1>
              <p>Devlopment: Unity</p>
              <p>VR Interaction System: Selfmade</p>
              <p>VR Release: SteamVR</p>
              <p>Camera: Cinemachine</p>
              <p>3D Models: 3dsMax</p>
              <p>IDE: Visual Studio</p>
            </UsedTechnology>
            <UsedTechnology>
              <h1>Platforms</h1>
              <p>Windows Standalone</p>
            </UsedTechnology>
            <a href="https://stollvongati.com/de/projekte/virtuelle-flugzeugkabine-fuer-recaro-business-class-sitze.html">Check out the project here!</a>
          </Wrapper>
        </Article>
      </div>
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
  articlesContentQuery: PropTypes.array,
  timeout: PropTypes.bool
}

export default ProjectContent
