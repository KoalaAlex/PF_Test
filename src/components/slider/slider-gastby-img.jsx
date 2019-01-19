import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Img from 'gatsby-image';

import { opacityAnim, rotateAnim, grayScaleAnim } from '../../styles/animations';

const FullWideImgStyle = styled(Img)`
  width: 100%;
  margin: auto;
`;

const SmallWideImgStyle = styled(Img)`
  pointer-events: auto;
  max-width: 100%;
  max-height: 100%;
  ${({ isActive }) => isActive ? css`
    filter: grayscale(0%);
  	transform: scale(1.1);
  	cursor: pointer;
    will-change: transform;
    &:active{
      animation: ${rotateAnim} 0.1s ease-in-out;
    }
  ` : css`
    filter: grayscale(100%);
    transform: scale(1);
    will-change: filter, transform;
    cursor: pointer;
    &:hover{
      filter: grayscale(0%);
      transform: scale(1.1);
      animation: ${grayScaleAnim} 1s ease-in-out;
    }
  `}
`

const SmallVideoImgStyle = styled(Img)`
  pointer-events: auto;
  max-width: 100%;
  max-height: 100%;
  ${({ isActive }) => isActive ? css`
    filter: grayscale(0%);
  	transform: scale(1.1);
  	cursor: pointer;
    will-change: transform;
    &:active{
      animation: ${rotateAnim} 0.1s ease-in-out;
    }
  ` : css`
    filter: grayscale(100%);
    transform: scale(1);
    will-change: filter, transform;
    cursor: pointer;
    &:hover{
      filter: grayscale(0%);
      transform: scale(1.1);
      animation: ${grayScaleAnim} 1s ease-in-out;
    }
  `}
`

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
  width: 100%;
  max-height: 100%;
  height: auto;
  align-items: center;
  justify-items: center;
  overflow: hidden;
  ${({ hideThis }) => hideThis && css`
    display: none;
    animation: opacityAnim 1s ease-in;
    will-change: opacity;
    `
  }
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
  ${({ hideThis }) => hideThis && css`
    display: none;
    animation: $opacityAnim 1s ease-in;
    will-change: opacity;
    `
  }
`;

const BigImg = React.memo((props) => {
  return (
    <>
    	{props.isVideo ? (
          <Movie hideThis={!props.isActive}>{props.src}</Movie>
        )
        : (
        <BigImageP hideThis={!props.isActive}>
          <FullWideImgStyle fluid={props.src.childImageSharp.fluid} className={"mySlides"}/>
        </BigImageP>
      )}
    </>
  )
});

BigImg.propTypes = {
  isVideo: PropTypes.bool,
  isActive: PropTypes.bool.isRequired
};

BigImg.defaultProps = {
  isVideo: false
};

const SmallImg = React.memo((props) => {
  return (
    <SmallImageP onClick={props.click}>
      {props.isVideo ? (
        <SmallVideoImgStyle fluid={props.src.childImageSharp.fluid} isActive={props.isActive}/>
      ) : (
      <SmallWideImgStyle fluid={props.src.childImageSharp.fluid} isActive={props.isActive}/>
    )}
    </SmallImageP>
  )
});

SmallImg.propTypes = {
  click: PropTypes.func,
  isActive: PropTypes.bool.isRequired,
  isVideo: PropTypes.bool.isRequired
};

SmallImg.defaultProps = {
  isVideo: false,
};

function useIndex(speed){
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setZoffset(mulWihPerspAndCalc(speed));
   }, [speed]
  );
  return activeIndex;
}

const SliderGastbyImg = React.memo((props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videos = props.videos
  const images = props.images
  const maxIndex = (videos.length + images.length)
  function clickImg(index){
    if(index !== activeIndex){
      setActiveIndex(index)
    }
  }
  return (
    <Wrapper>
      <ContainerBigImg>
        {videos.map((value, i) => (
            <BigImg
              key={i}
              src={videos[i]}
              isActive={!((activeIndex-i)%maxIndex)}
              isVideo={true}
            />
          ))
        }
        {images.map((value, i) => (
            <BigImg
              key={i}
              src={value}
              isActive={!((activeIndex-(i+videos.length))%maxIndex)}
            />
        ))}
      </ContainerBigImg>
      <Container column={maxIndex}>
        {videos.map((value, i) => (
          <SmallImg
            key={i}
            src={props.data.allMarkdownRemark.edges[0].node.frontmatter.image}
            click={() => clickImg(i)}
            isActive={!((activeIndex-i)%maxIndex)}
            isVideo={true}
          />
          ))}
        {images.map((value, i) => (
          <SmallImg
            key={i}
            src={value}
            click={() => clickImg(i+videos.length)}
            isActive={!((activeIndex-(i+videos.length))%maxIndex)}
          />
        ))}
      </Container>
    </Wrapper>
  )
});

SliderGastbyImg.propTypes = {
  videos: PropTypes.array,
  images: PropTypes.array.isRequired
};

SliderGastbyImg.defaultProps = {
  videos: [],
  images: []
};



export default props => (
  <StaticQuery
    query={graphql`
      query VideoQuery{
        allMarkdownRemark(
          filter : {
             frontmatter: {
               tags: {
                 in: ["default-video"]
               }
             }
           },
          sort : {
          fields: [frontmatter___title],
          order: ASC
        }) {
          edges {
            node {
              frontmatter {
                image {
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 90, cropFocus: CENTER) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <SliderGastbyImg data={data} {...props} />}
  />
)
