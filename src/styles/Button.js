import styled from "styled-components"

const Button = styled.button`
  padding: 1rem 2rem;
  background: ${props => props.theme.primaryColor};
  color: ${props => props.theme.colors.white};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in;

  :hover {
    background: ${props => props.theme.colors.gold};
    color: ${props => props.theme.colors.black};
    transition: all 0.3s ease-in;
  }
`

export default Button
