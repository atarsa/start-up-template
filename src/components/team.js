import React from "react"
import SectionHeading from "./sectionHeading"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Team = () => {
  const data = useStaticQuery(graphql`
    query {
      manager: file(relativePath: { eq: "woman-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 260) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      designer: file(relativePath: { eq: "woman-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 26) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      developer: file(relativePath: { eq: "man-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 260) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <SectionHeading heading="Our Team" info="Meet our amazing team." />

      <div>
        <div>
          <Img fluid={data.manager.childImageSharp.fluid} alt="" />
          <p>Jane Doe</p>
          <p>General Manager</p>
          <div>
            <a href="/">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
