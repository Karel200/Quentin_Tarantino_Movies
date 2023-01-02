import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Movie from "../../components/Movie"
import {AllMovies}   from "../page.module.css";



const MoviesPage = ({
    data: {
        allWpMovie: { edges },
      
    },
  }) => {
    return (
        <Layout pageTitle="Movies">
            <div className={AllMovies}>
              {edges.map(({ node: movie }) => (
                <Movie key={movie.id} movie={movie} slug={movie.slug} />
              ))}
            </div>

        </Layout>
    )
}



export const query = graphql`
query MyQuery {
  allWpMovie {
    edges {
      node {
        movieMeta {
          title
          poster {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
            altText
          }
        }
        slug
        id
      }
    }
  }
}
`
export default MoviesPage;