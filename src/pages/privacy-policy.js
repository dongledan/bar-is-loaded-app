import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PrivacyPolicy from "../components/PrivacyPolicy"

export default function Privacy() {
  return (
    <Layout>
      <SEO title="Privacy Policy" />
      <PrivacyPolicy />
    </Layout>
  )
}
