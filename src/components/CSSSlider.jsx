import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import '../../node_modules/w3-css/w3.css';

import '../assets/scss/components/CSSSlider.scss';

const Wrapper = styled.div`
  perspective: 1px;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  transform-style: preserve-3d;
`;

const FullWideImgStyle = styled.img`
  width: 100%;
`;

const hideClass = "hideThis";

class FullWideImg extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: false,
    }
    this.setHidden = this.setHidden.bind(this);
  }

  setHidden(value) {
    this.setState({
      isHidden: value
    });
  }

  render() {
    return (
       <FullWideImgStyle className={this.state.isHidden ? hideClass : this.props.className } src={this.props.src}/>
    )
  }
}

FullWideImg.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string
};

FullWideImg.defaultProps = {
  className: "mySlides",
};

class SmallWideImg extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: false,
    }
    this.setHidden = this.setHidden.bind(this);
  }

  setHidden(value) {
    this.setState({
      isHidden: value
    });
  }

  render() {
    return (
       <FullWideImgStyle onClick={() => this.state.click} className={this.state.isHidden ? "" : this.props.className } src={this.props.src}/>
    )
  }
}

SmallWideImg.propTypes = {
  className: PropTypes.string,
  click: PropTypes.func,
  src: PropTypes.string
};

SmallWideImg.defaultProps = {
  className: "w3-opacity-off",
};

export default class CSSSlider extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      slideIndex: 1,
    }
    this._refArray = new Map();
    this._refArrayDots = new Map();
    this.myFirstRef = React.createRef();
    this.showDivs = this.showDivs.bind(this);
    this.currentDiv = this.currentDiv.bind(this);
  }

  currentDiv(n) {
    console.log('Click');
    this.showDivs(
      this.setState({
      slideIndex: n
    }));
  }

  showDivs(n) {
    if (n > this._refArray.length) {
      this.setState({
        slideIndex: 1
      })
    }
    if (n < 1) {
      this.setState({
        slideIndex: this._refArray.length
      })
    }
    console.log(this.myFirstRef);
    console.log(this._refArray.get(0).props.className);
    for (var i = 0; i < this._refArray.size; i++) {
      i === this.state.slideIndex ? this._refArray.get(i).setHidden(false) : this._refArray.get(i).setHidden(true);
    }
    for (i = 0; i < this._refArrayDots.size; i++) {
       i === this.state.slideIndex ? this._refArrayDots.get(i).setHidden(true) : this._refArrayDots.get(i).setHidden(false);
    }
  }

  componentDidMount () {
    this.showDivs(this.state.slideIndex);
  }

  render() {
    return (
      <div className="w3-content">
        {this.props.images.map((value, i) => (
            <FullWideImg key={i} className="mySlides" src={value} ref={c => this._refArray.set(i, c)}/>
        ))}

        <div className="w3-row-padding w3-section" ref={this.myFirstRef}>
          {this.props.images.map((value, i) => (
            <div className="w3-col s4" key={i}>
              <SmallWideImg key={i} className="demo w3-opacity" src={value} click={() => this.currentDiv(i + 1)}  ref={c => this._refArrayDots.set(i, c)}/>
            </div>
          ))}
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
