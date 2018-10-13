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
const craneSimul_A = [cranesim01];
const tractionInverter_A = [traktionsStrom01, traktionsStrom02, traktionsStrom03, traktionsStrom04, traktionsStrom06];

import '../assets/scss/components/ProjectContent.scss';

const CloseWrapper = styled.div`
  pointer-events: all;
  //transform: translate3d(0px, 0px, 10px);
`;

const Overview = styled.div`
  display: grid;
  justify-items: center;
  align-items:top;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
  }
  padding: 3rem;
`;

const OverviewItem = styled.div`

`;

const ProjectTypeItem = styled(OverviewItem)`
  @media (max-width: 800px) {
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
  @media (max-width: 800px) {
      grid-column-end: 3;
  }
`;

class ProjectContent extends React.Component {
  render() {

    let close = <CloseWrapper className="close" onClick={() => {this.props.onCloseArticle()}}><SVG icon="triangle" width={'8'} fill="#ff006f" useSelfAlign={true}/></CloseWrapper>

    return (
      <div id="project-content" style={this.props.timeout ? {display: 'grid'} : {display: 'none'}}>
      <article id="portfolio" className={`${this.props.article === 'portfolio' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="major">My Portfolio Playground</h2>
        <span className="image main">
          <CSSSlider images={portfolioA} images2x={portfolioA}/>
        </span>
        <ProjectOverview
          projectContext={["skill presentation", "job application"]}
          teamSize={"solo project"}
          projectType={"portfolio"}
          tasks={["front end development", "user experience", "research", "opimisation", "visual design", "quick prototype"]}
          />
        <Concept>
          <h1>The Intention</h1>
          <p>It should lead to a presentation of myself and my work in a playful, dynamic and colorful way. it uses state fo the art technology with mostly css manipulations and transitions</p>
        </Concept>
        <Concept>
          <h1>Work in Process</h1>
          <p>I started with a demo from gatsby <a href="https://github.com/LeKoArts/gatsby-starter-portfolio-cara">starter</a> dor quick development. While working on it I discovered performance issues on my mac book pro (2013). the main issue was on the one hand the parallax effect made with <a href="https://github.com/drcmda/react-spring" >react spring</a> and on the other hand the enormous count of SVGs.
          <br />I started to redesign the whole parallax effect to work with CSS and not to depend on script. Then I make use of the xlink and "use" tag on all SVGs. This saves me a lot of performance. Also I don't liked the portoflio card wich referenced to a seperate side. For this i found a solution to change the perspective to fade on the hidden right side on the page an there it was the content for the projects.
          </p>
        </Concept>
        <UsedTechnology>
          <h1>Used UsedTechnology</h1>
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
        {close}
      </article>
        <article id="gemue-vr" className={`${this.props.article === 'gemue-vr' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Gemue VR</h2>
          <span className="image main">
            <CSSSlider images={gemueVR_A} images2x={gemueVR_A}/>
          </span>
          <ProjectOverview
            projectContext={["global meetings", "maintainance training", "product presentation"]}
            teamSize={"middle size project"}
            projectType={"work project"}
            tasks={["developer", "network syncronisation", "research", "opimisation", "interaction design"]}
            />
          <Concept>
            <h1>The Intention</h1>
            <p></p>
          </Concept>
          <Concept>
            <h1>Work in Process</h1>
            <p>This was one of the funnies and also one of the toughest projects i made.</p>
            <p>Mostly of the bugs was dicovert via multiplayer because you have to be very specific who is the manipulator of which item i the scene and how the transfer ownership works</p>
            <p>You start in the Lobby where you can modify your Avatar with outfit and colorpalets when you are at the mirrow. This mode is not connected to multilayer.</p>
            <p>Then you can choose on of two rooms for multiplayer. One is the workshop room where you can start the maintainance training via a Questline that hints your mistakes and gives you tips. The other one is the meeting room wher you can relax an chitchat with other gemue users. Dont miss the lasersword easter egg and the one with the duck ;)</p>
            <p>The whole project was made in the GameEngine Unity and is highly driven from 3D objects from 3dsMax. The best part was the Multiplayer Mode. It is so much fun to meet peaple in VR just like the ones are realy in the same room only they appear as an Avatar.  The main aspect is a maintanance of a ventil with membran change.n df</p>
          </Concept>
          <UsedTechnology>
            <h1>Used UsedTechnology</h1>
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
          {close}
        </article>
        <article id="gemue-ar" className={`${this.props.article === 'gemue-ar' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Gemue AR</h2>
          <span className="image main">
            <CSSSlider images={gemueAR_A} images2x={gemueAR_A}/>
          </span>
          <ProjectOverview
            projectContext={["global meetings", "maintainance training", "product presentation"]}
            teamSize={"small size project"}
            projectType={"work project"}
            tasks={["developer", "AR tracking and stability", "research", "opimisation", "interaction design"]}
            />
          <Concept>
            <h1>The Intention</h1>
            <p>This projects idea was to find a way to present the product of gemue to his customers with the AR technology</p>
          </Concept>
          <Concept>
            <h1>Work in Process</h1>
            <p>In this project it was realy helpful to rely on the ARKit demo for quick development. But further on it was a little annoying to alwas deplay via XCode to tets the Ar behaviour. While developing we were discovering the Ar Kit Remote Feature that enables you to test directly in Unity Editor while connecting your iPhone via lightning cable. That saved us a lot of time.</p>
            <p>It was the first app that we made via the Unity Cinemachine and it also had some annoying beaviours... One was when you switch between the cameras that it appears at start a very long frame. when managed to overcome this by scripting our own camera interpolation switch and not to rely on the one from the Framework</p>
          </Concept>
          <UsedTechnology>
            <h1>Used UsedTechnology</h1>
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
          {close}
        </article>
        <article id="traction-inverter" className={`${this.props.article === 'traction-inverter' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Traction Inverter</h2>
          <span className="image main">
            <CSSSlider images={tractionInverter_A} images2x={tractionInverter_A}/>
          </span>
          <ProjectOverview
            projectContext={["manual camera movement", "use case product", "product presentation"]}
            teamSize={"middle size project"}
            projectType={"work project"}
            tasks={["developer", "dynamic camera movement", "research", "opimisation", "interaction design"]}
            />
          <Concept>
            <h1>The Intention</h1>
            <p>This application was made for a messe showcase. The need of the client was to show his product in an interactive and playfull way.
            <br />It should include the new CI of Voith and therefore the style was in close connection to it.</p>
            <p>In this kind of project the cinemachine was realy handy and we could rely on the the nice smooth camera fade script from <a href="javascript:;" onClick={() => {this.props.onOpenArticle("gemue-ar")}}>gemeu-ar</a></p>
          </Concept>
          <UsedTechnology>
            <h1>Used UsedTechnology</h1>
            <p>Devlopment: Unity</p>
            <p>Camera: Cinemachine</p>
            <p>3D Models: 3dsMax</p>
            <p>IDE: Visual Studio</p>
          </UsedTechnology>
          <UsedTechnology>
            <h1>Platforms</h1>
            <p>iPad and iPhone</p>
          </UsedTechnology>
          {close}
        </article>
        <article id="simulator" className={`${this.props.article === 'simulator' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Simulator VR</h2>
          <span className="image main">
            <CSSSlider images={craneSimul_A} images2x={craneSimul_A}/>
          </span>
          <ProjectOverview
            projectContext={["crane bending", "workload testing", "product presentation", "training"]}
            teamSize={"middle size project"}
            projectType={"work project"}
            tasks={["developer", "highscore implementation", "crane bending shader", "research", "opimisation", "interaction design"]}
            />
          <Concept>
            <h1>The Intention</h1>
            <p></p>
          </Concept>
          <UsedTechnology>
            <h1>Used UsedTechnology</h1>
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
          {close}
        </article>
        <article id="intensaDrum" className={`${this.props.article === 'intensaDrum' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Augmented Reality</h2>
          <CSSSlider images={intensadrum_A} images2x={intensadrum_A}/>
          <ProjectOverview
            projectContext={["crane bending", "workload testing", "product presentation", "training"]}
            teamSize={"middle size project"}
            projectType={"work project"}
            tasks={["developer", "highscore implementation", "crane bending shader", "research", "opimisation", "interaction design"]}
            />
          <Concept>
            <h1>The Intention</h1>
            <p></p>
          </Concept>
          <UsedTechnology>
            <h1>Used UsedTechnology</h1>
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
          {close}
        </article>
        <article id="recaro-vr" className={`${this.props.article === 'recaro-vr' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Recaro VR</h2>
          <CSSSlider images={recaroVR_A} images2x={recaroVR_A}/>
          <ProjectOverview
            projectContext={["crane bending", "workload testing", "product presentation", "training"]}
            teamSize={"middle size project"}
            projectType={"work project"}
            tasks={["developer", "highscore implementation", "crane bending shader", "research", "opimisation", "interaction design"]}
            />
          <Concept>
            <h1>The Intention</h1>
            <p>It was an offer from Recaro that he wants an configurator vor his seat product.</p>
          </Concept>
          <Concept>
            <h1>Work in Process</h1>
            <p>At the time the project starts it was not much available about interaction systems in VR therefore we created our own. At the base of the project we used SteamVR and the common Button Events. At this Events we created to link to our custom behaviours like pointer raycast to objects, check when one is it and so on. It was a lot of recherch needed and also much trial and error for the right beahviour. On top of that the whole system needed to be as dynamic as possible. We created a global material and shader switcher that connects all function for 3D Object called "MOG".</p>
          </Concept>
          <UsedTechnology>
            <h1>Used UsedTechnology</h1>
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
          {close}
        </article>
      </div>
    )
  }
}

ProjectContent.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default ProjectContent
