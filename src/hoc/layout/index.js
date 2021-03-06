import * as React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Header from "components/templates/Header"
import Footer from "components/templates/Footer"
import 'src/scss/App.global.scss'

const Layout = ({ children, navigation }) => {
  return (
    <>
      <Header navigation={navigation} />
      <div>
        <main>{children}</main>
      </div>
      <Footer creator={"Saepul Malik"} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
