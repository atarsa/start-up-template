import React from "react"
import styled from "styled-components"
import Image from "./image"

const PopupWrapper = styled.aside`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  background: rgba(0, 0, 0, 0.75);

  .content {
    background: #fff;
    margin: 3rem 1.5rem;

    @media (min-width: ${props => props.theme.breakpoints.medium}) {
      width: 80%;
      margin: 3rem auto;
    }

    @media (min-width: ${props => props.theme.breakpoints.large}) {
      max-width: 1200px;
    }
  }

  .content__img {
    height: 100%;
  }
  .content__header {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background: ${props => props.theme.colors.darkGrey};
    color: #fff;
    text-transform: capitalize;

    button {
      color: #fff;
      background: none;
      border: none;
      cursor: pointer;
    }
  }

  .content__main {
    padding: 1.5rem;
    border-bottom: 1px solid ${props => props.theme.colors.lightGrey};

    h4 {
      font-weight: ${props => props.theme.font.regular};
      padding-top: 3rem;
    }
  }
  .content__button {
    display: flex;
    justify-content: end;

    button {
      margin: 1.5rem;
      padding: 1rem 4rem;
      color: #fff;
      background: ${props => props.theme.primaryColor};
      border: none;
      text-transform: uppercase;
      cursor: pointer;

      :hover {
        background: ${props => props.theme.colors.gold};
        transition: background 0.5s ease-in;
      }
    }
  }
`

const ProjectPopup = ({ title, img, description, handleClick }) => {
  return (
    <PopupWrapper>
      <div className="content">
        <div className="content__header">
          <h3>{title}</h3>
          <button onClick={handleClick}>x</button>
        </div>
        <div className="content__main">
          <div className="content__img">
            <Image
              filename={img}
              alt={title}
              style={{
                maxHeight: "450px",
              }}
              imgStyle={{
                maxHeight: "450px",
                objectFit: "contain",
              }}
            />
          </div>
          <div>
            <h4>Project Description</h4>
            <p>{description}</p>
          </div>
        </div>
        <div className="content__button">
          <button onClick={handleClick}>Close</button>
        </div>
      </div>
    </PopupWrapper>
  )
}

export default ProjectPopup
