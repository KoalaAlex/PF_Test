/* global tw */
import React from 'react';
import styled from '@emotion/styled'
import PropTypes from 'prop-types';
import { CSSParallaxGroup, CSSParallaxLayer } from '../CSSParallax';
import { SVGPageFour } from '../SVGManager';

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

class PartFour extends React.PureComponent {
  render() {
    return (
      <CSSParallaxGroup name="page4" debugOn={this.props.debugOn} xoffset={this.props.xOffset} yoffset={this.props.yOffset}>
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
                “Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning”
              </AboutSub>
              <AboutSub>
                Albert Einstein
              </AboutSub>
            </Albert>
          </Inner>
       </ContentLayer>
      </CSSParallaxGroup>
    );
  }
}

export default PartFour;

PartFour.propTypes = {
  debugOn: PropTypes.bool.isRequired,
  xOffset: PropTypes.number.isRequired,
  yOffset: PropTypes.number.isRequired
}
