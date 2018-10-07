import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

// Import Components
import SVG from '../components/SVG';
import { colors } from '../../tailwind';
import { hidden } from '../styles/utils';
import { UpDown, UpDownWide, blurNormal, blurBig } from '../styles/animations';

import '../assets/scss/components/blurAnim.scss';

//export const SVGPageZero = () => {
export class SVGPageOne extends React.PureComponent {
  render(){
    return (
      <React.Fragment>
        <SVG icon="triangle" width={8} stroke={colors['grey-darker']} left="25%" top="5%" />
        <SVG icon="imac" width={24} fill={colors['grey-darkest']} left="40%" top="30%" />
        <SVG icon="badge" width={6} fill={colors['grey-darker']} left="60%" top="15%" />
        <UpDown>
          <SVG icon="triangle" width={60} duplicate={true} stroke="#ff006f" left="10%" top="20%" />
          <SVG icon="triangle" id="tiangle-blur" duplicate={true} className={blurBig} width={60} stroke="#ff0057" left="10%" top="20%" />
          <SVG icon="imac"  duplicate={true} className={hidden} width={78} fill="#00dcff" left="5%" top="15%" />
          <SVG icon="imac" id="imac-blur" duplicate={true} className={hidden + " " + blurBig} width={78} fill="#00dcff" left="5%" top="15%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="cube" className={hidden} width={24} fill={colors['blue-dark']} left="80%" top="10%" />
          <SVG icon="star" width={12} fill={colors.white} left="90%" top="50%" />
          <SVG icon="circle" width={16} fill={colors['grey-darker']} left="70%" top="90%" />
          <SVG icon="pin" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
          <SVG icon="triangle" duplicate={true} width={16} stroke={colors['grey-darkest']} left="30%" top="65%" />
          <SVG icon="circle" duplicate={true} width={6} fill={colors['grey-darkest']} left="75%" top="10%" />
        </UpDownWide>
        <SVG icon="ps4" className={hidden} width={24} fill={colors['grey-darker']} left="5%" top="70%" />
        <SVG icon="network" width={12} fill={colors['grey-darkest']} left="4%" top="20%" />
        <SVG icon="circle" duplicate={true} width={12} fill={colors['grey-darkest']} left="50%" top="60%" />
        <SVG icon="upDown" width={8} fill={colors['grey-darkest']} left="95%" top="90%" />
        <SVG icon="pencilcase" className={hidden} width={24} fill={colors['grey-darker']} left="40%" top="80%" />
        <SVG icon="triangle" duplicate={true} width={8} stroke={colors['grey-darker']} left="25%" top="5%" />
        <SVG icon="usb" width={78} fill={colors['green-light']} left="90%" top="5%" />
        {/* <SVG icon="usb" id="usb-blur" duplicate={true} className={blurBig} width={78} fill={colors['green-light']} left="90%" top="5%" /> */}
        <SVG icon="puzzle" className={hidden} width={64} fill={colors.purple} left="5%" top="90%" />
        <SVG icon="box" width={6} fill={colors['grey-darkest']} left="10%" top="10%" />
        <SVG icon="imac" duplicate={true} width={24} fill={colors['grey-darkest']} left="40%" top="30%" />
        <SVG icon="cloud" width={16} fill={colors['grey-darker']} left="10%" top="50%" />
        <SVG icon="cloud" duplicate={true} width={8} fill={colors['grey-darker']} left="80%" top="70%" />
      </React.Fragment>
    );
  }
};

//export const SVGMiddle = () => {
export class SVGPageTwo extends React.PureComponent {
  render(){
    return (
      <React.Fragment>
        <UpDown>
          <SVG icon="box" duplicate={true} width={6} fill={colors.white} left="85%" top="75%" />
          <SVG icon="cloud" duplicate={true} width={8} fill={colors.teal} left="80%" top="20%" />
          <SVG icon="blub" className={hidden} width={24} fill="#ff0057" left="17%" top="60%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="pencil" className={hidden} width={16} fill={colors.green} left="64%" top="90%" />
          <SVG icon="triangle" duplicate={true} width={12} stroke={colors.white} left="90%" top="30%" />
          <SVG icon="usbSimple" className={hidden} width={16} fill={colors.teal} left="48%" top="75%" />
          <SVG icon="key" className={hidden} width={8} fill={colors.green} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="circle" duplicate={true} width={12} fill={colors.pink} left="80%" top="60%" />
        <SVG icon="pokeball" width={12} fill={colors['teal-light']} left="10%" top="10%" />
        <SVG icon="flask" width={96} fill="#0037ff" left="60%" top="5%" />
        <SVG icon="flask" duplicate={true} className={blurBig} width={96} fill="#0037ff" left="60%" top="5%" />
      </React.Fragment>
    );
  }
};

export class SVGPageThree extends React.PureComponent {
  render(){
    return (
      <React.Fragment>
        <UpDown>
          <SVG icon="box" duplicate={true} className={hidden} width={6} fill={colors.blue} left="50%" top="75%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
          <SVG icon="upDown" className={hidden} width={24} fill="#ff0057" left="80%" top="80%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill={colors.purple} left="5%" top="80%" />
          <SVG icon="triangle" duplicate={true} width={12} stroke={colors.white} left="95%" top="50%" />
          <SVG icon="circle" duplicate={true} width={6} fill={colors.white} left="85%" top="15%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" duplicate={true} width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="circle" duplicate={true} width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
        <SVG icon="flash" width={12} fill="#ff0057" left="10%" top="10%" />
        <SVG icon="box" duplicate={true} width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
        <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
      </React.Fragment>
    );
  }
};

//export const SVGDown = () => {
export class SVGPageFour extends React.PureComponent {
  render(){
    return (
      <React.Fragment>
                  {/*
        <UpDown>
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
          <SVG icon="triangle" duplicate={true} width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="triangle" duplicate={true} width={12} stroke={colors.white} left="95%" top="50%" />
          <SVG icon="circle" duplicate={true} width={6} fill={colors.white} left="85%" top="15%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" duplicate={true} width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="circle" duplicate={true} width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
        <SVG icon="imac" duplicate={true} width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
        <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
                */}
      </React.Fragment>
    );
  }
};
