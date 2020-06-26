import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SectionHeading from "./sectionHeading"

const StyledSection = styled.section`
  .container {
    max-width: 1200px;
    padding: 3rem 2rem;
  }

  .quote__container {
    background: ${props => props.theme.colors.grey};
    padding: 5rem 2rem;

    h3 {
      text-align: center;
    }
  }
`

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      web1: file(relativePath: { eq: "project-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      web2: file(relativePath: { eq: "project-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      web3: file(relativePath: { eq: "project-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      web4: file(relativePath: { eq: "project-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      web5: file(relativePath: { eq: "project-5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      web6: file(relativePath: { eq: "project-6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      app1: file(relativePath: { eq: "project-7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      app2: file(relativePath: { eq: "project-8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      app3: file(relativePath: { eq: "project-9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobile1: file(relativePath: { eq: "project-10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobile2: file(relativePath: { eq: "project-11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobile3: file(relativePath: { eq: "project-12.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledSection id="portfolio">
      <SectionHeading heading="Portfolio" info="Our latest projects." />
      <div>
        <button>All</button>
        <button>Web Design</button>
        <button>App Development</button>
        <button>Mobile App</button>
      </div>
      <div>
        {/* <Img fluid={data.web1.childImageSharp.fluid} alt="" />
         */}
      </div>
      <div className="quote__container">
        <h3>Clients Testimonials</h3>
        {/* Testimonial component */}
      </div>
    </StyledSection>
  )
}

export default Portfolio
