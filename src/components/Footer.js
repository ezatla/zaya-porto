import React from "react"
import styled from "styled-components"

import Social from "./social"

const Wrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  padding: 1rem;
  position: static;
  bottom: 0;
  width: 100%;
  z-index: 99;
  background: #fcfcfc;
  align-items: baseline;
  .footer-social {
    display: none;
  }

  @media all and (max-width: 440px) {
    justify-content: space-around;
    & .footer-social {
      display: block;
    }
  }
`

const Footer = () => {
  return (
    <Wrapper>
      <footer>{new Date().getFullYear()} &copy;</footer>
      <div className="footer-social">
        <Social />
      </div>
    </Wrapper>
  )
}

export default Footer
