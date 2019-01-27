import React, { useState, useEffect } from 'react';
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

function mulWihPerspAndCalc(speed){
  return Math.floor(speed * 1 * perspective)
}

function calcScale(speed){
  return ((perspective - mulWihPerspAndCalc(speed)) / perspective)
}

// declare custom Hook
function useScale(speed){
  const [scale, setScale] = useState(calcScale(speed));
  useEffect(() => {
     setScale(calcScale(speed))
   }, [speed]
  );
  return scale;
}

// declare custom Hook
function useZOffset(speed){
  const [zoffset, setZoffset] = useState(mulWihPerspAndCalc(speed));
  useEffect(() => {
    setZoffset(mulWihPerspAndCalc(speed));
   }, [speed]
  );
  return zoffset;
}

// declare custom Hook
function useIsEdge(browserName){
  const [isEdge, setIsEdge] = useState(false);
  useEffect(() => {
    switch(browserName){
      case 'edge':
        setIsEdge(true);
        break;
      case '':
        break;
      default:
        break;
    }
   }, [browserName]
  );
  return isEdge;
}

export const ParallaxLayer = React.memo((props) => {
  // use custom Hooks
  const scale = useScale(props.speed);
  const zoffset = useZOffset(props.speed);
  const isEdge = useIsEdge(props.browserName);

  return (
    <WrapperLayer
      zoffset={!isEdge ? zoffset : 0}
      scale={!isEdge ? scale : 1}
      className={props.className}
      yoffset={props.yOffset * 100}
      zIndex={props.zIndex}
    >
      {props.children}
    </WrapperLayer>
  )
});

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

export const ParallaxGroup = React.memo((props) => {
  // use custom Hook
  const scale = useScale(props.speed);
  return (
    <WrapperGroup
      name={props.name}
      xoffset={props.easterEggOn ? (-6 + (props.xoffset)) : props.xoffset}
      zoffset={props.easterEggOn ? (-2 + (props.xoffset * 0.0875)) : 0}
      yrotate={props.easterEggOn ? rotateValue : ''}
      pageoffset={(props.yoffset * 100 / scale) * scale}
      className={props.className}
      >
      {props.children}
    </WrapperGroup>
  )
});

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
