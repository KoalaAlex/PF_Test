/* global tw */
import React from 'react';
import styled from '@emotion/styled'
import PropTypes from 'prop-types';
import { CSSParallaxGroup, CSSParallaxLayer } from '../CSSParallax';
import { SVGPageSix } from '../SVGManager';
import ProjectContent from '../ProjectContent';

import { LastNoClickLayerSVG, AvatarBackgroundLayer } from '../../styles/parallax/parallax'
import { waveAnimation } from '../../styles/animations';
import { Inner, Title, RotateDivider } from '../../styles/general'

const RotateDividerProject = styled(RotateDivider)`
  background: #171717;
  height: 80%;
`;

import { detect } from 'detect-browser'

const browser = detect();

class PartSix extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      browser: '',
    }
  }

  componentDidMount () {
    this.setState({browser: browser.name})
  }

  render() {
    return (
      <CSSParallaxGroup name="page6" debugOn={this.props.debugOn} xoffset={150 + this.props.xOffset} yoffset={0.5}>
        <AvatarBackgroundLayer speed={-0.4} zIndex={1}>
          <RotateDividerProject/>
        </AvatarBackgroundLayer>
        <AvatarBackgroundLayer speed={-0.3} zIndex={1} yOffset={1.2}>
          <RotateDividerProject/>
        </AvatarBackgroundLayer>
        <AvatarBackgroundLayer speed={-0.2} zIndex={1} yOffset={2.3}>
          <RotateDividerProject/>
        </AvatarBackgroundLayer>
        <LastNoClickLayerSVG speed={-0.1} zIndex={2}>
          <SVGPageSix />
        </LastNoClickLayerSVG>
        <CSSParallaxLayer speed={0.1} zIndex={3} browserName={this.state.browser}>
          <ProjectContent
            easteregg={this.props.easteregg}
            isArticleVisible={this.props.isArticleVisible}
            timeout={this.props.timeout}
            articleTimeout={this.props.articleTimeout}
            article={this.props.article}
            onCloseArticle={this.props.onCloseArticle}
            onOpenArticle={this.props.onOpenArticle}
          />
       </CSSParallaxLayer>
      </CSSParallaxGroup>
    );
  }
}

export default PartSix;

PartSix.propTypes = {
  debugOn: PropTypes.bool.isRequired,
  xOffset: PropTypes.number.isRequired,
  easteregg: PropTypes.func.isRequired,
  isArticleVisible: PropTypes.bool.isRequired,
  timeout: PropTypes.bool.isRequired,
  articleTimeout: PropTypes.bool.isRequired,
  article: PropTypes.string.isRequired,
  onCloseArticle: PropTypes.func.isRequired,
  onOpenArticle: PropTypes.func.isRequired,
}
