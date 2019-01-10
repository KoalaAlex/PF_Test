/* global tw */
import React from 'react';
import styled from '@emotion/styled'
import PropTypes from 'prop-types';
import { CSSParallaxGroup } from '../CSSParallax';
import { SVGPageFive } from '../SVGManager';

import { ContentLayer, AnimationParallaxLayer, LastNoClickLayerSVG } from '../../styles/parallax/parallax'
import { waveAnimation } from '../../styles/animations';
import { Inner, Title } from '../../styles/general'
import config from '../../../config/website';

const WaveWrapper = styled.div`
  ${tw('absolute pin-b w-full')};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw('relative h-full')};
  svg {
    width: 100%;
    height: 40vh;
  }
`;

const ContactText = styled.div`
  ${tw('text-grey-light text-xl md:text-2xl lg:text-3xl')};
  a {
    color: #ff0057;
    text-decoration: none;
    text-shadow: 0 0.1rem 1rem rgb(30, 31, 36);
  }
`;

const Footer = styled.footer`
  ${tw('text-center text-grey absolute pin-b p-6 text-md lg:text-lg')};
  pointer-events: auto;
`;

class PartFive extends React.PureComponent {
  render() {
    return (
      <CSSParallaxGroup name="page5" debugOn={this.props.debugOn} xoffset={this.props.xOffset} yoffset={this.props.yOffset}>
        <AnimationParallaxLayer speed={0} fill="#23262b" zIndex={2}>
          <WaveWrapper>
            <InnerWave>
              <svg viewBox="0 0 800 338.05" preserveAspectRatio="none">
                <path className={waveAnimation}>
                </path>
              </svg>
            </InnerWave>
          </WaveWrapper>
        </AnimationParallaxLayer>
        <LastNoClickLayerSVG speed={0.1} zIndex={3}>
          <SVGPageFive />
        </LastNoClickLayerSVG>
        <ContentLayer speed={0.2} zIndex={4}>
          <Inner>
            <Title>GET IN TOUCH</Title>
            <ContactText>
              <p>Feel free to say <a href="mailto:s_alexander@hotmail.de">hi</a> to me.</p>
              <p>Find out more about me on {' '}
                <a href={config.siteLinkedIn}>LinkedIn</a> &{' '}
                <a href={config.siteInstagram}>Instagram</a>
              </p>
            </ContactText>
          </Inner>
        </ContentLayer>
        <ContentLayer speed={0} zIndex={4}>
          <Footer>
            <p>&copy; 2018 by Alexander Stricker.{' '}</p>
            <a href={config.github}>Github Repository</a>.
          </Footer>
        </ContentLayer>
      </CSSParallaxGroup>
    );
  }
}

export default PartFive;

PartFive.propTypes = {
  debugOn: PropTypes.bool.isRequired,
  xOffset: PropTypes.number.isRequired,
  yOffset: PropTypes.number.isRequired
}
