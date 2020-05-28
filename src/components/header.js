import React, { useLayoutEffect, useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

import Social from "./social"

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  background: #fff;
  height: 10%;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1rem 2rem;
  text-decoration: none;
  transition: all 0.4s ease-in-out;
  top: 0;
  background: #fafafa;

  & .logo_nav {
    display: flex;
    flex-grow: 1;
    justify-content: flex-start;
    h2 {
      font-size: 22px;
      letter-spacing: 2px;
    }
  }

  & .main_nav {
    display: flex;
    justify-content: center;
    flex-grow: 6;

    .menu_nav {
      text-align: center;
      ul > li {
        display: inline-block;
        margin-right: 20px;
        & .is-active::after {
          content: "";
          display: block;
          margin: 0 auto;
          width: 50%;
          padding-top: 7px;
          border-bottom: 1px solid black;
        }
      }
    }
  }

  @media all and (max-width: 440px) {
    & .social {
      display: none;
    }
  }
`

const Header = ({ siteTitle }) => {
  const [scrolled, setScrolled] = useState(0)
  const handleScroll = e => {
    setScrolled(window.scrollY)
  }

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header>
      <HeaderWrapper className={scrolled > 250 ? "isScrolled" : ""}>
        <div className="logo_nav">
          <h2>
            <Link to="/">{siteTitle}</Link>
          </h2>
        </div>
        <div className="main_nav">
          <div className="menu_nav">
            <ul>
              <li>
                <Link to="/" activeClassName="is-active">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/about" activeClassName="is-active">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="social">
          <Social />
        </div>
      </HeaderWrapper>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
