import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { createGlobalStyle } from "styled-components"

import Header from "./header"
import Footer from "./Footer"
import { Normalize } from "styled-normalize"

import "./layout.css"
// Global Style
export const GlobalStyles = createGlobalStyle`


/* Google Font */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');


*, *:before, *:after {
    box-sizing: border-box;
  }

html, body {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    transition:all .3s ease-in-out; 
   	-o-transition:all .3s ease-in-out; 
   	-moz-transition:all .3s ease-in-out; 
   	-webkit-transition:all .3s ease-in-out;
     background: #fcfcfc;
  }
ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
  color: #141414;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  vertical-align: middle;
}
img{
  margin-bottom: initial;
}
.isScrolled {
    height: 7%;
  }

  
/* normalize */
${Normalize}
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1200,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
