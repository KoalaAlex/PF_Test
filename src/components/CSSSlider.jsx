import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import '../assets/scss/components/CSSSlider.scss';

import movieDefault from '../images/movie_800x450.jpg';

const FullWideImgStyle = styled.img`
  width: 100%;
`;

const Container = styled.div`
  ${tw('justify-between mt-8')};
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(${props => props.column}, 1fr);
  padding-left: 2rem;
  padding-right: 2rem;
`;

const Wrapper = styled.div`
  max-width:980px;
  margin:auto;
`;

const BigImageP= styled.picture`
  display: flex;
  //grid-template-columns: repeat(1, 1fr);
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

const Movie = styled.span`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  justify-items: center;
  height: 40vw;
  max-height: 60vh;
  width: 100%;
  pointer-events: all;
  cursor: pointer;
  video {
    height: 100%;
    width: 100%;
  }
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
      <React.Fragment>
      	{this.props.video ? (
            <Movie className={this.state.isHidden ? this.props.hiddenClass : ""}>{this.props.video}</Movie>
          )
          : (
          <BigImageP className={this.state.isHidden ? this.props.hiddenClass : ""}>
            <source media="(max-width: 600px)" srcSet={this.props.srcSet} type="image/jpg" />
            <FullWideImgStyle src={this.props.src} className={this.props.className} src={this.props.src}/>
          </BigImageP>
        )}
      </React.Fragment>
    )
  }
}

WideImg.propTypes = {
  video: PropTypes.node,
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
      {this.props.videos && (
        this.props.videos.map((value, i) => (
          <WideImg key={i+"bv"} className="mySlides" hiddenClass="hideThis" video={this.props.videos[i]} ref={c => this._refArrayImg.set(i, c)}/>
          ))
        )}
        {this.props.images.map((value, i) => (
            <WideImg key={i + this.props.images.length} className="mySlides" hiddenClass="hideThis" src={value} srcSet={this.props.images2x[i]} ref={c => this._refArrayImg.set(this.props.videos ? (i+this.props.videos.length) : i, c)}/>
        ))}
        <Container column={this.props.videos ? (this.props.images.length+this.props.videos.length) : this.props.images.length}>
        {this.props.videos && (
          this.props.videos.map((value, i) => (
            <SmallImg key={i + "v"} className="opacity" hiddenClass="opacity-off" src={movieDefault} srcSet={movieDefault} click={() => this.clickImg(i)} ref={c => this._refArrayDots.set(i, c)}/>
            ))
          )}
          {this.props.images.map((value, i) => (
            <SmallImg key={i} className="opacity" hiddenClass="opacity-off" src={value} srcSet={this.props.images2x[i]} click={() => this.clickImg(this.props.videos ? (i+this.props.videos.length) : i)}  ref={c => this._refArrayDots.set(this.props.videos ? (i+this.props.videos.length) : i, c)}/>
          ))}
        </Container>
      </Wrapper>
    )
  }
}

CSSSlider.propTypes = {
  videos: PropTypes.array,
  images: PropTypes.array.isRequired,
  images2x: PropTypes.array,
};

CSSSlider.defaultProps = {
  images: [],
  images2x: [],
};
