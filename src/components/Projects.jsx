import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import ProjectCard from '../components/ProjectCard';

const ProjectsWrapper = styled.div`
  ${tw('justify-between mt-8')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
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
          title="my portfolio playground"
          onOpenArticle={this.props.onOpenArticle}
          link="portfolio"
        >
          "Here you can see the make of from my portfolio"
        </ProjectCard>
        <ProjectCard
          title="multiplayer vr"
          onOpenArticle={this.props.onOpenArticle}
          link="vr-multi"
        >
          "You can play this project with an Oculus or a HTC Vive it is support by SteamVR and you can meet each other virtual in a game zone."
        </ProjectCard>
        <ProjectCard
          title="interactive and touch"
          onOpenArticle={this.props.onOpenArticle}
          link="touch"
        >
          "Here is a collection of some nice Apps that are made with Unity for Mobile and Dektop Devices."
        </ProjectCard>
        <ProjectCard
          title="simulators and configurators"
          onOpenArticle={this.props.onOpenArticle}
          link="simulator"
        >
          "In those 'games' you can change almost everything from day/night behaviour until the mass of a crane load. The more load weight on the crane, the more it bends."
        </ProjectCard>
        <ProjectCard
          title="augmented reality"
          onOpenArticle={this.props.onOpenArticle}
          link="augmented"
        >
          "Here you can find some fancy applications that mixes the real world with the virtual one."
        </ProjectCard>
      </ProjectsWrapper>
    )
  }
};

Projects.propTypes = {
    onOpenArticle: PropTypes.func,
}

export default Projects
