import React from "react"
import SEO from "../components/seo"
import Instagram from "../components/instagram"
import Unsplash from "../components/unsplash"
import styled from 'styled-components'


const ErrorWrapper = styled.div`
padding: 10rem;
color: #757575;
text-align: center;
`;
class ErrorBoundary extends React.Component {

  state = {
    error: null
  }
  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <ErrorWrapper>
          <h3>Something went wrong!</h3>
        </ErrorWrapper>
      )
    }
    return this.props.children
  }
}

const IndexPage = () => {
  return (
    <>
      <SEO title="Work" />
      <ErrorBoundary>
        <Unsplash></Unsplash>
      </ErrorBoundary>

    </>
  )
}

export default IndexPage
