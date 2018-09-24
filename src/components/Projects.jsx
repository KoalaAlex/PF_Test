import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import ProjectCard from '../components/ProjectCard';

const ProjectsWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const Projects = (props) => (
    <div id="projects" style={props.timeout ? {display: 'none'} : {}}>
        <ProjectsWrapper>
          <ProjectCard
            title="MULTIPLAYER VR"
            onOpenArticle={props.onOpenArticle}
            link="vr-multi"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This projects uses Vive Support from SteamVR and you can meet eatch other in VR with the multiplyer mode.
          </ProjectCard>
          <ProjectCard
            title="INTERACTIVE AND TOUCH"
            onOpenArticle={props.onOpenArticle}
            link="touch"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Here is a collection of some nice Apps that are made with Unity.
          </ProjectCard>
          <ProjectCard
            title="WEB"
            onOpenArticle={props.onOpenArticle}
            link="web"
            bg="linear-gradient(to right,#ff28ba 0%,#49fef8 100%)"
          >
            Here you can see some nice websites and fun projects
          </ProjectCard>
          <ProjectCard
            title="CRANE SIUMULATOR"
            onOpenArticle={props.onOpenArticle}
            link="simulator"
            bg="linear-gradient(to right,#068cff 0%,#00ff55 100%)"
          >
            This was a mega project made with Liebherr and also in VR. It was a complete Simulatom for the behaviour of a cran.
          </ProjectCard>
        </ProjectsWrapper>
    </div>
)

Projects.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Projects
