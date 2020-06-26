import React from "react"
import Layout from "../components/layout"
import Home from "../components/home"
import Services from "../components/services"
import About from "../components/about"
import Portfolio from "../components/portfolio"

const IndexPage = () => (
  <Layout>
    <Home />
    <Services />
    <About />
    <Portfolio />
  </Layout>
)

export default IndexPage
