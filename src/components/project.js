import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import BgImage from "./bgImage"
import Portal from "./portal"
import ProjectPopup from "./projectPopup"

const ProjectWrapper = styled(motion.button)`
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

  const [ref, inView] = useInView()

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.2,
    },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        mass: 0.7
      },
      scale: 1,
    },
  }
  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0, transition: { delay: 0.5 } },
  }
  return (
    <>
      <ProjectWrapper
        onClick={toggleModal}
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <BgImage filename={img} alt={title}>
          <p>{title}</p>
        </BgImage>
      </ProjectWrapper>
      <AnimatePresence>
        {isOpen && (
          <Portal>
            <motion.div
              variants={backdrop}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <ProjectPopup
                title={title}
                img={img}
                description={description}
                toggleModal={toggleModal}
              />
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </>
  )
}

export default Project
