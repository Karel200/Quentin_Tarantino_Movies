import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Movie from "../../components/Movie"
import {AllMovies}   from "./page.module.css";



const MoviesPage = ({
    data: {
        allWpMovie: { edges },
      
    },
  }) => {
    return (
        <Layout pageTitle="Artists of Inghelbrecht Agency">

            <div className={AllMovies}>
              {edges.map(({ node: movie }) => (
                <Movie  slug={movie.slug} movie={movie} />
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
            description
            directedBy
            genres {
              name
            }
            writtenBy
            producerBy
            releaseDate
            time
            poster {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
              altText
            }
            trailer
          }
        }
      }
    }
  }
`
export default MoviesPage;