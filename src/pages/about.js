import React from "react"
import About from "../components/about"
import styled from "styled-components"
import SEO from "../components/seo"

const AboutWrapper = styled.div`
  /* margin-top: 4rem; */
`

const about = () => {
  return (
    <AboutWrapper>
      <SEO title="About" />
      <About></About>
    </AboutWrapper>
  )
}

export default about
