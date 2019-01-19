/* global tw */
import React from 'react';
import PropTypes from 'prop-types';

// components
import { ParallaxGroup, ParallaxLayer } from '../parallax';
import { SVGPageThree } from '../svg-manager';
import { NoClickLayerSVG, ProjectParallaxLayer } from '../../styles/parallax/parallax'
import { RotateDivider, Inner, Title } from '../../styles/general'
import ProjectCards from '../project/project-cards';

const Projects = React.memo((props) => {
  return (
    <ParallaxGroup name="page3" easterEggOn={props.easterEggOn} xoffset={props.xOffset} yoffset={props.yOffset}>
      <ParallaxLayer speed={0} zIndex={1}>
        <RotateDivider />
      </ParallaxLayer>
      <NoClickLayerSVG speed={0.1} zIndex={2}>
        <SVGPageThree />
      </NoClickLayerSVG>
      <ProjectParallaxLayer speed={0.2} zIndex={3}>
        <Inner>
          <Title>SOME OF MY NON CONFIDENTIAL PROJECTS</Title>
              <ProjectCards openProject={props.openProject} />
        </Inner>
      </ProjectParallaxLayer>
    </ParallaxGroup>
  );
});

export default Projects;

Projects.propTypes = {
  easterEggOn: PropTypes.bool.isRequired,
  xOffset: PropTypes.number.isRequired,
  yOffset: PropTypes.number.isRequired,
  openProject: PropTypes.func.isRequired
}
