import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navigation from "./navigation"

const StyledHeader = styled.header`
  /* TODO: when adding Intersection Observer make it fixed after home section and default to positiopn relative */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4;
  background: ${props => props.theme.colors.black};
  padding: 2rem 2rem 0 2rem;
  display: grid;

  .logo {
    display: inline-flex;
    align-items: center;
    padding-right: 2rem;
    margin-top: 5px;

    a {
      color: ${props => props.theme.colors.white};
      text-decoration: none;
    }
  }

  /* Show or hide navigation according to screen size */
  .small-display nav {
    display: ${props => (props.hidden ? "none" : "flex")};
    flex-direction: column;
    justify-content: space-between;
    border-top: ${props => (props.hidden ? "none" : "1px solid #fff")};
  }

  .large-display nav {
    display: none;
  }

  @media (min-width: ${props => props.theme.breakpoints.large}) {
    display: flex;

    .large-display nav {
      display: flex;
      flex-direction: row;
      border: none;
    }

    .small-display nav {
      display: none;
    }
  }
`
const DivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;

  button {
    background: none;
    border: none;

    @media (min-width: ${props => props.theme.breakpoints.large}) {
      display: none;
    }
  }
`
const NavWrapper = styled.div`
  nav {
    padding: 1rem 0.5rem;
    width: 100%;
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.colors.light};
  font-size: 5rem;
  padding: 0.5rem 1rem;
  border: 1px solid ${props => props.theme.colors.white};
  border-radius: 3px;
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

  const [hidden, setHidden] = useState(true)

  return (
    <StyledHeader>
      <DivWrapper>
        <div className="logo">
          <Img fixed={data.file.childImageSharp.fixed} alt="Rocket logo" />
          <h1>
            <Link to="/">{siteTitle}</Link>
          </h1>
        </div>

        <button className="menu">
          <StyledIcon
            icon="bars"
            aria-label="menu"
            onClick={() => setHidden(!hidden)}
          />
        </button>
      </DivWrapper>
      <NavWrapper
        hidden={hidden}
        className="small-display"
        onClick={() => setHidden(!hidden)}
      >
        <Navigation />
      </NavWrapper>
      <NavWrapper className="large-display">
        <Navigation />
      </NavWrapper>
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
