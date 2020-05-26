const React = require("react")
const Layout = require("./src/components/layout").default
const GlobalStyles = require("./src/components/layout").GlobalStyles
const PortProvider = require("./src/context/portContext").PortProvider

exports.wrapPageElement = ({ element, props }) => (
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  <>
    <GlobalStyles />

    <PortProvider>
      <Layout {...props}>{element}</Layout>
    </PortProvider>
  </>
)
