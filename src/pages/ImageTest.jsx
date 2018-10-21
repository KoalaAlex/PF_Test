import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const ImageTest = ({ data }) => (
  <div>
  <Img fixed={data.file.childImageSharp.fixed} />
  </div>
)

const GET_DOG_PHOTO = graphql`
 query ImageTestQuery($norgo: String) {
    file(relativePath: { eq: $norgo }) {
       childImageSharp {
         # Specify the image processing specifications right in the query.
         # Makes it trivial to update as your page's design changes.
         fixed(width: 125, height: 125) {
           ...GatsbyImageSharpFixed
         }
       }
     }
  }
`;

const MarkdownFrontmatterFragment = graphql`
  fragment MarkdownFrontmatter on MarkdownRemark {
    frontmatter {
      path
      image
    }
  }
`

export default props => (
  <StaticQuery
    query={GET_DOG_PHOTO}
    pathContext={{norgo: "pic01.jpg"}}
    render={data => <ImageTest data={data} {...props} />}
  />
)
