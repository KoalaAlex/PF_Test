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

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    loop: true,
    muted: true,
    fluid: true,
    preload: 'none',
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

  function createSourcesObjs(value){
    const returnValue = []
    for (var i = 0; i < value.length; i++) {
      returnValue.push({
          src: value[i][0],
          type: value[i][1]
      });
    }
    return returnValue;
  }

  function createVideoPlayerArray(videos){
    const returnValue = []
    for (var i = 0; i < videos.length; i++) {
      returnValue.push(<VideoPlayerFlex key={i} {...videoJsOptions} sources={createSourcesObjs(videos[i])} />)
    }
    return returnValue;
  }

  function createVideosIfNeeded(video){
    if(video.length > 0){
      return {videos: createVideoPlayerArray(video)}
    }
    else{
      return {}
    }
  }

  const memoArtikel = useMemo(() =>
  (
    <ProjectsWrapper id="project-content" isVisible={props.activeArticle}>
      {markdownFileArray.map((value, i) => (
        <ProjectPage
          key={value.node.frontmatter.title}
          markdownData={value}
          {...createVideosIfNeeded(value.node.frontmatter.videos)}
          isVisible={props.activeArticle === value.node.frontmatter.title}
        >
          <div
            dangerouslySetInnerHTML={{ __html: value.node.html }}
          />
        </ProjectPage>
      ))}
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
              html
              frontmatter {
                title
                videos
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
