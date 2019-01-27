/* global tw */
import React, { useMemo } from 'react';
import styled from '@emotion/styled'
import PropTypes from 'prop-types';
import { ParallaxGroup } from '../parallax';
import { SVGPageOne } from '../svg-manager';
import MediaQuery from 'react-responsive';

import { ContentLayer, NoClickLayerSVG } from '../../styles/parallax/parallax'

const Hero = styled.div`
  ${tw('p-6 md:p-12 lg:p-24 w-full xl:w-2/3')};
  margin: auto;
`;

const BigTitle = styled.h1`
  ${tw('text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-white mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

const Subtitle = styled.p`
  ${tw('text-xl sm:text-xl md:text-2xl lg:text-3xl text-white mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  a {
    color: #ff0057;
    text-decoration: none;
    text-shadow: 0 0.1rem 1rem rgb(30, 31, 36);
  }
`;

const Welcome = React.memo((props) => {
  // Only re-rendered if `b` changes:
  const memoNoRerender = useMemo(() =>
  (<>
    <NoClickLayerSVG speed={-0.2} zIndex={1}>
    <SVGPageOne />
    </NoClickLayerSVG>
    <ContentLayer speed={0.2} zIndex={2}>
    <Hero>
      <BigTitle>
        HI,<br />WELCOME<MediaQuery query="(max-width: 600px)"><br /></MediaQuery> TO MY<br />PLAYGROUND
      </BigTitle>
      <Subtitle>My name is Alex and I am a frontend developer who loves to create impactful experiences for web, VR/ AR and mobile devices.
  <br/><br/>Check out some of my <a onClick={() => {props.moveToPage2()}}>projects</a></Subtitle>.
    </Hero>
    </ContentLayer>
  </>), () => {return true });


  return (
    <ParallaxGroup name="page1" easterEggOn={props.easterEggOn} xoffset={props.xOffset} yoffset={0}>
      {memoNoRerender}
    </ParallaxGroup>
  );
});

export default Welcome;

Welcome.propTypes = {
  easterEggOn: PropTypes.bool.isRequired,
  xOffset: PropTypes.number.isRequired,
  moveToPage2: PropTypes.func.isRequired
}
