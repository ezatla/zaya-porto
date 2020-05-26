import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Wrapper = styled.div``

const AboutWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  & .gatsby-image-wrapper {
    width: 100%;
  }
`

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      profileImg: file(relativePath: { eq: "about.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aboutMe: markdownRemark(frontmatter: { title: { eq: "about me" } }) {
        html
      }
    }
  `)
  const { html } = data.aboutMe
  return (
    <Wrapper>
      <AboutWrapper>
        <Img fluid={data.profileImg.childImageSharp.fluid} />

        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </AboutWrapper>
    </Wrapper>
  )
}

export default About
