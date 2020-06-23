import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

const StyledWrapper = styled.div``
const StyledBanner = styled.div`
  background: ${props => props.theme.colors.black};
  height: 100vh;
  width: 100vw;
  color: ${props => props.theme.colors.white};

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    h1 {
      font-size: 4rem;
      text-transform: uppercase;
      padding: 2rem;
    }
    h2 {
      font-size: 2rem;
      font-weight: ${props => props.theme.font.regular};
      text-align: center;
      padding: 2rem;
    }

    button {
      background: transparent;
      padding: 1rem 2.5rem;
      border: 1px solid ${props => props.theme.colors.white};
      border-radius: 3px;
      color: ${props => props.theme.colors.white};

      &:hover {
        background: ${props => props.theme.colors.white};
        color: black;
      }
    }
  }
`

const StyledSection = styled.section`
  padding: 2rem;
  margin: 2rem auto;
`
const Home = query => {
  console.log("DATAT", query)
  return (
    <StyledWrapper>
      <StyledBanner>
        {/* <Img fluid={query.data.file.childImageSharp.fluid} /> */}

        <div>
          <h1>Entrepreneur</h1>
          <h2>
            Yes, Start run and grow your businnes.
            <br />
            Espice, adspice, prospice
          </h2>
          <Link to="/#intro">
            <button> Read More</button>
          </Link>
        </div>
      </StyledBanner>
      <StyledSection id="intro">
        <h3>welcome to StartUp - Start, run and grow your business.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aperiam
          consequatur quo. Sed quis tortor magna. Maecenas hendrerit feugiat
          pulvinar. Aenean condimentum quam eu ultricies cursus. Nulla facilisi.
          In hac habitasse platea dictumst. Ut nec tellus neque. Sed non dui
          eget arcu elementum facilisis.
        </p>
      </StyledSection>
    </StyledWrapper>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "banner.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Home
