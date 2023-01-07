import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import {
  moviePage
} from "../page.module.css"



const MoviesPage = ({
    data: {
      wpMovie: {
        movieMeta: movie,

      },
    },
  }) => {
   
    return (
        <Layout pageTitle="Artist Template">
          <section className={moviePage}>
            <p>{movie.title}</p>
            <p>{movie.description}</p>
            <p>{movie.directedBy}</p>
            <p>{movie.releaseDate}</p>
          </section>
            
        </Layout>
    )
}

export const query = graphql`
query   ($slug: String) {
    wpMovie (slug: {eq: $slug})  {
        movieMeta {
            title
            description
            genres {
                name
            }
            directedBy
            producerBy
            releaseDate
            time
            writtenBy
            trailer
            poster {
                localFile {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                }
            }
                altText
            }
            mainActors
            }
            slug
            id
        }
    }
`

export default MoviesPage;