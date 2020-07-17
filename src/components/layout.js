/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Normalize } from "styled-normalize"
import { theme } from "../styles/theme"

import Header from "./header"
import Footer from "./footer"
import SEO from "../components/seo"

// Load fonts
import "typeface-montserrat"
import "fontsource-hind-madurai"

// load font awsome icons and create library
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import {
  faBars,
  faTrophy,
  faCog,
  faLaptop,
  faClock,
  faHeart,
  faMagic,
  faArrowCircleRight,
  faSearchPlus,
  faQuoteLeft,
  faUser,
  faEnvelope,
  faPen,
  faMapMarker,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons"

library.add(
  fab,
  faBars,
  faTrophy,
  faCog,
  faLaptop,
  faClock,
  faHeart,
  faMagic,
  faArrowCircleRight,
  faSearchPlus,
  faQuoteLeft,
  faUser,
  faEnvelope,
  faPen,
  faMapMarker,
  faPhoneAlt
)

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%; /* Now 10px = 1rem! */
    scroll-behavior: smooth;
  }
  body{
    font-family: 'Hind Madurai', sans-serif;
    /* happy rems  😄 */
    font-size: 16px; /* px fallback */
    font-size: 1.6rem; /* default font-size for document */
    line-height: 1.5; /* a nice line-height */
    }

  h1, h2, h3, h4, h5, h6{
    font-family: 'Montserrat', sans-serif;
    /* text-transform: capitalize; */
    padding: 0;
    margin: 0;
    
  }

  *, *::before, *::after{
    box-sizing: border-box;
  }
  main{
    margin: 0;
  }

  /* helpers */
  .primary{
    color: ${props => props.theme.primaryColor};
  }
  .bold{
    font-weight: ${props => props.theme.font.bold};
  }

  .activeNav{
    color: ${props => props.theme.primaryColor};
    transform: scale(1.2)
  }

`
const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <SEO title="StartUp Homepage" />
      <Header siteTitle="StartUp" />

      <main>{children}</main>

      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
