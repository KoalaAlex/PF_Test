/* global tw */
import styled from '@emotion/styled'
import { keyframes, css } from '@emotion/core';

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

export const boxShadowAnim = keyframes`
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
`;

export const hopAnimDown = keyframes`
	0%, 100% {
		transform: translate3d(0,0,0) rotateZ(-180deg);
	}
	50%{
		transform: translate3d(0,1vh,0) rotateZ(-180deg);
	}
}
`;

export const hopAnimClose = keyframes`
  0%, 100% {
    transform: translate3d(0,0,0) rotateZ(-90deg);
  }
  50%{
    transform: translate3d(-1rem,0,0) rotateZ(-90deg);
  }
`;

export const opacityAnim = keyframes`
	from {
    opacity: 1;
    display: block
  }
  to {
		opacity: 0;
    display: none;
	}
`;

export const rotateAnim = keyframes`
	0% {
    transform:  scale(1.1) rotateZ(0deg);
  }
  50% {
    transform:  scale(1.1) rotateZ(10deg);
  }
	100%{
    transform:  scale(1.1) rotateZ(0deg);
  }
`;

export const grayScaleAnim = keyframes`
	from {
    filter: grayscale(100%); transform: scale(1);
  }
  to {
    filter: grayscale(0%); transform: scale(1.1);
  }
`;

export const changeOpacity = keyframes`
	0% {
		opacity:0.3;
	}
	100% {
		opacity: 1.0;
	}
}
`;

export const changeOpacityMonitor = keyframes`
	0% {
		opacity:1.0;
	}
	100% {
		opacity: 0.3;
	}
}
`;

export const loading = keyframes`
  0% {
    background-position: -200vw 0
  }
  100% {
    background-position: 200vw 0
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
