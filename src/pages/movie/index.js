import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Movie from "../../components/Movie"
import {
  AllMovies,
  moviesdiv,
  moviesintroduction,
  moviesintroductiondivtext,
  movieisntroductiondivimg,
  moviesimg,

}   from "../page.module.css";



const MoviesPage = ({
    data: {
        wpPage: {moviesFields},
        allWpMovie: { edges },
      
    },
  }) => {
     const moviespicture = getImage(moviesFields.picture.localFile)
    return (
        <Layout pageTitle="Movies">
         <div className={moviesdiv}>
          <h2>{moviesFields.title}</h2>
          <div className={moviesintroduction }>
            <div className={moviesintroductiondivtext }>
              <p>{moviesFields.description}</p>
            </div>
            <div className={movieisntroductiondivimg}>
              <GatsbyImage
                image={moviespicture}
                className={moviesimg}
                alt={moviesFields.picture.altText}
              />
            </div>
          </div>
        </div>
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
  wpPage(slug: {eq: "movies-page"}) {
    moviesFields {
      title
      description
      picture {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        altText
      }
    }
  }
  allWpMovie {
    edges {
      node {
        movieMeta {
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