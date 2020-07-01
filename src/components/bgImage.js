import React from "react"
import styled from "styled-components"
import Image from "../components/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const BGWrapper = styled.div`
  position: relative;
`

const FakeBgImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`
const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.75);
  color: ${props => props.theme.colors.white};
`

const HoverDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: rgb(236, 150, 87);
  opacity: 0;
  color: ${props => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    opacity: 0.8;
    transition: opacity 0.5s ease-in-out;
  }
`
const StyledIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.colors.white};
  font-size: 30px;
`
const BgImage = ({ children, filename }) => {
  return (
    <BGWrapper>
      <FakeBgImage filename={filename} />
      <Content>{children}</Content>
      <HoverDiv aria-hidden="true">
        <StyledIcon icon="search-plus" />
      </HoverDiv>
    </BGWrapper>
  )
}

export default BgImage
