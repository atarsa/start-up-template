import React, { useState, useRef, useEffect } from "react"
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

const Accordion = ({ title, content, id }) => {
  const [isActive, setIsActive] = useState(false)

  const spanContent = useRef()
  const toggleAccordion = () => {
    setIsActive(!isActive)
    // set span's inner text to "+/-" depending on section's state
    spanContent.current.innerText = isActive ? "-" : "+"
  }

  useEffect(() => {
    toggleAccordion()
  }, [])

  return (
    <StyledAccordion active={!isActive}>
      <h4>
        <button
          className="accordion__head"
          onClick={toggleAccordion}
          id={`accordion-header-${id}`}
          aria-controls={`accordion-panel-${id}`}
          aria-expanded={isActive}
        >
          {title}
          <span ref={spanContent} aria-hidden="true">
            -
          </span>
        </button>
      </h4>

      <div
        className="accordion__content"
        id={`accordion-panel-${id}`}
        aria-labelledby={`accordion-header-${id}`}
        hidden={!isActive}
      >
        <p className="accordion__text">{content}</p>
      </div>
    </StyledAccordion>
  )
}

export default Accordion
