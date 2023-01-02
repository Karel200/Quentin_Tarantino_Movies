import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  headerContainer,
  nav,
  nav_links,
  nav_link,
  nav_link_text,
  nav_link_title,
} from "./header.module.css"

const Header = ({ siteTitle }) => (
  <div className={headerContainer}>
    <nav className={nav} >
          <ul className={nav_links} >
            <li className={nav_link} >
              <Link className={nav_link_text} to="/">
                Home
              </Link>
            </li>
            <li className={nav_link} >
              <Link className={nav_link_text}  to="/movie">
                Movies
              </Link>
            </li>
            <li className={nav_link}>
              <Link className={nav_link_text} to="/about">
                About
              </Link>
            </li>
            <li className={nav_link}>
              <Link className={nav_link_text} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
