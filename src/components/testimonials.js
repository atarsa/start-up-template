import React from "react"
import styled from "styled-components"
import YAMLData from "../content/testimonials.yaml"
import Image from "./image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 3rem auto 2rem;

  .testimonial {
    /* background: ${props => props.theme.colors.lightGrey}; */
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    margin: 2rem;

    @media (min-width: ${props => props.theme.breakpoints.large}) {
      grid-template-columns: 100px 1fr;
    }

    p {
      margin-left: 2rem;
      font-size: 2rem;
      font-weight: ${props => props.theme.font.thin};
      color: ${props => props.theme.colors.black};
    }
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.colors.darkGrey};
  margin: 1rem;
`
const Testimonials = () => {
  const testimonials = YAMLData.testimonials

  return (
    <Wrapper>
      {testimonials.map(testimonial => (
        <div className="testimonial">
          <Image
            filename={testimonial.img}
            alt={testimonial.name}
            style={{
              maxHeight: "100px",
              maxWidth: "100px",
              borderRadius: "50%",
            }}
          />
          <p>
            <StyledIcon icon="quote-left" />
            {testimonial.text}
          </p>
        </div>
      ))}
    </Wrapper>
  )
}

export default Testimonials
