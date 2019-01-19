import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import ProjectCard from './project-card';

const ProjectsWrapper = styled.div`
  ${tw('justify-between mt-8')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1799px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
  }
  @media (max-width: 599px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
  grid-auto-rows: 1fr;
  max-width: 100%;
  text-align: center;
  .body.is-article-visible & {
    transform: scale(0.95);
    filter: blur(0.1rem);
    opacity: 0;
  }
  .body.is-loading & {
    > * {
      opacity: 0;
    }
    filter: blur(0.125rem);
  }
`;

const ProjectCards = React.memo((props) => {
  return (
    <ProjectsWrapper id="projects">
      <ProjectCard
        title="PORTFOLIO PLAYGROUND"
        openProject={props.openProject}
        link="portfolio"
      >
        Find out how I have created my online portfolio. You know… the one you are looking at right now.
      </ProjectCard>
      <ProjectCard
        title="GEMUE - Schulungsanwendung"
        openProject={props.openProject}
        link="gemue-vr"
      >
        VR training and MEETING system for Engineers.
      </ProjectCard>
      <ProjectCard
        title="Traction Inverter"
        openProject={props.openProject}
        link="traction-inverter"
      >
        Here is a collection of some nice Apps that are made with Unity for Mobile and Dektop Devices.
      </ProjectCard>
      <ProjectCard
        title="GEMUE - AR App"
        openProject={props.openProject}
        link="gemue-ar"
      >
        Explore the products of gemue in augmented reality.
      </ProjectCard>
      <ProjectCard
        title="Recaro - Seat configurator"
        openProject={props.openProject}
        link="recaro-vr"
      >
        Configure a plane seat in virtual reality.
      </ProjectCard>
      <ProjectCard
        title="Liebherr - Crane Simulator"
        openProject={props.openProject}
        link="simulator"
      >
        Experience how it feels to operate a crane
      </ProjectCard>
      <ProjectCard
        title="VOITH - INTENSA DRUM"
        openProject={props.openProject}
        link="intensaDrum"
      >
        Explore Intensa drum in an interactive app.
      </ProjectCard>
    </ProjectsWrapper>
  )
});

ProjectCards.propTypes = {
    openProject: PropTypes.func,
}

export default ProjectCards
