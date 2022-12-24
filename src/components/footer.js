import * as React from "react"
import {
    footer,
  } from "./footer.module.css"

const Footer = () =>{
    return(
        <div className={footer}>
            © {new Date().getFullYear()} &middot; Built with dddddd
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
        </div>
    );
}
export default Footer