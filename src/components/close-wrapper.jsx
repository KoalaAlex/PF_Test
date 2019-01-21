import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import { css } from '@emotion/core'

// components
import { SVG } from './svg-utils'

// animations
import { hopAnimClose } from '../styles/animations';

const Wrapper = styled.div`
  ${({ isVisible }) => isVisible ? css`
      display: grid;
    ` : css`
      display: none;
    `
  }
  pointer-events: auto;
  position: absolute;
  align-items: center;
  justify-items: center;
  position: absolute;
  top: 10%;
  height: 80%;
  left: 0;
  width: 1.5rem;
  background-color: rgba(255, 255, 255, .05);
  @supports ((-webkit-backdrop-filter: blur(1em)) or (backdrop-filter: blur(1em))) {
        backdrop-filter: blur(1em);
  }
  border-radius: _size(border-radius);
  @media (min-width: 600px) {
    width: 3rem;
  }
  @media (min-width: 900px) {
    width: 5rem;
  }
  cursor: pointer;
  text-indent: 4rem;
  overflow: hidden;
  white-space: nowrap;

  svg {
    animation: hopAnimClose 4s ease-in-out infinite alternate;
    transform: translate3d(0,0,0) rotateZ(-90deg);
    will-change: transform;
  }

  &:hover {
    background-color: _palette(border-bg);
    svg {
      animation: hopAnimClose 1s ease-in-out infinite alternate;
    }
  }

  &:active {
    background-color: _palette(border-bg-alt);
  }
`;

const CloseWrapper = React.memo((props) => {
  return (
  <Wrapper
    isVisible={props.isArticleVisible}
    onClick={() => {props.onClick(props.isArticleVisible)}}>
    <SVG
      icon="triangle"
      width={'8'}
      fill="#ff006f"
      useSelfAlign={true}/>
  </Wrapper>
  );
});

export default CloseWrapper;

CloseWrapper.propTypes = {
  isArticleVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}
