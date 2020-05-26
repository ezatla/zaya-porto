import React from "react"
import About from "../components/about"
import styled from "styled-components"

const Wrapper = styled.div`
  /* margin-top: 4rem; */
`

const about = () => {
  return (
    <Wrapper>
      <About></About>
    </Wrapper>
  )
}

export default about
