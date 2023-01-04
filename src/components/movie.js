import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  wrapper,
  image,
} from "./movie.module.css"

// Movie Component

const Movie = ({ movie, slug }) => {
     const poster = getImage(movie.movieMeta.poster.localFile)
    return (
        <Link className={wrapper}  to={slug}>
          <GatsbyImage
          className={image}
          image={poster}
          alt={movie.movieMeta.poster.altText}
          />
        </Link>
      
    )
}
  
export default Movie