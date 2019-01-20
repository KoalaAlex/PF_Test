/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'

import MediaQuery from 'react-responsive';

//Images
const Wrapper = styled.a`
  display: inherit;
  pointer-events: auto;
  margin: 1%;
  @media (max-width: 800px) {
    margin: 2%;
  }
  ${tw('shadow-lg relative no-underline rounded-lg md:p-1 lg:p-2 xl:p-3  xl:p-4 text-white')};
  width: 30%;
  max-width: 600px;
  @media (max-width: 1200px) {
    width: 45%;
  }
  overflow: hidden;
  box-sizing: border-box;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background-color: rgba(255, 255, 255, .05);
  // 0.35em
  @supports ((-webkit-backdrop-filter: blur(1em)) or (backdrop-filter: blur(1em))) {
        backdrop-filter: blur(1em);
  }
  &:hover {
    transform: scale(1.02);
  }
  will-change: transform;
`;

const MarginDiv = styled.div`
  margin: auto;
`;

const SubText = styled.p`
  ${tw('text-white')};
  font-size: 1rem;
  margin-block-start: 0.67rem;
  margin-block-end: 0.67rem;
  font-family:'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
`;

const Title = styled.p`
  ${tw('text-white uppercase text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl tracking-wide')};
  margin-block-start: 0.67rem;
  margin-block-end: 0.67rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const ProjectCard = React.memo((props) => {
  return(
    <Wrapper href="javascript:;" onClick={() => {props.openProject(props.link)}}>
      <MarginDiv>
          <Title>{props.title}</Title>
          <div>
            <MediaQuery query="(min-width: 800px)">
              <SubText>{props.children}</SubText>
            </MediaQuery>
          </div>
      </MarginDiv>
    </Wrapper>
  )
}, () => { return true });

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  openProject: PropTypes.func,
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
