/* global tw */
import React from 'react';
import styled from '@emotion/styled'
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { ParallaxGroup } from '../parallax';
import { SVGPageTwo } from '../svg-manager';
import MediaQuery from 'react-responsive';
import { SVG } from '../../components/svg-utils';
import Img from 'gatsby-image';

import { hopAnimDown } from '../../styles/animations';

import { ContentLayer, NoClickLayerSVG, AvatarStartBackgroundLayer, BeforeGridLayer } from '../../styles/parallax/parallax'

import { AboutBackground, Inner, Title } from '../../styles/general'

const AvatarStartBackground = styled(AboutBackground)`
  top: 15%;
`;

const AvatarStartBackgroundLeft = styled(AboutBackground)`
  background: #171717;
  width: 20%;
  height: 5%;
  top: 10%;
  left: 0%;
`;

const AvatarStartBackgroundRight = styled(AboutBackground)`
  background: #171717;
  width: 20%;
  height: 5%;
  top: 10%;
  right: 0%;
`;

const MoveToPageOne = styled.div`
  display: inline-grid;
  pointer-events: auto;
  align-items: center;
  justify-items: center;
  position: absolute;
  height: 5%;
  top: 10%;
  width: 60%;
  background-color: rgba(255, 255, 255, .05);
  @supports ((-webkit-backdrop-filter: blur(1em)) or (backdrop-filter: blur(1em))) {
        -webkit-backdrop-filter: blur(1em);
        backdrop-filter: blur(1em);
  }
  border-radius: _size(border-radius);
  cursor: pointer;
  text-indent: 4rem;
  overflow: hidden;
  white-space: nowrap;
  svg {
    animation: ${hopAnimDown} 4s ease-in-out infinite alternate;
    transform: translate3d(0,0,0) rotateZ(-180deg);
    will-change: transform;
  }
  &:hover {
    background-color: _palette(border-bg);
    svg {
      animation: ${hopAnimDown} 1s ease-in-out infinite alternate;
    }
  }
  &:active {
    background-color: _palette(border-bg-alt);
  }
`;

const GridContainer = styled.div`
  display: grid;
  justify-items: center;
  height: 100%;
  width: 100%;
`;

const AboutHero = styled.div`
  ${tw(' flex flex-col lg:flex-row items-center mt-8')};
  p {
    font-family:'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
  }
`;

const Avatar = styled(Img)`
  ${tw('rounded-full w-32 xl:w-48 shadow-lg h-full')};
  min-width: 160px;
`;

const AboutSub = styled.p`
  ${tw('text-white pt-12 lg:pt-0 lg:pl-12 text-lg lg:text-xl xl:text-1xl')};
`;


const AboutMe = React.memo((props) => {
  return (
    <ParallaxGroup name="page2" easterEggOn={props.easterEggOn} xoffset={props.xOffset} yoffset={props.yOffset}>
      <AvatarStartBackgroundLayer speed={0} zIndex={2}>
        <AvatarStartBackgroundLeft />
        <AvatarStartBackgroundRight />
        <AvatarStartBackground/>
      </AvatarStartBackgroundLayer>
      <ContentLayer speed={0} zIndex={4}>
        <MoveToPageOne onClick={() => {props.moveToPage1()}}>
          <SVG icon="triangle" width={'8'} fill="#ff006f" useSelfAlign={true}/>
        </MoveToPageOne>
      </ContentLayer>
      <NoClickLayerSVG speed={0.1} zIndex={2}>
        <SVGPageTwo />
      </NoClickLayerSVG>
      <BeforeGridLayer speed={0.2} zIndex={4}>
        <GridContainer>
        <Inner>
          <Title>THIS IS WHAT MOTIVATES ME</Title>
          <AboutHero>
            <Avatar fluid={props.data.allMarkdownRemark.edges[0].node.frontmatter.image.childImageSharp.fluid} alt="Alexander Stricker" />
            <div>
              <MediaQuery query="(min-width: 800px)">
                <AboutSub>
                  {props.data.allMarkdownRemark.edges[0].node.frontmatter.text}
                </AboutSub>
              </MediaQuery>
              <AboutSub>
                If I would need to point out something that makes me special it would be my urge to
  add a little something to all of my work - let’s call it <a onClick={() => {props.toggleEasterEgg()}}>easteregg</a> ;)
              </AboutSub>
            </div>
          </AboutHero>
        </Inner>
      </GridContainer>
     </BeforeGridLayer>
    </ParallaxGroup>
  );
});

AboutMe.propTypes = {
  easterEggOn: PropTypes.bool.isRequired,
  xOffset: PropTypes.number.isRequired,
  yOffset: PropTypes.number.isRequired,
  moveToPage1: PropTypes.func.isRequired,
  toggleEasterEgg: PropTypes.func.isRequired
}

export default props => (
  <StaticQuery
    query={graphql`
      query AvatarQuery{
        allMarkdownRemark(
          filter : {
             frontmatter: {
               tags: {
                 in: ["about"]
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
                text
                image {
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
    render={data => <AboutMe data={data} {...props} />}
  />
)
