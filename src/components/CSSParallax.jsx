import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Wrapper = styled.div`
  perspective: 1px;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  transform-style: preserve-3d;
`;

const WrapperLayer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  // pageOffset={(-(this.props.speed + 1) * 150) + (this.props.offset * 100 * ((1 + ((this.props.speed + 1))) / 1))}
  perspective-origin-x: 100%;
  transform: translateZ(${(props => props.zOffset)}px) scale(${(props => props.scale)});
`;

const ParallaxGroup = styled.div`
  position: absolute;
  transform-style: preserve-3d;
  width: 100%;
  transform: translate3d(0vh, ${(props => props.pageOffset)}vh, 0vh);
  z-index: ${(props => props.zIndex)};
`;

export class CSSParallax extends React.PureComponent {
  render() {
    return (
      <Wrapper pages={this.props.pages * 100} className="parallax">
        {this.props.children}
      </Wrapper>
    )
  }
}

CSSParallax.propTypes = {
  pages: PropTypes.number,
  children: PropTypes.node,
};

CSSParallax.defaultProps = {
  pages: 1,
};

export class CSSParallaxLayer extends React.PureComponent {
  render() {
    return (
      <ParallaxGroup pageOffset={((this.props.offset * 100 / ((1 + (-this.props.speed)) / 1))) * ((1 + (-this.props.speed)) / 1 )} zIndex={(this.props.offset + 1)} >
        <WrapperLayer zOffset={-(-this.props.speed)} scale={((1 + (-this.props.speed)) / 1)} className="parallax-layer">
          {this.props.children}
        </WrapperLayer>
      </ParallaxGroup>
    )
  }
}

CSSParallaxLayer.propTypes = {
  speed: PropTypes.number,
  offset: PropTypes.number,
  children:PropTypes.node,
};

CSSParallaxLayer.defaultProps = {
  speed: 1,
  offset: 0,
};
