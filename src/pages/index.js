import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Content from "../components/Content"
import Reviews from "../components/Reviews"
import Closing from "../components/Closing"
import Features from "../components/Features"

import "../scss/index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Content />
    <Features />
    <Reviews />
    <Closing />
  </Layout>
)

export default IndexPage
