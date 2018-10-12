import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import '../assets/scss/components/CSSSlider.scss';

const FullWideImgStyle = styled.img`
  width: 100%;
`;

const Container = styled.div`
/*
  display: flex;
  align-items: center;
  max-height: 10vh;
  overflow: hidden;
  margin: 1rem;
  */
  ${tw('justify-between mt-8')};
  display: grid;
  grid-gap: 1rem;
  //  grid-row: 1;
  //  grid-column: ${props => props.column};
  grid-template-columns: repeat(${props => props.column}, 1fr);
`;

const Wrapper = styled.div`
  max-width:980px;
  margin:auto;
`;

const BigImageP= styled.picture`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  max-height: 60vh;
  height: 40vw;
  align-items: center;
  overflow: hidden;
`;

const SmallImageP= styled.picture`
  display: grid;
  pointer-events: all;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  align-items: center;
  justify-items: center;
  overflow: hidden;
`;

class WideImg extends React.Component {
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
      <BigImageP className={this.state.isHidden ? this.props.hiddenClass : ""}>
        <source media="(max-width: 600px)" srcSet={this.props.srcSet} type="image/jpg" />
        <FullWideImgStyle onClick={this.props.click} src={this.props.src} className={this.props.className} src={this.props.src}/>
      </BigImageP>
    )
  }
}

WideImg.propTypes = {
  className: PropTypes.string,
  hiddenClass: PropTypes.string,
  srcSet: PropTypes.string,
  click: PropTypes.func,
  src: PropTypes.string
};

WideImg.defaultProps = {
  className: "",
  hiddenClass: "",
  srcSet: "",
};

class SmallImg extends React.Component {
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
      <SmallImageP>
        <source media="(max-width: 600px)" srcSet={this.props.srcSet} type="image/jpg" />
        <FullWideImgStyle onClick={this.props.click} src={this.props.src} className={this.state.isHidden ? this.props.hiddenClass : this.props.className} src={this.props.src}/>
      </SmallImageP>
    )
  }
}

SmallImg.propTypes = {
  className: PropTypes.string,
  hiddenClass: PropTypes.string,
  srcSet: PropTypes.string,
  click: PropTypes.func,
  src: PropTypes.string
};

SmallImg.defaultProps = {
  className: "",
  hiddenClass: "",
  srcSet: "",
};

export default class CSSSlider extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      slideIndex: 0,
    }
    this._refArrayImg = new Map();
    this._refArrayDots = new Map();
    this.showImg = this.showImg.bind(this);
    this.clickImg = this.clickImg.bind(this);
  }

  clickImg(n){
    if(n == this.state.slideIndex){
      return;
    }
    this.showImg(n)
  }

  showImg(n) {
    if (n >= this._refArrayImg.length) {
      n = 0;
    }
    if (n < 0) {
      n = (this._refArrayImg.length - 1)
    }
    this.setState({
      slideIndex: n
    })
    for (var i = 0; i < this._refArrayImg.size; i++) {
      i == n ? this._refArrayImg.get(i).setHidden(false) : this._refArrayImg.get(i).setHidden(true);
    }
    for (i = 0; i < this._refArrayDots.size; i++) {
       i == n ? this._refArrayDots.get(i).setHidden(true) : this._refArrayDots.get(i).setHidden(false);
    }
  }

  componentDidMount () {
    this.showImg(this.state.slideIndex);
  }

  render() {
    return (
      <Wrapper>
        {this.props.images.map((value, i) => (
            <WideImg key={i + this.props.images.length} className="mySlides" hiddenClass="hideThis" src={value} srcSet={this.props.images2x[i]} ref={c => this._refArrayImg.set(i, c)}/>
        ))}
        <Container column={this.props.images.length}>
          {this.props.images.map((value, i) => (
            <SmallImg key={i} className="opacity" hiddenClass="opacity-off" src={value} srcSet={this.props.images2x[i]} click={() => this.clickImg(i)}  ref={c => this._refArrayDots.set(i, c)}/>
          ))}
        </Container>
      </Wrapper>
    )
  }
}

CSSSlider.propTypes = {
  images: PropTypes.array.isRequired,
  images2x: PropTypes.array,
};

CSSSlider.defaultProps = {
  images: [],
  images2x: [],
};
