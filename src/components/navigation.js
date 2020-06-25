import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  text-transform: capitalize;
  text-decoration: none;
  font-size: 1.8rem;
  letter-spacing: 0.07rem;
  padding: 1rem 0.8rem;
  color: ${props => props.theme.colors.white};

  :hover,
  :focus {
    color: ${props => props.theme.primaryColor};
  }

  @media (min-width: ${props => props.theme.breakpoints.large}) {
    :hover,
    :focus {
      transform: scale(1.2);
    }
  }
`
const Navigation = () => (
  <nav role="navigation">
    <StyledLink to="#home">home</StyledLink>
    <StyledLink to="#services">services</StyledLink>
    <StyledLink to="#about">about</StyledLink>
    <StyledLink to="#portfolio">portfolio</StyledLink>
    <StyledLink to="#team">team</StyledLink>
    <StyledLink to="#price">price</StyledLink>
    <StyledLink to="#contact">contact</StyledLink>
  </nav>
)

export default Navigation
