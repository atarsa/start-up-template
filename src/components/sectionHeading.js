import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  h2 {
    font-size: 3.5rem;
    text-align: center;
  }

  p {
    font-size: 1.8rem;
    font-weight: ${props => props.theme.font.thin};
    text-align: center;
    margin-bottom: 5rem;
  }
`

const SectionHeading = ({ heading, info }) => {
  return (
    <Wrapper>
      <h2>{heading}</h2>
      <p>{info}</p>
    </Wrapper>
  )
}

export default SectionHeading
