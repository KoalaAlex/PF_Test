import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import '../assets/scss/components/CSSSlider.scss';

const FullWideImgStyle = styled.img`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  max-height: 10vh;
  overflow: hidden;
  margin: 1rem;
`;

const Item = styled.div`
  flex-grow: 1;
`;

const Wrapper = styled.div`
  max-width:980px;
  margin:auto;
`;

const BigImage= styled.div`
  display: flex;
  width: 100%;
  max-height: 50vh;
  align-items: center;
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
       <FullWideImgStyle onClick={this.props.click} className={this.state.isHidden ? this.props.hiddenClass : this.props.className } src={this.props.src}/>
    )
  }
}

WideImg.propTypes = {
  className: PropTypes.string,
  hiddenClass: PropTypes.string,
  click: PropTypes.func,
  src: PropTypes.string
};

WideImg.defaultProps = {
  className: "",
  hiddenClass: "",
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
        <BigImage>
          {this.props.images.map((value, i) => (
              <WideImg key={i} className="mySlides" hiddenClass="hideThis" src={value} ref={c => this._refArrayImg.set(i, c)}/>
          ))}
        </BigImage>
        <Container>
          {this.props.images.map((value, i) => (
            <div key={i}>
              <WideImg className="demo w3-opacity" src={value} click={() => this.showImg(i)}  ref={c => this._refArrayDots.set(i, c)}/>
            </div>
          ))}
        </Container>
      </Wrapper>
    )
  }
}

CSSSlider.propTypes = {
  images: PropTypes.array.isRequired,
};

CSSSlider.defaultProps = {
  images: [],
};
