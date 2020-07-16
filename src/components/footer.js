import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  background: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  margin: 0 auto;
  padding: 2rem;
  text-align: center;

  a {
    color: ${props => props.theme.primaryColor};
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      © {new Date().getFullYear()}, Build by A.Tarsa with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>. Theme template by{" "}
      <a href="https://webthemez.com/">webthemez.com</a>
    </StyledFooter>
  )
}

export default Footer
