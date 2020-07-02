import React, { useState, useRef } from "react"
import styled from "styled-components"
import BgImage from "./bgImage"
import Portal from "./portal"
import ProjectPopup from "./projectPopup"

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


const Project = ({ title, img, category, description }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => setIsOpen(!isOpen)

  return (
    <>
      <ProjectWrapper data-category={category} onClick={handleClick}>
        <BgImage filename={img} alt={title}>
          <p>{title}</p>
        </BgImage>
      </ProjectWrapper>
      {isOpen && (
        <Portal>
          <ProjectPopup
            title={title}
            img={img}
            description={description}
            handleClick={handleClick}
          />
        </Portal>
      )}
    </>
  )
}

export default Project
