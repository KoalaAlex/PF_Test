/* global tw */
import styled, { keyframes, css } from 'react-emotion';

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const wave = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  33% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  66% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`;

const upDownAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`;

const upDownWideAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(200px);
  }
`;

const rotateAndBack = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(10deg);
  }
`;

const blurAnim = keyframes`
  from {
    filter: blur(4px);
  }
  to {
    filter: blur(24px);
  }
`;

const blurAnimBig = keyframes`
  from {
    filter: blur(4px);
  }
  to {
    filter: blur(46px);
  }
`;

export const boxShadowAnim = keyframes`
  /*
  from {
    box-shadow: 0px 0px 1rem #7f00ff;
  }
  to {
    box-shadow: 0px 0px 4rem #7f00ff;
  }
  */
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
`;

export const UpDown = styled.div`
  animation: ${upDownAnimation} 4s ease-in-out infinite alternate;
  will-change: transform;
  ${tw('absolute w-full h-full')};
`;

export const UpDownWide = styled.div`
  animation: ${upDownWideAnimation} 18s ease-in-out infinite alternate;
  will-change: transform;
  ${tw('absolute w-full h-full')};
`;

export const waveAnimation = css`
  animation: ${wave} 20s linear infinite alternate;
  will-change: d;
`;
