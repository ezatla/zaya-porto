import React from "react"
import SEO from "../components/seo"
import Instagram from "../components/instagram"

class ErrorBoundary extends React.Component {

  state = {
    error: ''
  }
  static getDerivedStateFromError(error) {
    return { error: error.toSring() }
  }

  render() {
    if (this.state.error) {
      return (
        <div className="text-center">
          <p>Something went wrong</p>
        </div>
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
          <Instagram></Instagram>
      </ErrorBoundary>

    </>
  )
}

export default IndexPage
