/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Sect from "./layout.module.scss"
import Header from "./header"
import "./layout.css"

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
    <div className={Sect.container}>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div className={Sect.header}>Header</div>
      <div className={Sect.menu}>Menu</div>
      <div className={Sect.content}>Content</div>
      <div className={Sect.footer}>Footer</div>

      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
