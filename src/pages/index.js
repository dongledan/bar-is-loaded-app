import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Content from "../components/Content"
import Features from "../components/Features"

import "../scss/index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Content />
    <Features />
  </Layout>
)

export default IndexPage
