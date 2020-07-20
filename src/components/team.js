import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import YAMLData from "../content/team.yaml"
import SectionHeading from "./sectionHeading"
import Image from "./image"

const StyledSection = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  padding-top: 9rem;

  @media (min-width: ${props => props.theme.breakpoints.large}) {
    grid-template-rows: 30rem 1fr;
  }
`
const StyledWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto 5rem;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  @media (min-width: ${props => props.theme.breakpoints.large}) {
    grid-template-columns: repeat(4, 1fr);
  }

  .team-member {
    display: grid;
    padding: 1rem;
    grid-template-columns: 1fr;
  }

  p,
  span {
    text-align: center;
    font-weight: ${props => props.theme.font.bold};
  }
  span {
    font-weight: ${props => props.theme.font.regular};
    color: ${props => props.theme.colors.darkGrey};
    margin-top: -1.5rem;
  }
  .buttons {
    margin: 2rem 0;
    display: flex;

    a {
      background: ${props => props.theme.colors.lightGrey};
      padding: 0.5rem 2rem;
      width: 100%;
      text-align: center;
      color: ${props => props.theme.colors.darkGrey};

      :hover {
        color: ${props => props.theme.colors.white};
      }
    }
    a:nth-child(1) {
      margin-right: 0.5rem;
    }
    .twitter-btn:hover {
      background: ${props => props.theme.colors.twitter};
    }

    .fb-btn:hover {
      background: ${props => props.theme.colors.fb};
    }
  }
`

const Team = () => {
  const team = YAMLData.team

  return (
    <StyledSection id="team">
      <SectionHeading heading="Our Team" info="Meet our amazing team." />
      <StyledWrapper>
        {team.map(team_member => (
          <div className="team-member" key={team_member.name}>
            <Image filename={team_member.img} alt={team_member.name} />
            <p>{team_member.name}</p>
            <span>{team_member.position}</span>
            <div className="buttons">
              <a href="/" className="twitter-btn">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
              <a href="/" className="fb-btn">
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </a>
            </div>
          </div>
        ))}
      </StyledWrapper>
    </StyledSection>
  )
}

export default Team
