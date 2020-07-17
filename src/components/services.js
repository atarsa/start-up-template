import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StyledSection = styled.section`
  background: ${props => props.theme.colors.lightGrey};
  padding: 3rem 2rem;
  min-height: 100vh;
  display: grid;
  align-items: center;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    @media (min-width: ${props => props.theme.breakpoints.large}) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
    }
  }

  h2 {
    font-size: 3.5rem;
    margin: 3rem 2rem;

    text-align: center;
  }

  h3 {
    font-size: 2rem;
    font-weight: ${props => props.theme.font.regular};
  }
  p {
    color: ${props => props.theme.colors.darkGrey};
  }
  .service {
    display: flex;
    margin-bottom: 2rem;
  }
  @media (min-width: ${props => props.theme.breakpoints.large}) {
    grid-template-rows: 30rem 1fr;
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.primaryColor};
  font-size: 6.5rem;
  padding: 2rem;
  border: 1px solid ${props => props.theme.colors.darkGrey};
  border-radius: 50%;
  max-width: 6.5rem;
  margin-right: 1.5rem;
`

const Services = () => {
  return (
    <StyledSection id="services">
      <h2>Services</h2>
      <div className="container">
        <div className="service">
          <StyledIcon icon="trophy" />
          <div className="service__info">
            <h3>User Research</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              aperiam consequatur quo.
            </p>
          </div>
        </div>
        <div className="service">
          <StyledIcon icon="cog" />
          <div className="service__info">
            <h3>Data Collection</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              aperiam consequatur quo.
            </p>
          </div>
        </div>
        <div className="service">
          <StyledIcon icon="laptop" />
          <div className="service__info">
            <h3>Designing</h3>
            <p>
              Dolor sit amet, consectetur adipisicing elit. Iure aperiam
              consequatur placeat
            </p>
          </div>
        </div>
        <div className="service">
          <StyledIcon icon="clock" />
          <div className="service__info">
            <h3>Development</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              aperiam consequatur quo.
            </p>
          </div>
        </div>
        <div className="service">
          <StyledIcon icon="heart" />
          <div className="service__info">
            <h3>Quality</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              aperiam consequatur quo.
            </p>
          </div>
        </div>
        <div className="service">
          <StyledIcon icon="magic" />
          <div className="service__info">
            <h3>Release</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              aperiam consequatur quo.
            </p>
          </div>
        </div>
      </div>
    </StyledSection>
  )
}

export default Services
