import React from "react"
import SectionHeading from "./sectionHeading"
import styled from "styled-components"
import ContactForm from "./contactForm"


const StyledSection = styled.section`
  background: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  padding: 3rem 2rem;
`

const Contact = () => {
  return (
    <StyledSection id="contact">
      <SectionHeading heading="Contact Us" />
      <ContactForm />
    </StyledSection>
  )
}

export default Contact
