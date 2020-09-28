import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Content from "../components/Content"
import Closing from "../components/Closing"
import Features from "../components/Features"

import "../scss/index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Content />
    <Features />
    <Closing />
  </Layout>
)

export default IndexPage
