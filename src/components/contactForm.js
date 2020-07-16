import React from "react"
import styled from "styled-components"

import Button from "../styles/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    padding: 1rem 3.5rem 1rem 1rem;
    margin-bottom: 2rem;

    :focus,
    :active {
      border: 1px solid ${props => props.theme.colors.orange};
    }
  }

  .input__container {
    position: relative;
    display: flex;
    flex-direction: column;

    svg {
      position: absolute;
      top: 3.5rem;
      right: 1.5rem;

      path {
        fill: ${props => props.theme.colors.grey};
      }
    }
  }
`
const ContactForm = () => {
  return (
    <StyledForm name="contact" method="POST" data-netlify="true">
      <div className="input__container">
        <label htmlFor="name">Name:</label>
        <input type="text" placeholder="Name" id="name" aria-label="name" />
        <FontAwesomeIcon icon="user" />
      </div>
      <div className="input__container">
        <label htmlFor="email">Email:</label>
        <input type="text" placeholder="Email" id="email" aria-label="email" />
        <FontAwesomeIcon icon="envelope" />
      </div>
      <div className="input__container">
        <label htmlFor="message">Message:</label>
        <textarea
          placeholder="Message"
          id="message"
          rows="7"
          aria-label="message"
        />
        <FontAwesomeIcon icon="pen" />
      </div>

      <Button type="submit">Send Message</Button>
    </StyledForm>
  )
}

export default ContactForm
