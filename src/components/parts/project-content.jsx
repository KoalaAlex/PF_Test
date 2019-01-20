import React, { useState , useMemo} from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { ParallaxGroup, ParallaxLayer } from '../parallax';

import { SVGPageSix } from '../svg-manager';

import { LastNoClickLayerSVG, AvatarBackgroundLayer } from '../../styles/parallax/parallax'

import { VideoPlayer } from '../video-player'

import ProjectPage from '../project/project-page'

//style
import { RotateDivider } from '../../styles/general'

// CSS
import '../../styles/video-player.css'

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

const ProjectsWrapper = styled.div`
  ${({ isVisible }) => isVisible ? css`
      display: block;
    ` : css`
      display: none;
    `
  }
  position: absolute;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  color: white;
  z-index: 3;
  font-family: 'IBM Plex Mono';
  text-align: center;
  article {
    h1, h2{
      text-transform: uppercase;
    }
    p{
      font-family:'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
    }
  }
`

import { detect } from 'detect-browser'
const browserDetect = detect();

const ProjectContent = React.memo((props) => {
  const [browser, setBrowser] = useState(browserDetect.name);
  const markdownFileArray = props.data.allMarkdownRemark.edges;
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

  const memoNoRerender = useMemo(() =>
  (<>
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
  </>), () => { return true });

  const memoArtikel = useMemo(() =>
  (
    <ProjectsWrapper id="project-content" isVisible={props.activeArticle}>
      <ProjectPage
        id="portfolio"
        markdownData={markdownFileArray[4]}
        isVisible={props.activeArticle === 'portfolio'}
      />
      <ProjectPage
        id="gemue-vr"
        markdownData={markdownFileArray[1]}
        videos={[
          <VideoPlayerFlex { ...videoJsOptionsGemue } />
        ]}
        isVisible={props.activeArticle === 'gemue-vr'}
      >
        <a href="https://stollvongati.com/de/projekte/vr-schulungsanwendung-fuer-gemue.html">Check out the project here!</a>
      </ProjectPage>
      <ProjectPage
        id="gemue-ar"
        markdownData={markdownFileArray[0]}
        isVisible={props.activeArticle === 'gemue-ar'}
      />
      <ProjectPage
        id="simulator"
        markdownData={markdownFileArray[3]}
        videos={[
          <VideoPlayerFlex { ...videoJsOptionsCraneSim1 } />,
          <VideoPlayerFlex { ...videoJsOptionsCraneSim2 } />
        ]}
        isVisible={props.activeArticle === 'simulator'}
      >
        Check out the project <a href="https://stollvongati.com/de/projekte/lisim-simulator-fuer-liebherr-turmdrehkrane.html">here</a> and <a href="https://stollvongati.com/de/projekte/der-liebherr-turmdrehkran-710-hc-l-als-vr-erlebnis.html">here</a>!
      </ProjectPage>
      <ProjectPage
        id="intensaDrum"
        markdownData={markdownFileArray[2]}
        isVisible={props.activeArticle === 'intensaDrum'}
      />
      <ProjectPage
        id="recaro-vr"
        markdownData={markdownFileArray[5]}
        videos={[
          <VideoPlayerFlex { ...videoJsOptionsRecaro } />
        ]}
        isVisible={props.activeArticle === 'recaro-vr'}
      >
        <a href="https://stollvongati.com/de/projekte/virtuelle-flugzeugkabine-fuer-recaro-business-class-sitze.html">Check out the project here!</a>
      </ProjectPage>
      <ProjectPage
        id="traction-inverter"
        markdownData={markdownFileArray[5]}
        isVisible={props.activeArticle === 'traction-inverter'}
      />
    </ProjectsWrapper>
  ), [props.activeArticle]);
  return (
    <ParallaxGroup name="page6" easterEggOn={props.easterEggOn} xoffset={150 + props.xOffset} yoffset={0.5}>
      {memoNoRerender}
      <ParallaxLayer speed={0.1} zIndex={3} browserName={browser}>
        {memoArtikel}
      </ParallaxLayer>
    </ParallaxGroup>
  )
});

ProjectContent.propTypes = {
  easterEggOn: PropTypes.bool.isRequired,
  xOffset: PropTypes.number.isRequired,
  activeArticle: PropTypes.string,
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
