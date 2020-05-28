import React from "react"
import About from "../components/about"
import styled from "styled-components"
import SEO from "../components/seo"

const Wrapper = styled.div`
  /* margin-top: 4rem; */
`

const about = () => {
  return (
    <Wrapper>
      <SEO title="About" />
      <About></About>
    </Wrapper>
  )
}

export default about
