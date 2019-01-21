import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import ProjectCard from './project-card';

const ProjectsWrapper = styled.div`
  ${tw('justify-between mt-8')};
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: stretch;
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
  const markdownFileArray = props.data.allMarkdownRemark.edges;
  return (
    <ProjectsWrapper id="projects">
      {markdownFileArray.map((value, i) => (
        <ProjectCard
          key={value.node.frontmatter.title}
          title={value.node.frontmatter.projectTitle}
          onMouseEnter={props.onMouseEnter}
          openProject={props.openProject}
          link={value.node.frontmatter.title}
          activeArticleRef={props.activeArticleRef}
          isArticleVisibleRef={props.isArticleVisibleRef}
        >
          {value.node.frontmatter.cardText}
        </ProjectCard>
      ))}
    </ProjectsWrapper>
  )
}, () => { return true });

ProjectCards.propTypes = {
    openProject: PropTypes.func,
    onMouseEnter: PropTypes.func,
    activeArticleRef: PropTypes.object,
    isArticleVisibleRef: PropTypes.object
}

export default props => (
  <StaticQuery
    query={graphql`
      query ProjectCardsQuery{
        allMarkdownRemark(
          filter : {
             frontmatter: {
               tags: {
                 in: ["project"]
               }
             }
           },
          sort : {
          fields: [frontmatter___title],
          order: ASC
        }) {
          edges {
            node {
              frontmatter {
                title
                projectTitle
                cardText
              }
            }
          }
        }
      }
    `}
    render={data => <ProjectCards data={data} {...props} />}
  />
)
