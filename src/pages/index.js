import React, { useEffect } from "react"
import Layout from "../components/layout"
import Home from "../components/home"
import Services from "../components/services"
import About from "../components/about"
import Portfolio from "../components/portfolio"
import Team from "../components/team"
import Pricing from "../components/pricing"
import Contact from "../components/contact"
const IndexPage = () => {
  // Set up Intersection Observer to implement active navigation:
  useEffect(() => {
    // get sections to observe
    const sections = document.querySelectorAll("section")
    // get all nav links elements
    const navLinks = document.querySelectorAll(".large-display nav a")
    let observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            // check on which section we are in
            // add class .activeNav to nav link with that target name
            // otherwise remove .activeNav class from that element
            navLinks.forEach(link => {
              return link.innerText.toLowerCase() === entry.target.id
                ? link.classList.add("activeNav")
                : link.classList.remove("activeNav")
            })
          }
        })
      },
      { threshold: 0.55 }
    )

    sections.forEach(section => {
      observer.observe(section)
    })
  }, [])

  // change header styles depending on its position
  useEffect(() => {
    // get h1 element on home section
    const heroText = document.querySelector("#home h1")
    const header = document.querySelector("header")

    const observerOptions = {
      rootMargin: "-200px 0px 0px 0px",
    }

    const heroTextObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          header.classList.add("activeHeader")
        } else {
          header.classList.remove("activeHeader")
        }
      })
    }, observerOptions)

    heroTextObserver.observe(heroText)
  }, [])

  return (
    <Layout>
      <Home />
      <Services />
      <About />
      <Portfolio />
      <Team />
      <Pricing />
      <Contact />
    </Layout>
  )
}

export default IndexPage
