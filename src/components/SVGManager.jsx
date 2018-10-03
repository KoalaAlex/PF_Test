import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

// Import Components
import { Parallax, ParallaxLayer } from 'react-spring';
import SVG from '../components/SVG';
import { colors } from '../../tailwind';
import { hidden } from '../styles/utils';
import { UpDown, UpDownWide, circleBlur } from '../styles/animations';

const Divider = styled(ParallaxLayer)`
  ${tw('absolute w-full h-full')};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

export const SVGTop = () => {
  return (
    <Divider speed={0.2} offset={0}>
      <UpDown>
        <SVG icon="triangle" className={hidden} width={48} stroke={colors.orange} left="10%" top="20%" />
        <SVG icon="imac" width={48} fill={colors.red} left="60%" top="70%" />
        <SVG icon="badge" width={6} fill={colors['grey-darker']} left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" className={hidden} width={16} fill={colors['blue-dark']} left="80%" top="10%" />
        <SVG icon="triangle" width={12} stroke={colors.white} left="90%" top="50%" />
        <SVG icon="circle" width={16} fill={colors['grey-darker']} left="70%" top="90%" />
        <SVG icon="triangle" width={16} stroke={colors['grey-darkest']} left="30%" top="65%" />
        <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="75%" top="10%" />
        <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="ps4" className={hidden} width={24} fill={colors['grey-darker']} left="5%" top="70%" />
      <SVG icon="circle" className={circleBlur} width={12} fill={colors['grey-darkest']} left="4%" top="20%" />
      <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="4%" top="20%" />
      <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="50%" top="60%" />
      <SVG icon="upDown" width={8} fill={colors['grey-darkest']} left="95%" top="90%" />
      <SVG icon="upDown" className={hidden} width={24} fill={colors['grey-darker']} left="40%" top="80%" />
      <SVG icon="triangle" width={8} stroke={colors['grey-darker']} left="25%" top="5%" />
      <SVG icon="circle" width={64} fill={colors.green} left="95%" top="5%" />
      <SVG icon="circle" className={circleBlur} width={64} fill={colors.green} left="95%" top="5%" />
      <SVG icon="box" className={hidden} width={64} fill={colors.purple} left="5%" top="90%" />
      <SVG icon="box" width={6} fill={colors['grey-darkest']} left="10%" top="10%" />
      <SVG icon="imac" width={12} fill={colors['grey-darkest']} left="40%" top="30%" />
      <SVG icon="hexa" width={16} stroke={colors['grey-darker']} left="10%" top="50%" />
      <SVG icon="hexa" width={8} stroke={colors['grey-darker']} left="80%" top="70%" />
    </Divider>
  );
};

export const SVGMiddle = () => {
  return (
    <React.Fragment>
      <Divider speed={0.1} offset={1}>
        <UpDown>
          <SVG icon="box" width={6} fill={colors.white} left="85%" top="75%" />
          <SVG icon="upDown" width={8} fill={colors.teal} left="70%" top="20%" />
          <SVG icon="triangle" width={8} stroke={colors.orange} left="25%" top="5%" />
          <SVG icon="circle" className={hidden} width={24} fill={colors.white} left="17%" top="60%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill={colors.green} left="20%" top="90%" />
          <SVG icon="triangle" width={12} stroke={colors.white} left="90%" top="30%" />
          <SVG icon="smartphone" width={16} fill={colors.yellow} left="70%" top="90%" />
          <SVG icon="triangle" className={hidden} width={16} stroke={colors.teal} left="18%" top="75%" />
          <SVG icon="circle" width={6} fill={colors.white} left="75%" top="10%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors.green} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors.pink} left="80%" top="60%" />
        <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors.yellow} left="29%" top="26%" />
        <SVG icon="hexa" width={16} stroke={colors.red} left="75%" top="30%" />
        <SVG icon="hexa" width={8} stroke={colors.yellow} left="80%" top="70%" />
      </Divider>
      <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={2} />
      <Divider speed={0.1} offset={2}>
        <UpDown>
          <SVG icon="box" className={hidden} width={6} fill={colors.blue} left="50%" top="75%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
          <SVG icon="triangle" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
          <SVG icon="upDown" className={hidden} width={24} fill={colors.orange} left="80%" top="80%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill={colors.purple} left="5%" top="80%" />
          <SVG icon="triangle" width={12} stroke={colors.white} left="95%" top="50%" />
          <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
        <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
        <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
      </Divider>
    </React.Fragment>
  );
};

export const SVGDown = () => {
  return (
    <Divider speed={0.1} offset={3}>
      <UpDown>
        <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
        <SVG icon="triangle" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="triangle" width={12} stroke={colors.white} left="95%" top="50%" />
        <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
        <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
      <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
      <SVG icon="imac" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
      <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
    </Divider>
  );
};
