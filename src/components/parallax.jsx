import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'

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
  transform: translate3d(0, ${(props => props.yoffset)}vh, ${(props => props.zoffset)}px) scale(${(props => props.scale)});
  transition-timing-function: unset;
  z-index: ${(props => props.zIndex)};
`;

const WrapperGroup = styled(Element)`
  position: absolute;
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  transform: translate3d(${(props => props.xoffset)}vw, ${(props => props.pageoffset)}vh, ${(props => props.zoffset)}vw) ${(props => props.yrotate)};
  transition: transform 1000ms ease;
`;

export class ParallaxLayer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      zoffset: -Math.floor(-this.props.speed * 1 * perspective),
      isEdge: false,
      scale: (perspective + (-Math.floor(this.props.speed * 1 * perspective))) / perspective,
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    switch(this.props.browserName){
      case 'edge':
      this.setState({isEdge: true});
        break;
      case '':
        break;
      default:
        break;
    }
  }

  render() {
    return (
        <WrapperLayer
          zoffset={!this.state.isEdge ? this.state.zoffset : 0}
          scale={!this.state.isEdge ? this.state.scale : 1}
          className={this.props.className}
          yoffset={this.props.yOffset * 100}
          zIndex={this.props.zIndex}
          >
            {this.props.children}
        </WrapperLayer>
    )
  }
}

ParallaxLayer.propTypes = {
  scale: PropTypes.number,
  speed: PropTypes.number,
  children:PropTypes.node,
  className: PropTypes.string,
  yOffset: PropTypes.number,
  zIndex: PropTypes.number,
  name: PropTypes.string,
  browserName: PropTypes.string
};

ParallaxLayer.defaultProps = {
  speed: 0,
  scale: 1,
  yOffset: 0,
  zIndex: 0,
  className: 'parallax-layer',
  browserName: ''
};

const rotateValue = 'rotateY(' + (-0.05 * perspective) + 'deg)'

export class ParallaxGroup extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      scale: (perspective + (-Math.floor(this.props.speed * 1 * perspective))) / perspective
    }
  }
  render() {
    return (
      <WrapperGroup
        name={this.props.name}
        xoffset={this.props.easterEggOn ? (-6 + (this.props.xoffset)) : this.props.xoffset}
        zoffset={this.props.easterEggOn ? (-2 + (this.props.xoffset * 0.0875)) : 0}
        yrotate={this.props.easterEggOn ? rotateValue : ''}
        pageoffset={(this.props.yoffset * 100 / this.state.scale) * this.state.scale}
        className={this.props.className}
        >
        {this.props.children}
      </WrapperGroup>
    )
  }
}

ParallaxGroup.propTypes = {
  speed: PropTypes.number,
  xoffset: PropTypes.number,
  yoffset: PropTypes.number,
  children: PropTypes.node,
  easterEggOn: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string,
};

ParallaxGroup.defaultProps = {
  speed: 0,
  xoffset: 0,
  yoffset: 0,
  easterEggOn: false,
  className: 'parallax-group',
};

export const Parallax = React.memo((props) => {
  return (
    <Wrapper id={props.id} pages={props.pages} className={props.className}>
      {props.children}
    </Wrapper>
  )
});

Parallax.propTypes = {
  pages: PropTypes.number,
  id: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

Parallax.defaultProps = {
  pages: 1,
  className: 'parallax',
};
