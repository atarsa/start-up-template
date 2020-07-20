import React from "react"
import styled from "styled-components"
import SectionHeading from "./sectionHeading"
import PricingInfo from "./pricingInfo"
import YAMLData from "../content/pricing.yaml"

const StyledSection = styled.section`
  padding: 9rem 2rem;
  min-height: 100vh;
  display: grid;
  align-items: center;

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-gap: 2rem;

    @media (min-width: ${props => props.theme.breakpoints.medium}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: ${props => props.theme.breakpoints.large}) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`

const Pricing = () => {
  const pricingPlans = YAMLData.pricing
  return (
    <StyledSection id="price">
      <SectionHeading
        heading="Our Price"
        info="Lorem ipsum dolor sit amet laudantium incidunt ut laboriosam."
      />
      <div className="container">
        {pricingPlans.map(plan => (
          <PricingInfo
            key={plan.name}
            name={plan.name}
            price={plan.price}
            projects={plan.projects}
            storage={plan.storage}
            users={plan.users}
            bandwidth={plan.bandwidth}
          />
        ))}
      </div>
    </StyledSection>
  )
}

export default Pricing
