import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SectionHeading from "./sectionHeading"
import ContactForm from "./contactForm"

const StyledSection = styled.section`
  background: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  padding: 3rem 2rem;

  .container {
    max-width: 1200px;
    margin: 2rem auto;
    display: grid;
    grid-gap: 3rem;

    @media (min-width: ${props => props.theme.breakpoints.medium}) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .contact__details {
    margin-bottom: 5rem;
  }
  .info {
    color: ${props => props.theme.colors.grey};
    margin-bottom: 3rem;

    svg {
      margin-right: 1rem;
    }
  }

  .social-icons {
    margin: 1rem auto;

    svg {
      width: 4.5rem;
      height: 4.5rem;
      padding: 1rem;
      border: 1px solid ${props => props.theme.colors.grey};
      border-radius: 50%;
      margin-right: 1rem;
      cursor: pointer;

      path {
        fill: ${props => props.theme.colors.grey};
      }
    }

    .fa-facebook-f:hover path {
      fill: ${props => props.theme.colors.fb};
    }
    .fa-twitter:hover path {
      fill: ${props => props.theme.colors.twitter};
    }
    .fa-linkedin-in:hover path {
      fill: ${props => props.theme.colors.linkedin};
    }
    .fa-youtube:hover path {
      fill: ${props => props.theme.colors.yt};
    }
  }
`

const Contact = () => {
  return (
    <StyledSection id="contact">
      <SectionHeading heading="Contact Us" />
      <div className="container">
        <ContactForm />
        <div className="info">
          <p>
            Say nor seek massy in one all saw none, ye hight along dome be
            crime, the ne know congealed brow. Who parting high below these are
            done would them, sighed shell would childe ofttimes but love. Spent
            before now run.
          </p>
          <div className="contact__details">
            <p>
              <FontAwesomeIcon icon="map-marker" />
              1508 Kembery Drive, Chicago, IL 60605
            </p>
            <p>
              <FontAwesomeIcon icon="phone-alt" />
              202-314-1583
            </p>
            <p>
              <FontAwesomeIcon icon="envelope" />
              startup-info@example.com
            </p>
          </div>
          <div className="social-icons">
            <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            <FontAwesomeIcon icon={["fab", "twitter"]} />
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
            <FontAwesomeIcon icon={["fab", "youtube"]} />
          </div>
        </div>
      </div>
    </StyledSection>
  )
}

export default Contact
