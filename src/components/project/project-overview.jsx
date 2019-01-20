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


const ProjectTypeItem = styled.div`
  @media (max-width: 800px) {
      grid-column-start: 1;
      grid-column-end: 3;
  }
`;

const ItemTitel = styled.h1`
  font-size: 2rem;
  @media (max-width: 800px) {
      font-size: 1.2rem;
  }
`;

const TaskTitle = styled(ItemTitel)`
  grid-column-start: 1;
  grid-column-end: 4;
  @media (max-width: 800px) {
      grid-column-end: 3;
  }
`;

const ProjectOverview = React.memo((props) => {
  function createTaskItems(columns) {
    let taskNodes = []
    let j = 0;
    for (let i = 1; i <= columns; i++) {
      let pNodes = []
      j = ((i - 1)*(columns -1));
      for (j ; j < (Math.ceil(props.tasks.length / columns) *(i)); j++) {
        if(props.tasks[j] != null){
          pNodes.push(<p key={"p" + j}>{props.tasks[j]}</p>)
        }
      }
      taskNodes.push(<div key={"o" + i}>{pNodes}</div>)
    }
    return taskNodes
  }
    return (
      <Overview>
        <div>
          <ItemTitel>Project Context</ItemTitel>
          {props.video && props.video}
          {props.projectContext.map((value, i) => (
              <p key={i}>{value}</p>
          ))}
        </div>
        <div>
          <ItemTitel>Teamsize</ItemTitel>
          <p>{props.teamSize}</p>
        </div>
        <ProjectTypeItem>
          <ItemTitel>Project Type</ItemTitel>
          <p>{props.projectType}</p>
        </ProjectTypeItem>
        <TaskTitle>Task</TaskTitle>
          {createTaskItems(3)}
      </Overview>
  )
});

ProjectOverview.propTypes = {
  projectContext: PropTypes.array,
  teamSize: PropTypes.string,
  projectType: PropTypes.string,
  tasks: PropTypes.array,
}

export default ProjectOverview
