import React, { useState, useEffect } from "react"
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

const Project = ({ title, img, description }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => setIsOpen(!isOpen)

   // Add focus to main close button when modal is open
  useEffect(() => {
    const closeBtn = document.querySelector(".content__button button")
    if (closeBtn) {
      closeBtn.focus()
    }
  }, [isOpen])

  return (
    <>
      <ProjectWrapper onClick={toggleModal}>
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
            toggleModal={toggleModal}
                        
          />
        </Portal>
      )}
    </>
  )
}

export default Project
