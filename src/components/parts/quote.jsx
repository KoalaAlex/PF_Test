/* global tw */
import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { ParallaxGroup } from '../parallax'
import { SVGPageFour } from '../svg-manager'

import { ContentLayer, NoClickLayerSVG, AvatarBackgroundLayer } from '../../styles/parallax/parallax'

import { Inner, AboutBackground } from '../../styles/general'

const Albert = styled.div`
  ${tw(' flex flex-col items-center mt-8')};
  p {
    font-family:'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
  }
`;

const AboutSub = styled.p`
  ${tw('text-white pt-12 lg:pt-0 lg:pl-12 text-lg lg:text-xl xl:text-1xl')};
`;

const Quote = React.memo((props) => {
  const markdownData = props.data.markdownRemark
  const memoNoRerender = useMemo(() =>
  (<>
    <AvatarBackgroundLayer speed={0} zIndex={1}>
      <AboutBackground/>
    </AvatarBackgroundLayer>
    <NoClickLayerSVG speed={0.1} zIndex={2}>
      <SVGPageFour />
    </NoClickLayerSVG>
    <ContentLayer speed={0.2} zIndex={3}>
      <Inner>
        <Albert>
          <AboutSub>
            {markdownData.excerpt}
          </AboutSub>
          <AboutSub>
            {markdownData.frontmatter.title}
          </AboutSub>
        </Albert>
      </Inner>
   </ContentLayer>
  </>), () => {return true });
  return (
    <ParallaxGroup name="page4" easterEggOn={props.easterEggOn} xoffset={props.xOffset} yoffset={props.yOffset}>
      {memoNoRerender}
    </ParallaxGroup>
  );
});

Quote.propTypes = {
  easterEggOn: PropTypes.bool.isRequired,
  xOffset: PropTypes.number.isRequired,
  yOffset: PropTypes.number.isRequired
}

export default props => (
  <StaticQuery
    query={graphql`
      query QuoteQuery{
        markdownRemark(frontmatter: { path : { regex : "\/quote/"} }){
          excerpt
          frontmatter {
            title
          }
        }
      }
    `}
    render={data => <Quote data={data} {...props} />}
  />
)
