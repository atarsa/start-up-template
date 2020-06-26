import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StyledSection = styled.section`
  .container {
    max-width: 1200px;
    padding: 3rem 2rem;

    @media (min-width: ${props => props.theme.breakpoints.large}) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;
      margin: 0 auto;
    }
  }
  .quote__container {
    background: ${props => props.theme.colors.grey};
    padding: 5rem 2rem;

    h3 {
      text-align: center;
    }
  }
  p,
  li {
    color: #333;
  }
  h2 {
    font-size: 3.5rem;
    text-align: center;
  }
  h3 {
    font-size: 3rem;
    font-weight: ${props => props.theme.font.regular};
    letter-spacing: -0.8px;
  }

  .lead {
    font-size: 1.8rem;
    font-weight: ${props => props.theme.font.thin};
    text-align: center;
    margin-bottom: 5rem;
  }

  .img__container {
    margin-bottom: 4rem;
    overflow: hidden;
  }

  .more-info {
    margin-bottom: 5rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      padding: 0.5rem 0;
    }
  }
`
const StyledIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.primaryColor};
  font-size: 1.6rem;
  margin-right: 1.5rem;
`

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "charts.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledSection id="about">
      <h2>
        About <span className="primary">StartUp</span>
      </h2>
      <p className="lead">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. laudantium
        culpa tenetur.
      </p>
      <div className="container">
        <div className="img__container">
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Data charts showned on a tablet"
          />
        </div>

        <div className="more-info">
          <p>
            Non-disclosure agreement bandwidth termsheet channels product
            management growth hacking stock crowdfunding incubator hypotheses
            startup. Leverage value proposition stealth crowdsource influencer
            equity partnership marketing network effects strategy.
          </p>
          <p>
            Entrepreneur infrastructure agile development A/B testing creative
            non-disclosure agreement accelerator return on investment graphical
            user interface. Influencer stock stealth disruptive low hanging
            fruit monetization channels vesting period ramen backing first mover
            advantage technology client churn rate.
          </p>
          <ul>
            <li>
              {" "}
              <StyledIcon icon="arrow-circle-right" />
              Lorem ipsum enimdolor sit ame
            </li>
            <li>
              <StyledIcon icon="arrow-circle-right" />
              Explicabo deleniti neque aliquid
            </li>
            <li>
              <StyledIcon icon="arrow-circle-right" />
              Consectetur adipisicing elit
            </li>
            <li>
              <StyledIcon icon="arrow-circle-right" />
              Lorem ipsum dolor sit amet
            </li>
            <li>
              <StyledIcon icon="arrow-circle-right" />
              Quo issimos molest quibusdam temporibus
            </li>
          </ul>
        </div>
        <div className="more-info">
          <h3>Amazing bootstrap template ideas</h3>
          <p>
            Churn rate metrics long tail client infographic android seed round
            equity customer investor creative. Entrepreneur technology social
            media holy grail virality prototype metrics stealth user experience
            early adopters leverage funding. Freemium strategy gamification
            business-to-consumer advisor beta business plan user experience
            ownership branding. Deployment validation long tail iPhone.
          </p>
          <ul>
            <li>
              <StyledIcon icon="arrow-circle-right" />
              Lorem ipsum enimdolor sit ame
            </li>
            <li>
              <StyledIcon icon="arrow-circle-right" />
              Explicabo deleniti neque aliquid
            </li>
            <li>
              <StyledIcon icon="arrow-circle-right" />
              Consectetur adipisicing elit
            </li>
            <li>
              <StyledIcon icon="arrow-circle-right" />
              Lorem ipsum dolor sit amet
            </li>
            <li>
              <StyledIcon icon="arrow-circle-right" />
              Quo issimos molest quibusdam temporibus
            </li>
          </ul>
          <p>
            Ownership social media crowdsource gen-z partnership. Equity venture
            customer investor. Bootstrapping graphical user interface equity low
            hanging fruit handshake buyer investor direct mailing creative seed
            money A/B testing hackathon deployment.
          </p>
        </div>
        <section>
          <div>
            <div>Collapsible Gruop Item #1</div>
            <p>
              Consectetur adipisicing sit amet, consectetur adipisicing elit.
              Atque sed, quidem quis praesentium, ut unde. Quae sed, incidunt
              laudantium nesciunt, optio corporis quod earum pariatur omnis illo
              saepe numquam suscipit, nemo placeat ntium, ut unde. Quae sed,
              incidunt laudantium nesciunt, optio corporis quod earumdignissimos
              eius mollitia et quas officia doloremque ipsum labore rem
              deserunt.
            </p>
          </div>

          <div>
            <div>Collapsible Gruop Item #2</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              sed, quidem quis praesentium, ut unde. Quae sed, incidunt
              laudantium nesciunt, optio corporis quod earum pariatur omnis illo
              saepe numquam suscipit, nemo placeat ntium, ut unde. Quae sed,
              incidunt laudantium nesciunt, optio corporis quod earumdignissimos
              eius mollitia et quas officia doloremque ipsum labore rem
              deserunt.
            </p>
          </div>

          <div>
            <div>Collapsible Gruop Item #3</div>
            <p>
              Soon blessed came plainly out word, velvet lenore my over ebony
              he. And sat mefilled as there merely, door rare i thou ghost my
              loneliness you the, lenore eagerly me.
            </p>
          </div>
        </section>
        {/* TODO ACCORDION */}
      </div>
      <div className="quote__container">
        <h3>Usus est magister optimus.</h3>
      </div>
    </StyledSection>
  )
}

export default About
