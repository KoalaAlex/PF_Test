import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import {Element} from 'react-scroll'

const perspective = 100;

const Wrapper = styled(Element)`
  position: absolute;
  perspective: ${perspective}px;
  perspective-origin: 50% 50%;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  transform-style: preserve-3d;
`;

const WrapperLayer = styled.div`
  position: absolute;
  pointer-events: none;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  // pageOffset={(-(this.props.speed + 1) * 150) + (this.props.offset * 100 * ((1 + ((this.props.speed + 1))) / 1))}
//  perspective-origin-x: 100%;
  transform: translateZ(${(props => props.zoffset)}px) scale(${(props => props.scale)});
  //transition: none;
  transition-timing-function: unset;
  z-index: ${(props => props.zIndex)};
`;

const WrapperGroup = styled(Element)`
  position: absolute;
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  transform: translate3d(${(props => props.xoffset)}vw, ${(props => props.pageoffset)}vh, ${(props => props.zoffset)}vw) ${(props => props.rotatey)};
  transition: transform 1000ms cubic-bezier(0.6, -0.600, 0.50, 1.50);
  transition-timing-function: cubic-bezier(0.6, -0.600, 0.50, 1.50);
`;

export class CSSParallaxLayer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      zoffset: -Math.floor(-this.props.speed * 1 * perspective),
      scale: (perspective + (-Math.floor(this.props.speed * 1 * perspective))) / perspective,
    }
  }
  render() {
    return (
        <WrapperLayer
          zoffset={this.state.zoffset}
          scale={this.state.scale}
          className={this.props.className}
          zIndex={this.props.zIndex}
          >
            {this.props.children}
        </WrapperLayer>
    )
  }
}

CSSParallaxLayer.propTypes = {
  scale: PropTypes.number,
  speed: PropTypes.number,
  children:PropTypes.node,
  className: PropTypes.string,
  zIndex: PropTypes.number,
  name: PropTypes.string,
};

CSSParallaxLayer.defaultProps = {
  speed: 0,
  scale: 1,
  zIndex: 0,
  className: 'parallax-layer',
};

export class CSSParallaxGroup extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      zoffset: -Math.floor(-this.props.speed * 1 * perspective),
      scale: (perspective + (-Math.floor(this.props.speed * 1 * perspective))) / perspective,
    }
  }
  render() {
    return (
      <WrapperGroup
        name={this.props.name}
        xoffset={this.props.debugOn ? (-6 + (this.props.xoffset)) : this.props.xoffset}
        zoffset={this.props.debugOn ? (-2 + (this.props.xoffset * 0.0875)) : 0}
        rotatey={this.props.debugOn ? ('rotateY(' + (-0.05 * perspective) + 'deg)'): ''}
        pageoffset={(this.props.yoffset * 100 / this.state.scale) * this.state.scale}
        className={this.props.className}
        >
            {React.Children.map(this.props.children, child => {
                return React.cloneElement(child, {
                  zoffset: this.state.yoffset,
                })}
            )}
      </WrapperGroup>
    )
  }
}

CSSParallaxGroup.propTypes = {
  speed: PropTypes.number,
  xoffset: PropTypes.number,
  yoffset: PropTypes.number,
  children: PropTypes.node,
  debugOn: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string,
};

CSSParallaxGroup.defaultProps = {
  speed: 0,
  xoffset: 0,
  yoffset: 0,
  debugOn: false,
  className: 'parallax-group',
};

export class CSSParallax extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Wrapper id={this.props.id} pages={this.props.pages} className={this.props.className}>
        {this.props.children}
      </Wrapper>
    )
  }
}

CSSParallax.propTypes = {
  pages: PropTypes.number,
  id: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

CSSParallax.defaultProps = {
  pages: 1,
  className: 'parallax',
};
