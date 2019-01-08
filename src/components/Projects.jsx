import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import ProjectCard from '../components/ProjectCard';

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
`;

const ProjectAndContentWrapper = styled.div`
  box-sizing: border-box;
`;

//const Projects = (props) => (
class Projects extends React.Component {
  render(){
    return (
      <ProjectsWrapper id="projects">
        <ProjectCard
          title="PORTFOLIO PLAYGROUND"
          onOpenArticle={this.props.onOpenArticle}
          link="portfolio"
        >
          Find out how I have created my online portfolio. You know… the one you are looking at right now.
        </ProjectCard>
        <ProjectCard
          title="GEMUE - Schulungsanwendung"
          onOpenArticle={this.props.onOpenArticle}
          link="gemue-vr"
        >
          VR training and MEETING system for Engineers.
        </ProjectCard>
        <ProjectCard
          title="Traction Inverter"
          onOpenArticle={this.props.onOpenArticle}
          link="traction-inverter"
        >
          Here is a collection of some nice Apps that are made with Unity for Mobile and Dektop Devices.
        </ProjectCard>
        <ProjectCard
          title="GEMUE - AR App"
          onOpenArticle={this.props.onOpenArticle}
          link="gemue-ar"
        >
          Explore the products of gemue in augmented reality.
        </ProjectCard>
        <ProjectCard
          title="Recaro - Seat configurator"
          onOpenArticle={this.props.onOpenArticle}
          link="recaro-vr"
        >
          Configure a plane seat in virtual reality.
        </ProjectCard>
        <ProjectCard
          title="Liebherr - Crane Simulator"
          onOpenArticle={this.props.onOpenArticle}
          link="simulator"
        >
          Experience how it feels to operate a crane
        </ProjectCard>
        <ProjectCard
          title="VOITH - INTENSA DRUM"
          onOpenArticle={this.props.onOpenArticle}
          link="intensaDrum"
        >
          Explore Intensa drum in an interactive app.
        </ProjectCard>
      </ProjectsWrapper>
    )
  }
};

Projects.propTypes = {
    onOpenArticle: PropTypes.func,
}

export default Projects
