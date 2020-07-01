import React from "react"
import styled from "styled-components"
import YAMLData from "../content/projects.yaml"
import SectionHeading from "./sectionHeading"
import Project from "./project"

const StyledSection = styled.section`
  .projects__container {
    max-width: 1200px;
    padding: 3rem 2rem;
    margin: 0 auto 5rem;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    grid-gap: 2rem;

    .buttons {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    @media (min-width: ${props => props.theme.breakpoints.medium}) {
      grid-template-columns: repeat(2, 1fr);
      .buttons {
        grid-column: span 2;
        flex-direction: row;
        justify-content: center;
      }
    }

    @media (min-width: ${props => props.theme.breakpoints.large}) {
      grid-template-columns: repeat(4, 1fr);

      .buttons {
        grid-column: span 4;
      }
    }
  }

  .quote__container {
    background: ${props => props.theme.colors.grey};
    padding: 5rem 2rem;

    h3 {
      text-align: center;
    }
  }
`
const StyledBtn = styled.button`
  padding: 1rem 2rem;
  margin: 0.4rem 0.5rem;
  text-transform: uppercase;
  color: ${props => props.theme.colors.darkGrey};
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.grey};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.primaryColor};
    border: 1px solid ${props => props.theme.colors.white};
  }
`

const Portfolio = () => {
  return (
    <StyledSection id="portfolio">
      <SectionHeading heading="Portfolio" info="Our latest projects." />

      <div className="projects__container">
        <div className="buttons">
          <StyledBtn>All</StyledBtn>
          <StyledBtn>Web Design</StyledBtn>
          <StyledBtn>App Development</StyledBtn>
          <StyledBtn>Mobile App</StyledBtn>
        </div>
        {YAMLData.projects.map(({ project }, index) => (
          <Project
            title={project.title}
            img={project.image}
            category={project.category}
          />
        ))}
      </div>

      <div className="quote__container">
        <h3>Clients Testimonials</h3>
        {/* Testimonial component */}
      </div>
    </StyledSection>
  )
}

export default Portfolio
