import React, { useState, useEffect } from "react"
import styled from "styled-components"
import YAMLData from "../content/projects.yaml"
import SectionHeading from "./sectionHeading"
import Project from "./project"
import Testimonials from "./testimonials"

const StyledSection = styled.section`
  min-height: 100vh;
  padding-top: 8rem;

  .projects__container {
    max-width: 1200px;
    padding: 3rem 2rem;
    margin: 0 auto 2rem;
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
    padding: 3rem 2rem 4rem;

    h3 {
      text-align: center;
      font-size: 2.6rem;
      font-weight: 500;
      
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
  &:focus,
  &.active {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.primaryColor};
    border: 1px solid ${props => props.theme.colors.white};
  }
`

const Portfolio = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(YAMLData.projects)
    console.log(projects)
  }, [])

  const showAll = () => {
    setProjects(YAMLData.projects)
  }

  const showFiltered = category => {
    const filteredProjects = YAMLData.projects.filter(({ project }) =>
      project.category.includes(category)
    )
    setProjects(filteredProjects)
    // remove .active clas from 'all' btn
    document.querySelector("#showAll").classList.remove("active")
  }

  return (
    <StyledSection id="portfolio">
      <SectionHeading heading="Portfolio" info="Our latest projects." />

      <div className="projects__container">
        <div className="buttons">
          <StyledBtn onClick={() => showAll()} className="active" id="showAll">
            All
          </StyledBtn>
          <StyledBtn onClick={() => showFiltered("web")}>Web Design</StyledBtn>
          <StyledBtn onClick={() => showFiltered("app")}>
            App Development
          </StyledBtn>
          <StyledBtn onClick={() => showFiltered("mobile")}>
            Mobile App
          </StyledBtn>
        </div>
        {projects.map(({ project }) => (
          <Project
            title={project.title}
            img={project.image}
            description={project.description}
            key={project.title}
          />
        ))}
      </div>

      <div className="quote__container">
        <h3>Clients Testimonials</h3>
        <Testimonials />
      </div>
    </StyledSection>
  )
}

export default Portfolio
