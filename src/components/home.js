import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const StyledWrapper = styled.div`
  position: relative;
`
const StyledBanner = styled.div`
  height: 100vh;
  /* width: 100vw; */
  color: ${props => props.theme.colors.white};

  div {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.75) 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    z-index: 2;

    h1 {
      font-size: 4rem;
      text-transform: uppercase;
      padding: 2rem;
      /* margin-top: -8rem; */
    }
    h2 {
      font-size: 2rem;
      font-weight: ${props => props.theme.font.regular};
      text-align: center;
      padding: 2rem;
      margin-bottom: 2rem;
    }

    button {
      background: transparent;
      padding: 1rem 2.5rem;
      border: 1px solid ${props => props.theme.colors.white};
      border-radius: 3px;
      color: ${props => props.theme.colors.white};

      &:hover,
      &:active {
        background: ${props => props.theme.colors.white};
        color: black;
      }
    }
  }
`
const StyledImg = styled(Img)`
  z-index: 0;
  top: 0;
  left: 0;
`
const StyledSection = styled.section`
  padding: 2rem;
  margin: 2rem auto;
  max-width: 1000px;

  h2 {
    font-weight: ${props => props.theme.font.regular};
    text-align: center;
  }
  p {
    text-align: center;
  }
`
const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <StyledWrapper>
      <StyledBanner>
        <StyledImg
          fluid={data.file.childImageSharp.fluid}
          alt="A man running in the countryside"
        />

        <div>
          <h1>Entrepreneur</h1>
          <h2>
            Start, run and grow your businnes.
            <br />
            Espice, adspice, prospice
          </h2>
          <Link to="/#intro">
            <button> Read More</button>
          </Link>
        </div>
      </StyledBanner>
      <StyledSection id="intro">
        <h2>
          welcome to <span className="bold">StartUp</span> -{" "}
          <span className="primary">Start</span>, run and grow your business.
        </h2>
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

export default Home
