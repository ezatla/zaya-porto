import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Wrapper = styled.div``

const AboutWrapper = styled.div`
  margin-top: 6rem;
  display: flex;
  & .gatsby-image-wrapper {
    width: 100%;
  }

  & .info {
    margin-left: 30px;
  }
  & .gatsby-image-wrapper {
    margin-left: -30px;
  }

  @media all and (max-width: 668px) {
    flex-wrap: wrap;

    & .gatsby-image-wrapper {
      margin-left: initial;
    }
  }
`

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutMe: markdownRemark(frontmatter: { title: { eq: "about me" } }) {
        html
      }
      profileImg: file(relativePath: { eq: "about.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const { html } = data.aboutMe
  return (
    <Wrapper>
      <AboutWrapper>
        <Img fluid={data.profileImg.childImageSharp.fluid} />
        <div className="info" dangerouslySetInnerHTML={{ __html: html }}></div>
      </AboutWrapper>
    </Wrapper>
  )
}

export default About
