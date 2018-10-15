/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import MediaQuery from 'react-responsive';

//Images

const Wrapper = styled.a`
  display: inherit;
  pointer-events: auto;
  ${tw('shadow-lg relative no-underline rounded-lg md:p-1 lg:p-2 xl:p-3  xl:p-4 text-white')};
  width: 100%;
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
`;

const Title = styled.p`
  ${tw('text-white uppercase text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-wide')};
  margin-block-start: 0.67rem;
  margin-block-end: 0.67rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const ProjectCard = ({ title, onOpenArticle, link, children}) => (
    <Wrapper href="javascript:;" onClick={() => {onOpenArticle(link)}}>
      <MarginDiv>
          <Title>{title}</Title>
          <div>
            <MediaQuery query="(min-width: 900px)">
              <SubText>{children}</SubText>

            </MediaQuery>
          </div>
      </MarginDiv>
    </Wrapper>
);

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  onOpenArticle: PropTypes.func,
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
