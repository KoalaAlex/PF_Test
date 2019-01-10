import styled from '@emotion/styled'

import { CSSParallax, CSSParallaxGroup, CSSParallaxLayer } from '../../components/CSSParallax';

export const ContentLayer = styled(CSSParallaxLayer)`
  ${tw('justify-center items-center')};
  justify-items: center;
  display: grid;
  align-items_ center;
`;

export const BeforeGridLayer = styled(CSSParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24')};
`;

export const NoClickLayerSVG = styled(CSSParallaxLayer)`
  pointer-events: none;
  backface-visibility: none;
`;

export const LastNoClickLayerSVG = styled(NoClickLayerSVG)`
  overflow: hidden;
`;

export const AnimationParallaxLayer = styled(CSSParallaxLayer)`
  fill: ${props => props.fill};
  pointer-events: none;
  backface-visibility: none;
`;

export const AvatarBackgroundLayer = styled(CSSParallaxLayer)`
  display: grid;
  align-items: center;
`;

export const AvatarStartBackgroundLayer = styled(AvatarBackgroundLayer)`
  align-items: top;
`;

export const ProjectParallaxLayer = styled(CSSParallaxLayer)`
  padding-left: 3rem;
  padding-right: 3rem;
  justify-items: center;
  align-items: center;
  display: grid;
`;

export const Content = styled(CSSParallaxGroup)`
  position: absolute;
`;
