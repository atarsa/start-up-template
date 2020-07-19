import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

const AccordionHeader = styled.div`
  .accordion__head {
    border: none;
    width: 100%;
    padding: 1rem 2rem;
    background: ${props =>
      props.active ? props.theme.colors.lightGrey : "#fafafa"};
    display: flex;
    justify-content: space-between;
    margin-bottom: ${props => (props.active ? "0" : "0.5rem")};
    border: 1px solid ${props => props.theme.colors.lightGrey};

    &:hover {
      background: ${props => props.theme.colors.white};
      color: ${props => props.theme.primaryColor};
      font-weight: ${props => props.theme.font.bold};
    }
  }
`
const AccordionContent = styled(motion.div)`
  padding: 2rem;
  margin: 0;
  margin-bottom: 0.5rem;
  background: #fafafa;
  border: 1px solid ${props => props.theme.colors.lightGrey};
`

const Accordion = ({ title, content, id }) => {
  const [isActive, setIsActive] = useState(true)

  const spanContent = useRef()
  const toggleAccordion = () => {
    setIsActive(!isActive)
    // set span's inner text to "+/-" depending on section's state
    spanContent.current.innerText = isActive ? "+" : "-"
  }

  useEffect(() => {
    toggleAccordion()
  }, []) // eslint-disable-line

  const variants = {
    collapsed: {
      opacity: 0,
      height: 0,
      y: "-10%",
      transition: {
        duration: 0.1,
      },
    },
    open: {
      y: 0,
      opacity: 1,
      height: "auto",
    },
  }

  return (
    <>
      <AccordionHeader active={isActive}>
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
      </AccordionHeader>
      <AnimatePresence>
        {isActive && (
          <AccordionContent
            className="accordion__content"
            id={`accordion-panel-${id}`}
            aria-labelledby={`accordion-header-${id}`}
            hidden={!isActive}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={variants}
          >
            <p className="accordion__text">{content}</p>
          </AccordionContent>
        )}
      </AnimatePresence>
    </>
  )
}

export default Accordion
