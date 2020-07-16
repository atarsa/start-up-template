import React from "react"
import styled from "styled-components"
import Button from "../styles/Button"
const Wrapper = styled.div`
  border: 1px solid ${props => props.theme.colors.grey};
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: capitalize;

  header {
    width: 100%;
    background: ${props => props.theme.colors.lighterGrey};
    padding: 3rem;
  }

  h3 {
    font-size: 3rem;
    font-weight: 500;
    text-align: center;
  }

  ul {
    list-style: none;
    width: 100%;
    margin: 0;
    padding-left: 0;

    li {
      padding: 1.5rem;
      border-bottom: 1px solid ${props => props.theme.colors.grey};
      color: ${props => props.theme.colors.black};
      text-align: center;
    }
  }

  a{
    margin: 1.5rem;
  }
  
`
const PricingInfo = ({ name, price, projects, storage, users, bandwidth }) => (
  <Wrapper>
    <header>
      <h3>{name}</h3>
    </header>

    <ul>
      <li>
        <span className="primary">{price}/mo</span>
      </li>
      <li>{projects}</li>
      <li>{storage}</li>
      <li>{users}</li>
      <li>{bandwidth}</li>
      <li>Security Suite</li>
    </ul>
    <a>
      <Button>Sign Up Now!</Button>
    </a>
  </Wrapper>
)

export default PricingInfo
