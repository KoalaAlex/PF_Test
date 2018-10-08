import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import '../assets/scss/components/CSSSlider.scss';

const Wrapper = styled.div`
  perspective: 1px;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  transform-style: preserve-3d;
`;

export default class CSSSlider extends React.PureComponent {
  render() {
    return (
      <div className="sliderWrapper">
        <div className="slider">
            <input type="radio" name="slider" className="control01" id="slide01" defaultChecked={true} />
            <input type="radio" name="slider" className="control01" id="slide02" />
            <input type="radio" name="slider" className="control01" id="slide03" />
            <input type="radio" name="slider" className="control01" id="slide04" />
            <input type="radio" name="slider" className="control02" id="slide101" />
            <input type="radio" name="slider" className="control02" id="slide102" />
            <input type="radio" name="slider" className="control02" id="slide103" />
            <input type="radio" name="slider" className="control02" id="slide104" />
            <ul className="slideList">
                <li className="slide slide01">
                    <img src={this.props.images[0]} alt="" width="600" height="400" />
                    <p>Kegelschnitte</p>
                </li>
                <li className="slide slide02">
                    <img src={this.props.images[1]} alt="Maßaufgaben" width="600" height="400" />
                    <p>Maßaufgaben</p>
                </li>
                <li className="slide slide03">
                    <img src={this.props.images[2]} alt="Würfelkomposition" width="600" height="400" />
                    <p>Würfelkomposition</p>
                </li>
                <li className="slide slide04">
                    <img src={this.props.images[3]} alt="Schnitt Zylinder - Hyperboloid" width="600" height="400" />
                    <p>Schnittkurve von Zylinder und Hyperboloid</p>
                </li>
            </ul>
            <ul className="slideControl slideControl01">
                <li><label htmlFor="slide01">Nummer 1</label></li>
                <li><label htmlFor="slide02">Nummer 2</label></li>
                <li><label htmlFor="slide03">Nummer 3</label></li>
                <li><label htmlFor="slide04">Nummer 4</label></li>
            </ul>
            <ul className="slideControl slideControl02">
                <li><label htmlFor="slide101">Nummer 101</label></li>
                <li><label htmlFor="slide102">Nummer 102</label></li>
                <li><label htmlFor="slide103">Nummer 103</label></li>
                <li><label htmlFor="slide104">Nummer 104</label></li>
            </ul>
        </div>
    </div>
    )
  }
}

CSSSlider.propTypes = {
  images: PropTypes.array.isRequired,
};

CSSSlider.defaultProps = {
  images: [],
};
