import * as React from "react"
import PropTypes from "prop-types"
import {
    footer,
  } from "./footer.module.css"

const Footer = ({ siteTitle }) =>{
    return(
        <div className={footer}>
            <p>{siteTitle}</p>
            <p> © {new Date().getFullYear()} &middot; Built with {` `}<a href="https://www.gatsbyjs.com">Gatsby</a></p>
        </div>
    );
}

Footer.propTypes = {
    siteTitle: PropTypes.string,
  }
Footer.defaultProps = {
    siteTitle: ``,
}
  
export default Footer