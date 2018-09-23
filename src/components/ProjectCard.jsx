/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Wrapper = styled.a`
  width: 100%;
  ${tw('shadow-lg relative no-underline rounded-lg px-8 py-16 text-white')};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`;

const Text = styled.div`
  font-family:'IBM Plex Mono';
  ${tw('opacity-75')};
`;

const Title = styled.div`
  font-family:'IBM Plex Mono';
  ${tw('text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide pt-8')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const ProjectCard = ({ title, onOpenArticle, link, children, bg }) => (
  <Wrapper href="javascript:;" onClick={() => {onOpenArticle(link)}} bg={bg}>
    <Text>{children}</Text>
    <Title>{title}</Title>
  </Wrapper>
);

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  onOpenArticle: PropTypes.func,
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
};
