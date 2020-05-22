import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
<<<<<<< HEAD
import Instagram from "../components/instagram"
=======
>>>>>>> 5bae635d2218a13a6c3eb8313c1db49a6707799d

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>

    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Instagram></Instagram>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
