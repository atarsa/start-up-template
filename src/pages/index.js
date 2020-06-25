import React from "react"
import Layout from "../components/layout"
import Home from "../components/home"
import Services from "../components/services"
import About from "../components/about"

const IndexPage = () => (
  <Layout>
    <Home />
    <Services />
    <About />
  </Layout>
)

export default IndexPage
