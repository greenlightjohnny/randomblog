import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Sect from "./header.module.scss"
const Header = ({ siteTitle }) => (
  <header className={Sect.header}>testing</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
