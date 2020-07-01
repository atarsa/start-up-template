import React from "react"
import styled from "styled-components"
import BgImage from "./bgImage"

const ProjectWrapper = styled.button`
  cursor: pointer;
  border: none;
  background: none;

  p {
    text-align: center;
    text-transform: uppercase;
    padding: 0 1rem;
  }
`

const Project = ({ title, img, category }) => {
  return (
    <ProjectWrapper data-category={category}>
      <BgImage filename={img} alt={title}>
        <p>{title}</p>
      </BgImage>
    </ProjectWrapper>
  )
}

export default Project
