import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import YAMLData from "../content/testimonials.yaml"
import Image from "./image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Wrapper = styled.div`
  max-width: 800px;
  height: 35rem;
  margin: 3rem auto 2rem;

  @media (min-width: ${props => props.theme.breakpoints.medium}) {
    height: 25rem;
  }

  blockquote {
    margin: 0;
  }

  .testimonial {
    height: 0;
    position: absolute;
    overflow: hidden;
    visibility: hidden;
    opacity: 0;
    transform: translateX(20px);
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;

    @media (min-width: ${props => props.theme.breakpoints.large}) {
      grid-template-columns: 100px 1fr;
    }

    p {
      margin-left: 2rem;
      font-size: 2rem;
      font-weight: ${props => props.theme.font.thin};
      color: ${props => props.theme.colors.black};
    }
  }
  .testimonial.active {
    height: 100%;
    opacity: 1;
    display: grid;
    position: relative;
    visibility: visible;
    transform: translateX(0);
    transition: transform 0.5s ease-out;
  }

  .dots {
    display: flex;
    padding: 1rem;
    justify-content: center;
    align-items: center;
  }
  .dot {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 1rem;
    border: none;
    background: ${props =>
      props.current
        ? props.theme.colors.darkGrey
        : props.theme.colors.lightGrey};

    &:hover,
    &.active {
      background: ${props => props.theme.colors.darkGrey};
      cursor: pointer;
    }
  }
`
const StyledIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.colors.darkGrey};
  margin: 1rem;
`
const Testimonials = () => {
  const testimonials = YAMLData.testimonials

  // set current index
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef(currentIndex)
  intervalRef.current = currentIndex

  function showCurrent(selector) {
    const elements = document.querySelectorAll(selector)

    elements.forEach(e =>
      e.dataset.index === currentIndex.toString()
        ? e.classList.add("active")
        : e.classList.remove("active")
    )
  }
  // update current index
  const handleClick = e => {
    setCurrentIndex(parseInt(e.target.dataset.index))
  }

  // eslint-disable
  useEffect(() => {
    // get .dots div
    // create dot button for each testimonial
    const dotsDiv = document.querySelector(".dots")

    for (let i = 0; i < testimonials.length; i++) {
      const dot = document.createElement("button")
      dot.classList.add("dot")
      dot.dataset.index = i
      dot.setAttribute("aria-label", `Testimonial ${i + 1}`)
      dot.addEventListener("click", handleClick)
      dotsDiv.appendChild(dot)
    }
  }, []) // eslint-disable-line

  // show adequte testimonial and corresponding dot
  useEffect(() => {
    showCurrent("blockquote")
    showCurrent(".dot")
  }, [currentIndex]) // eslint-disable-line

  useEffect(() => {
    const timer = setInterval(() => {
      if (intervalRef.current < testimonials.length - 1) {
        setCurrentIndex(c => c + 1)
      } else {
        setCurrentIndex(0)
      }
    }, 5000)
    return () => clearInterval(timer)
  }, []) // eslint-disable-line

  return (
    <Wrapper>
      {testimonials.map((testimonial, index) => (
        <blockquote className="testimonial" data-index={index} key={index}>
          <Image
            filename={testimonial.img}
            alt={testimonial.name}
            style={{
              maxHeight: "100px",
              maxWidth: "100px",
              borderRadius: "50%",
            }}
          />
          <p>
            <StyledIcon icon="quote-left" />
            {testimonial.text}
          </p>
        </blockquote>
      ))}
      <div className="dots"></div>
    </Wrapper>
  )
}

export default Testimonials
