import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import MediaQuery from 'react-responsive';

const Overview = styled.div`
  display: grid;
  justify-items: center;
  align-items:top;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
  }
`;

const OverviewItem = styled.div`

`;

const ProjectTypeItem = styled(OverviewItem)`
  @media (max-width: 800px) {
      grid-column-start: 1;
      grid-column-end: 3;
  }
`;

const ItemTitel = styled.h1`
  font-size: 2rem;
`;

const TaskTitle = styled(ItemTitel)`
  grid-column-start: 1;
  grid-column-end: 4;
  @media (max-width: 800px) {
      grid-column-end: 3;
  }
`;

class ProjectOverview extends React.Component {


  createTaskItems = (columns) => {
    let taskNodes = []
    let j = 0;
    for (let i = 1; i <= columns; i++) {
      let pNodes = []
      j = ((i - 1)*(columns -1));
      for (j ; j < (Math.ceil(this.props.tasks.length / columns) *(i)); j++) {
        if(this.props.tasks[j] != null){
          pNodes.push(<p key={"p" + j}>{this.props.tasks[j]}</p>)
        }
      }
      taskNodes.push(<OverviewItem key={"o" + i}>{pNodes}</OverviewItem>)
    }
    return taskNodes
  }

  render() {
      return (
        <Overview>
          <OverviewItem>
            <ItemTitel>Project Context</ItemTitel>
            {this.props.video && this.props.video}
            {this.props.projectContext.map((value, i) => (
                <p key={i}>{value}</p>
            ))}
          </OverviewItem>
          <OverviewItem>
            <ItemTitel>Teamsize</ItemTitel>
            <p>{this.props.teamSize}</p>
          </OverviewItem>
          <ProjectTypeItem>
            <ItemTitel>Project Type</ItemTitel>
            <p>{this.props.projectType}</p>
          </ProjectTypeItem>
          <TaskTitle>Task</TaskTitle>
          {this.createTaskItems(3)}
        </Overview>
    )
  }
}

ProjectOverview.propTypes = {
  projectContext: PropTypes.array,
  teamSize: PropTypes.string,
  projectType: PropTypes.string,
  tasks: PropTypes.array,
}

export default ProjectOverview
