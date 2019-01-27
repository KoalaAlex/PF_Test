import styled from '@emotion/styled'

import { Parallax, ParallaxGroup, ParallaxLayer } from '../../components/parallax';

export const ContentLayer = styled(ParallaxLayer)`
  ${tw('justify-center items-center')};
  justify-items: center;
  display: grid;
  align-items_ center;
`;

export const BeforeGridLayer = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24')};
`;

export const NoClickLayerSVG = styled(ParallaxLayer)`
  pointer-events: none;
  backface-visibility: none;
`;

export const LastNoClickLayerSVG = styled(NoClickLayerSVG)`
  overflow: hidden;
`;

export const AnimationParallaxLayer = styled(ParallaxLayer)`
  fill: ${props => props.fill};
  pointer-events: none;
  backface-visibility: none;
`;

export const AvatarBackgroundLayer = styled(ParallaxLayer)`
  display: grid;
  align-items: center;
`;

export const AvatarStartBackgroundLayer = styled(AvatarBackgroundLayer)`
  align-items: top;
`;

export const ProjectParallaxLayer = styled(ParallaxLayer)`
  padding-left: 3rem;
  padding-right: 3rem;
  justify-items: center;
  align-items: center;
  display: grid;
`;

export const Content = styled(ParallaxGroup)`
  position: absolute;
`;
