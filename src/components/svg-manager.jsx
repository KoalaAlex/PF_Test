import React from 'react';
import styled from '@emotion/styled'

// Import Components
import { SVG, SVGOriginal }from '../components/svg-utils';
import { colors } from '../../tailwind';
import { hiddenLG, hiddenXL } from '../styles/utils';
import { UpDown, UpDownWide, changeOpacity, changeOpacityMonitor} from '../styles/animations';

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

const TriangleBlur = styled(SVG)`
  position: absolute;
	//animation: myBlur 3s ease-in-out infinite alternate;
	animation: changeOpacity 2s ease-in-out infinite alternate;
  will-change: opacity;
	-webkit-filter: blur(46px);
  filter: blur(46px);
`;

const IMacBlur = styled(SVG)`
  pposition: absolute;
	animation: changeOpacityMonitor 3s ease-in-out infinite alternate;
	will-change: opacity;
	//animation: myBlur 3s ease-in-out infinite alternate;
	-webkit-filter: blur(24px);
	filter: blur(24px);
`;

// all components do not rerender at all, because of React.memo + second parameter always true

export const SVGOriginals = React.memo((props) => {
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
  )
}, () => { return true });

export const SVGPageOne = React.memo((props) => {
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
        <IMacBlur icon="imac" className={hiddenLG} width={'78'} fill="#00dcff" left="15" top="15" />
      </UpDownWide>
      <UpDown>
        <SVG icon="pokeball" className={hiddenLG} width={'12'} fill={colors['grey-darkest']} left="90" top="55" />
        <SVG icon="triangle" scaleFromTop={true} width={'100v'} stroke="#ff006f" left="60" top="10" />
        <TriangleBlur icon="triangle" scaleFromTop={true} width={'100v'} stroke="#ff0057" left="60" top="10" />
      </UpDown>
    </SVGAbsolute>
  )
}, () => { return true });

export const SVGPageTwo = React.memo((props) => {
    return (
      <SVGAbsolute>
        <SVG icon="easteregg" width={'24'} fill="#ff0057" left="90" top="80" />
        <SVG icon="cube" width={'12'} fill="#ff0057" left="10" top="20" />
      </SVGAbsolute>
    )
}, () => { return true });

export const SVGPageThree = React.memo((props) => {
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
  )
}, () => { return true });

export const SVGPageFour = React.memo((props) => {
    return (
      <SVGAbsolute>
        <SVG icon="flask" width={'48'} fill="#ff0057" left="15" top="25" />
      </SVGAbsolute>
    )
}, () => { return true });

export const SVGPageFive = React.memo((props) => {
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
  )
}, () => { return true });

export const SVGPageSix = React.memo((props) => {
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
  )
}, () => { return true });
