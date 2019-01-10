/* global tw */
import React from 'react';
import styled from '@emotion/styled'
import PropTypes from 'prop-types';
import { CSSParallaxGroup, CSSParallaxLayer } from '../CSSParallax';
import { SVGPageThree } from '../SVGManager';

import { NoClickLayerSVG, ProjectParallaxLayer } from '../../styles/parallax/parallax'

import { RotateDivider, Inner, Title } from '../../styles/general'

import Projects from '../Projects';

class PartThree extends React.PureComponent {
  render() {
    return (
      <CSSParallaxGroup name="page3" debugOn={this.props.debugOn} xoffset={this.props.xOffset} yoffset={this.props.yOffset}>
        <CSSParallaxLayer speed={0} zIndex={1}>
          <RotateDivider />
        </CSSParallaxLayer>
        <NoClickLayerSVG speed={0.1} zIndex={2}>
          <SVGPageThree />
        </NoClickLayerSVG>
        <ProjectParallaxLayer speed={0.2} zIndex={3}>
          <Inner>
            <Title>SOME OF MY NON CONFIDENTIAL PROJECTS</Title>
                <Projects onOpenArticle={this.props.handleOpenArticle} />
          </Inner>
        </ProjectParallaxLayer>
      </CSSParallaxGroup>
    );
  }
}

export default PartThree;

PartThree.propTypes = {
  debugOn: PropTypes.bool.isRequired,
  xOffset: PropTypes.number.isRequired,
  yOffset: PropTypes.number.isRequired,
  handleOpenArticle: PropTypes.func.isRequired
}
