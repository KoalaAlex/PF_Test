/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

//Images

const Wrapper = styled.a`
  width: 100%;
  ${tw('shadow-lg relative no-underline rounded-lg px-8 py-16 text-white')};
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: scale(1.02);
  }
  &:before{
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(255, 255, 255, .5);

    @supports ((-webkit-backdrop-filter: blur(2em)) or (backdrop-filter: blur(2em))) {
          background-color: rgba(255, 255, 255, .3);
          backdrop-filter: blur(1em);
    }
    //box-shadow: inset 0 0 0 200px rgba(255,255,255,0.1);
  }
`;

const Text = styled.div`
  font-family:'IBM Plex Mono';
  ${tw('opacity-75')};
`;

const Title = styled.div`
  font-family:'IBM Plex Mono';
  font-size: 2rem;
  ${tw('text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide pt-8')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const ProjectCard = ({ title, onOpenArticle, link, children}) => (
    <Wrapper href="javascript:;" onClick={() => {onOpenArticle(link)}}>
      <Text>
            {children}
            <Title>{title}</Title>
      </Text>
    </Wrapper>
);

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  onOpenArticle: PropTypes.func,
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
