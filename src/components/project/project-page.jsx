import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import SliderGastbyImg from  '../slider/slider-gastby-img';
import ProjectOverview from  './project-overview';

const Concept = styled.div`
  font-size: 1rem;
`;

const TextToLeftSide = styled.span`
  text-align: start;
`;

const Article = styled.article`
  padding: 3rem;
  @media (min-width: 500px) {
    padding: 4rem;
  }
  @media (min-width: 900px) {
    padding: 6rem;
  }
  ${({ isVisible }) => isVisible ? css`
      display: block;
    ` : css`
      display: none;
    `
  }
`;

const Wrapper = styled.div`
  @media (min-width: 500px) {
    padding: 1rem;
  }
  @media (min-width: 900px) {
    padding: 3rem;
  }
`;

const CodeHTML = styled.span`
background: #303030;
  :before {
    Content : "<";
  }
  :after {
    Content : ">";
  }
`;

const ProjectPage = React.memo((props) => {
  const projectData = props.markdownData.node.frontmatter
  return (
    <Article isVisible={props.isVisible} className={props.className}>
      <h2 className="major">{projectData.projectTitle}</h2>
      <span className="image main">
        <SliderGastbyImg
        images={projectData.images}
        videos={props.videos}
        />
      </span>
      <Wrapper>
        <ProjectOverview
          projectContext={projectData.projectContext}
          teamSize={projectData.teamSize}
          projectType={projectData.projectType}
          tasks={projectData.tasks}
          />
        <Concept>
          <h1>Intention</h1>
          <TextToLeftSide>
          {projectData.intention.map((value, i) => (
              <p key={i}>{value}</p>
          ))}
        </TextToLeftSide>
        </Concept>
        <Concept>
          <h1>Process</h1>
          <TextToLeftSide>
          {projectData.process.map((value, i) => (
              <p key={i}>{value}</p>
          ))}
          </TextToLeftSide>
        </Concept>
        <div>
          <h1>Technology used</h1>
          {projectData.technology.map((value, i) => (
              <p key={i}>{value}</p>
          ))}
        </div>
        <div>
          <h1>Platforms</h1>
          {projectData.platforms.map((value, i) => (
              <p key={i}>{value}</p>
          ))}
        </div>
          {props.children}
      </Wrapper>
    </Article>
  )
});

export default ProjectPage

ProjectPage.propTypes = {
  className: PropTypes.string,
  videos: PropTypes.array,
  markdownData: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired,
}
