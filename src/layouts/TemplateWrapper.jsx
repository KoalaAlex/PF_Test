import React from 'react';
import { graphql } from 'gatsby'
import Img from 'gatsby-image';

const TemplateWrapper = (props) => (
      <div>
        <Img title="Header image" alt="Greek food laid out on table" fluid={this.props.data.imageOne.childImageSharp.fluid} />
        {this.props.children()}
      </div>
    )

export default TemplateWrapper

export const pageQuery = graphql`
query {
  imageOne: file(relativePath: { eq: "avatar.jpg" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fluid(maxWidth: 700) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
