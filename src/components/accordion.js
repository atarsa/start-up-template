import React, { useState, useRef } from "react"
import styled from "styled-components"

const StyledAccordion = styled.div`
  margin-bottom: 0.5rem;
  border: 1px solid ${props => props.theme.colors.lightGrey};

  .accordion__head {
    border: none;
    width: 100%;
    padding: 1rem 2rem;
    background: ${props =>
      props.active ? props.theme.colors.lightGrey : "#fafafa"};
    display: flex;
    justify-content: space-between;

    &:hover {
      background: ${props => props.theme.colors.white};
      color: ${props => props.theme.primaryColor};
      font-weight: ${props => props.theme.font.bold};
    }

    .span:after {
      background: red;
      content: ${props => (props.active ? "+" : "-")};
    }
  }
  .accordion__content {
    display: ${props => (props.active ? "block" : "none")};
    padding: 2rem;
    margin: 0;
    background: #fafafa;
  }
`

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false)

  const spanContent = useRef()
  const toggleAccordion = e => {
    setIsActive(!isActive)
    // set span's inner text to "+/-" depending on section's state
    spanContent.current.innerText = isActive ? "+" : "-"
  }

  return (
    <StyledAccordion active={isActive}>
      <button className="accordion__head" onClick={toggleAccordion}>
        {title}
        <span ref={spanContent}>+</span>
      </button>
      <div className="accordion__content">
        <p className="accordion__text">{content}</p>
      </div>
    </StyledAccordion>
  )
}

export default Accordion
