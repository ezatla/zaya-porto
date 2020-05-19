import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const url = `https://www.instagram.com/graphql/query/?query_hash=0f318e8cfff9cc9ef09f88479ff571fb&variables={"id":"2978612076", "first":12}`

const newUrl = `https://www.instagram.com/graphql/query/?query_hash=ad99dd9d3646cc3c0dda65debcd266a7&variables={"id":"612076"}`

const profileUrl = `https://www.instagram.com/graphql/query/?query_hash=ad99dd9d3646cc3c0dda65debcd266a7&variables={"user_id":"2978612076","include_chaining":true,"include_reel":true,"include_suggested_users":true,"include_logged_out_extras":false,"include_highlight_reels":true,"include_related_profiles":false,"include_live_status":true,"first":2}`

const lastUrl = `https://www.instagram.com/graphql/query/?query_hash=9dcf6e1a98bc7f6e92953d5a61027b98&variables={"id":"1534872938","first":6}`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>

    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
