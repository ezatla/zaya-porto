import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FaTwitter, FaFacebook, FaLinkedinIn } from "react-icons/fa"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;

  & > * {
    margin-right: 22px;
  }
`

const Social = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            instagram
          }
        }
      }
    }
  `)
  const { instagram } = data.site.siteMetadata.social

  return (
    <Wrapper>
      <a href={`https://www.instagram.com/${instagram}`}>
        <FaTwitter />
      </a>
      <a href={`https://www.instagram.com/${instagram}`}>
        <FaFacebook />
      </a>
      <a href={`https://www.instagram.com/${instagram}`}>
        <FaLinkedinIn />
      </a>
    </Wrapper>
  )
}

export default Social
