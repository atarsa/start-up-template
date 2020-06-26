import React from "react"
import Layout from "../components/layout"
import Home from "../components/home"
import Services from "../components/services"
import About from "../components/about"
import Portfolio from "../components/portfolio"
import Team from "../components/team"
const IndexPage = () => (
  <Layout>
    <Home />
    <Services />
    <About />
    <Portfolio />
    <Team />
  </Layout>
)

export default IndexPage
