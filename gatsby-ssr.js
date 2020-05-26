const React = require("react")
// default fixess issues with build of pages
const Layout = require("./src/components/layout").default

exports.wrapPageElement = ({ element, props }) => (
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  <Layout {...props}>{element}</Layout>
)
