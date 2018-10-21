import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Img from 'gatsby-image';

import '../assets/scss/components/CSSSlider.scss';

import movieDefault from '../images/movie_800x450.jpg';

const FullWideImgStyle = styled(Img)`
  width: 100%;
  margin: auto;
`;

const SmallWideImgStyle = styled(Img)`
  pointer-events: auto;
  max-width: 100%;
  max-height: 100%;
`;
const SmallVideoImgStyle = styled.img`
  pointer-events: auto;
  max-width: 100%;
  max-height: 100%;
`;

const Container = styled.div`
  display: grid;
  grid-gap: 2rem;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(${props => props.column}, 1fr);
  padding-top: 2rem;
`;

const ContainerBigImg = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(1, 1fr);
  width: 80vw;
  max-width: 980px;
  height: 50vw;
  max-height:720px;
  background-color: rgba(255, 255, 255, 0.05);
  @supports ((-webkit-backdrop-filter: blur(1em)) or (backdrop-filter: blur(1em))) {
        -webkit-backdrop-filter: blur(1em);
        backdrop-filter: blur(1em);
  }
`;

const Wrapper = styled.div`
  max-width:980px;
  margin:auto;
`;

const BigImageP= styled.span`
  display: flex;
  //grid-template-columns: repeat(1, 1fr);
  width: 100%;
  max-height: 100%;
  height: auto;
  align-items: center;
  justify-items: center;
  overflow: hidden;
`;

const SmallImageP= styled.picture`
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  justify-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
`;

const Movie = styled.span`
  display: block;
  align-items: center;
  justify-items: center;
  width: 100%;
  pointer-events: auto;
  cursor: pointer;
  video {
    object-fit: contain;
    height: 100%;
    max-width: 100%;
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
            <FullWideImgStyle fluid={this.props.srcImage.childImageSharp.fluid} className={this.props.className}/>
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
  click: PropTypes.func,
  src: PropTypes.string,
  srcImage: PropTypes.object,
};

WideImg.defaultProps = {
  className: "",
  hiddenClass: "",
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
      <SmallImageP onClick={this.props.click}>
        {this.props.src ? (
          <SmallVideoImgStyle src={this.props.src} className={this.state.isHidden ? this.props.hiddenClass : this.props.className}/>

        ) : (
        <SmallWideImgStyle fluid={this.props.srcImage.childImageSharp.fluid} className={this.state.isHidden ? this.props.hiddenClass : this.props.className}/>
      )}
      </SmallImageP>
    )
  }
}

SmallImg.propTypes = {
  className: PropTypes.string,
  hiddenClass: PropTypes.string,
  click: PropTypes.func,
  src: PropTypes.string,
  srcImage: PropTypes.object,
};

SmallImg.defaultProps = {
  className: "",
  hiddenClass: "",
};

export default class CSSSliderGastbyImg extends React.PureComponent {
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
    //console.log(this.props.images);
  }

  render() {
    return (
      <Wrapper>
        <ContainerBigImg>
        {this.props.videos && (
          this.props.videos.map((value, i) => (
            <WideImg key={i+"bv"} className="mySlides" hiddenClass="hideThis" video={this.props.videos[i]} ref={c => this._refArrayImg.set(i, c)}/>
          ))
        )}
        {this.props.images.map((value, i) => (
            <WideImg key={i + this.props.images.length} className="mySlides" hiddenClass="hideThis" srcImage={value} ref={c => this._refArrayImg.set(this.props.videos ? (i+this.props.videos.length) : i, c)}/>
        ))}
        </ContainerBigImg>
        <Container column={this.props.videos ? (this.props.images.length+this.props.videos.length) : this.props.images.length}>
        {this.props.videos && (
          this.props.videos.map((value, i) => (
            <SmallImg key={i + "v"} className="opacity" hiddenClass="opacity-off" src={movieDefault} click={() => this.clickImg(i)} ref={c => this._refArrayDots.set(i, c)}/>
            ))
          )}
          {this.props.images.map((value, i) => (
            <SmallImg key={i} className="opacity" hiddenClass="opacity-off" srcImage={value} click={() => this.clickImg(this.props.videos ? (i+this.props.videos.length) : i)}  ref={c => this._refArrayDots.set(this.props.videos ? (i+this.props.videos.length) : i, c)}/>
          ))}
        </Container>
      </Wrapper>
    )
  }
}

CSSSliderGastbyImg.propTypes = {
  videos: PropTypes.array,
  images: PropTypes.array.isRequired,
};

CSSSliderGastbyImg.defaultProps = {
  images: [],
};
