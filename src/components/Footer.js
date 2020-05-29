import React from "react"
import styled from "styled-components"

import Social from "./social"

const FooterWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  padding: 1rem;
  position: static;
  bottom: 0;
  width: 100%;
  z-index: 99;
  background: #fafafa;
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
    <FooterWrapper>
      <footer>{new Date().getFullYear()} &copy;</footer>
      <div className="footer-social">
        <Social />
      </div>
    </FooterWrapper>
  )
}

export default Footer
