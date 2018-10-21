import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

// Import Components
import { SVG, SVGOriginal }from '../components/SVG';
import { colors } from '../../tailwind';
import { hiddenMD, hiddenLG, hiddenXL } from '../styles/utils';
import { UpDown, UpDownWide} from '../styles/animations';

import '../assets/scss/components/blurAnim.scss';

const SVGAbsolute = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: visible;
  svg {
    position: absolute;
  }
`;

const SVGAbsoluteOriginal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: visible;
  display: none;
  svg {
    position: absolute;
  }
`;

//export const SVGPageZero = () => {
export class SVGOriginals extends React.PureComponent {
  render(){
    return (
      <SVGAbsoluteOriginal>
        <SVGOriginal icon="imac"/>
        <SVGOriginal icon="pin"/>
        <SVGOriginal icon="circle"/>
        <SVGOriginal icon="cube"/>
        <SVGOriginal icon="ps4"/>
        <SVGOriginal icon="pokeball"/>
        <SVGOriginal icon="cloud"/>
        <SVGOriginal icon="usb"/>
        <SVGOriginal icon="blub"/>
        <SVGOriginal icon="flash"/>
        <SVGOriginal icon="usbSimple"/>
        <SVGOriginal icon="flask"/>
        <SVGOriginal icon="triangle"/>
        <SVGOriginal icon="easteregg"/>
        <SVGOriginal icon="blockchain"/>
      </SVGAbsoluteOriginal>
    );
  }
};

//export const SVGPageZero = () => {
export class SVGPageOne extends React.PureComponent {
  render(){
    return (
      <SVGAbsolute>
        <SVG icon="triangle" width={'8'} stroke={colors['grey-darker']} left="30" top="8" />
        <SVG icon="triangle" className={hiddenLG} width={'16'} stroke={colors['grey-darkest']} left="30" top="65" />
        <SVG icon="imac" className={hiddenLG} width={'24'} fill={colors['grey-darkest']} left="45" top="26" />
        <SVG icon="cube" width={'12'} fill={colors['grey-darkest']} left="6" top="30" />
        <SVG icon="ps4" className={hiddenLG} width={'24'} fill={colors['grey-darker']} left="15" top="70" />
        <SVG icon="cloud" width={'24'} fill={colors['grey-darker']} left="55" top="70" />
        <SVG icon="usb" width={'78'} fill={colors['green-light']} left="95" top="20" />
        <SVG icon="flask" width={'24'} fill={colors['grey-darker']} left="10" top="50" />
        <SVG icon="usbSimple" className={hiddenLG} width={'16'} fill={colors['grey-darker']} left="80" top="50" />
        <UpDownWide>
          <SVG icon="imac" className={hiddenLG} width={'78'} fill="#00dcff" left="15" top="15" />
          <SVG icon="cube" className={hiddenXL} width={'24'} fill='#7000ff' left="80" top="10" />
          <SVG icon="circle" width={'16'} fill={colors['grey-darker']} left="70" top="36" />
          <SVG icon="pin" className={hiddenLG} width={'8'} fill={colors['grey-darkest']} left="60" top="5" />
          <SVG icon="imac" id="imac-blur"className={hiddenLG} width={'78'} fill="#00dcff" left="15" top="15" />
        </UpDownWide>
        <UpDown>
          <SVG icon="pokeball" className={hiddenLG} width={'12'} fill={colors['grey-darkest']} left="90" top="55" />
          <SVG icon="triangle" scaleFromTop={true} width={'100v'} stroke="#ff006f" left="60" top="10" />
          <SVG icon="triangle" scaleFromTop={true} id="tiangle-blur" width={'100v'} stroke="#ff0057" left="60" top="10" />
        </UpDown>
      </SVGAbsolute>
    );
  }
};

export class SVGPageTwo extends React.PureComponent {
  render(){
    return (
      <SVGAbsolute>
        {/*
        <UpDown>
          <SVG icon="usbSimple" className={hiddenLG} width={'8'} fill={colors['grey-darkest']} left="70" top="20" />
          <SVG icon="imac" className={hiddenLG} width={'24'} fill={colors['green-light']} left="80" top="80" />
        </UpDown>
        <UpDownWide>
          <SVG icon="flash"  width={'24'} fill="#7000ff" left="15" top="80" />
          <SVG icon="triangle" width={'12'} stroke={colors.white} left="95" top="50" />
          <SVG icon="cube" width={'24'} fill={colors.white} left="85" top="15" />
          <SVG icon="blub" className={hiddenLG} width={'16'} fill={colors['grey-darkest']} left="45" top="30" />
        </UpDownWide>
        <SVG icon="pin" width={'32'} fill={colors['grey-darkest']} left="58" top="32" />
        <SVG icon="usb" width={'32'} fill={colors['grey-darkest']} left="18" top="20" />
        <SVG icon="circle" width={'12'} fill={colors['grey-darkest']} left="70" top="60" />
        <SVG icon="cube" width={'12'} fill="#ff0057" left="10" top="20" />
        <SVG icon="flask" width={'48'} fill={colors['grey-darkest']} left="40" top="70" />
        <SVG icon="flask" width={'48'} fill={colors['grey-darkest']} left="80" top="80" />
        */}
        <SVG icon="easteregg" width={'24'} fill="#ff0057" left="90" top="80" />
        <SVG icon="cube" width={'12'} fill="#ff0057" left="10" top="20" />
      </SVGAbsolute>
    );
  }
};

//export const SVGMiddle = () => {
export class SVGPageThree extends React.PureComponent {
  render(){
    return (
      <SVGAbsolute>
        <UpDown>
          <SVG icon="cloud" width={'24'} fill={colors['grey-darker']} left="85" top="5" />
          <SVG icon="blub" width={'24'} fill="#ff0057" left="17" top="60" />
        </UpDown>
        <UpDownWide>
          <SVG icon="imac" width={'24'} fill={colors['grey-dark']} left="6" top="50" />
          <SVG icon="ps4" width={'48'} fill={colors['green-light']} left="35" top="10" />
          <SVG icon="cube" width={'12'} fill={colors['grey-darker']} left="64" top="75" />
        </UpDownWide>
        <SVG icon="usbSimple" className={hiddenLG} width={'24'} fill="#00dcff" left="48" top="55" />
        <SVG icon="blub" width={'12'} fill={colors['grey-dark']} left="80" top="60" />
        <SVG icon="pokeball" width={'12'} fill={colors['grey-darker']} left="30" top="50" />
        <SVG icon="flask" className={hiddenLG} width={'96'} fill="#7000ff" left="70" top="15" />
      </SVGAbsolute>
    );
  }
};

export class SVGPageFour extends React.PureComponent {
  render(){
    return (
      <SVGAbsolute>
        {/*
        <UpDown>
          <SVG icon="pokeball" className={hiddenLG} width={'8'} fill={colors['grey-darkest']} left="70" top="20" />
          <SVG icon="pin" width={'32'} fill={colors['grey-darkest']} left="58" top="32" />
        </UpDown>
        <UpDownWide>
          <SVG icon="blub"  width={'24'} fill={colors['grey-darkest']} left="15" top="60" />
          <SVG icon="usbSimple" width={'12'} fill={colors.white} left="95" top="50" />
          <SVG icon="cube" width={'24'} fill={colors.white} left="85" top="15" />
          <SVG icon="blub" className={hiddenLG} width={'16'} fill={colors['grey-darkest']} left="45" top="30" />
        </UpDownWide>
        <SVG icon="imac" width={'32'} fill={colors['grey-darkest']} left="75" top="75" />
        <SVG icon="circle" width={'12'} fill={colors['grey-darkest']} left="70" top="60" />
        <SVG icon="flask" width={'96'} fill="#ff0057" left="20" top="25" />
        <SVG icon="flask" width={'48'} fill={colors['grey-darkest']} left="40" top="70" />
        */}
        <SVG icon="flask" width={'48'} fill="#ff0057" left="15" top="25" />
      </SVGAbsolute>
    );
  }
};

//export const SVGDown = () => {
export class SVGPageFive extends React.PureComponent {
  render(){
    return (
      <SVGAbsolute>
        <UpDown>
          <SVG icon="flash" className={hiddenLG} width={'8'} fill={colors['grey-darkest']} left="70" top="20" />
          <SVG icon="triangle" width={'8'} stroke={colors['grey-darkest']} left="25" top="5" />
        </UpDown>
        <UpDownWide>
          <SVG icon="usbSimple" width={'12'} fill={colors.white} left="85" top="15" />
          <SVG icon="cloud" className={hiddenLG} width={'16'} fill={colors['grey-darkest']} left="45" top="10" />
        </UpDownWide>
        <SVG icon="pin" width={'24'} fill={colors.white} left="4" top="20" />
        <SVG icon="cube" width={'12'} fill={colors['grey-darkest']} left="60" top="60" />
        <SVG icon="imac" className={hiddenLG} width={'24'} fill={colors['grey-darkest']} left="20" top="30" />
        <SVG icon="blub" width={'8'} fill={colors['grey-darkest']} left="20" top="60" />
      </SVGAbsolute>
    );
  }
};

export class SVGPageSix extends React.PureComponent {
  render(){
    return (
      <SVGAbsolute>
        <UpDown>
          <SVG icon="flash" className={hiddenLG} width={'8'} fill={colors['grey-darkest']} left="70" top="20" />
          <SVG icon="triangle" width={'8'} stroke={colors['grey-darkest']} left="25" top="5" />
        </UpDown>
        <UpDownWide>
          <SVG icon="usbSimple" width={'12'} fill={colors.white} left="85" top="15" />
          <SVG icon="cloud" className={hiddenLG} width={'16'} fill={colors['grey-darkest']} left="45" top="10" />
        </UpDownWide>
        <SVG icon="pin" width={'24'} fill={colors.white} left="4" top="20" />
        <SVG icon="cube" width={'12'} fill={colors['grey-darkest']} left="60" top="60" />
        <SVG icon="imac" className={hiddenLG} width={'24'} fill={colors['grey-darkest']} left="20" top="30" />
        <SVG icon="easteregg" width={'24'} fill={colors['grey-darkest']} left="90" top="80" />
        <SVG icon="blockchain" width={'24'} fill={colors['grey-darkest']} left="10" top="60" />
      </SVGAbsolute>
    );
  }
};
