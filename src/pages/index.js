import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Instagram from "../components/instagram"

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />

      <Instagram></Instagram>
    </>
  )
}

export default IndexPage
