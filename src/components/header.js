import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Navigation from "./navigation"

const StyledHeader = styled.header`
  /* TODO: when adding Intersection Observer make it fixed after home section and default to positiopn relative */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4;
  background: ${props => props.theme.colors.black};
  padding: 2rem;
  display: flex;
  justify-content: space-between;

  .logo {
    display: inline-flex;
    align-items: center;
    padding-right: 2rem;

    a {
      color: ${props => props.theme.colors.white};
      text-decoration: none;
    }
  }
`
const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "rocket.png" }) {
        childImageSharp {
          fixed(width: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <StyledHeader>
      <div className="logo">
        <Img
          fixed={data.file.childImageSharp.fixed}
          alt="A man running in the countryside"
        />
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
      <Navigation />
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
