import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import ProjectCard from '../components/ProjectCard';

const ProjectsWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8')};
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
`;

//const Projects = (props) => (
class Projects extends React.Component {
  render(){
    return (
      <div id="projects" style={this.props.timeout ? {display: 'none'} : {}}>
          <ProjectsWrapper>
            <ProjectCard
              title="MULTIPLAYER VR"
              onOpenArticle={this.props.onOpenArticle}
              link="vr-multi"

            >
              This projects uses Vive Support from SteamVR and you can meet eatch other in VR with the multiplyer mode.
            </ProjectCard>
            <ProjectCard
              title="INTERACTIVE AND TOUCH"
              onOpenArticle={this.props.onOpenArticle}
              link="touch"

            >
              Here is a collection of some nice Apps that are made with Unity.
            </ProjectCard>
            <ProjectCard
              title="WEB"
              onOpenArticle={this.props.onOpenArticle}
              link="web"

            >
              Here you can see some nice websites and fun projects
            </ProjectCard>
            <ProjectCard
              title="CRANE SIUMULATOR"
              onOpenArticle={this.props.onOpenArticle}
              link="simulator"

            >
              This was a mega project made with Liebherr and also in VR. It was a complete Simulatom for the behaviour of a cran.
            </ProjectCard>
            <ProjectCard
              title="Augmented Reality"
              onOpenArticle={this.props.onOpenArticle}
              link="augmented"

            >
              This was a mega project made with Liebherr and also in VR. It was a complete Simulatom for the behaviour of a cran.
            </ProjectCard>
          </ProjectsWrapper>
      </div>
    )
  }
};

Projects.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Projects
