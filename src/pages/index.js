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
  useEffect(() => {
    // Set up Intersection Observer to implement active navigation:
    // get sections to observe
    const sections = document.querySelectorAll("section")
    console.log(sections)
    // get all nav links elements
    const navLinks = document.querySelectorAll(".large-display nav a")
    console.log(navLinks)
    let observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            // check on which section we are in
            // add class .active to nav link with that target name
            // otherwise remove .active class from that element
            navLinks.forEach(link => {
              return link.innerText.toLowerCase() === entry.target.id
                ? link.classList.add("activeNav")
                : link.classList.remove("activeNav")
            })
          }
          console.log("entered in:", entry.target.id)
        })
      },
      { threshold: 0.55 }
    )

    sections.forEach(section => {
      observer.observe(section)
    })
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
