import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import {
  moviediv,
  movieintroduction,
  movieintroductiondivtext,
  movieimg,
  movieInfo
} from "../page.module.css"



const MoviesPage = ({
    data: {
      wpMovie: {
        movieMeta: movie,

      },
    },
  }) => {
    const poster  = getImage(movie.poster.localFile)
    return (
        <Layout pageTitle="Artist Template">
          <section >
          <div className={moviediv}>
          <h2>{movie.title}</h2>
          <div className={movieintroduction }>
            <div className={movieintroductiondivtext }>
              <p><span className={movieInfo} >Description:  </span> <br/>{movie.description}</p>
              <p><span className={movieInfo} >Directed By:  </span>{movie.directedBy}</p>
              <p><span className={movieInfo} >Producer By:  </span>{movie.producerBy}</p>
              <p><span className={movieInfo} >Written By:  </span>{movie.writtenBy}</p>
              <p><span className={movieInfo}>Genres:  </span>{movie.genres.map((genre,i) => ` ${genre.name} `)}</p>
              <p><span className={movieInfo}>time:  </span>{movie.time} min</p>
              <p><span className={movieInfo}>ReleaseDate:  </span>{movie.releaseDate}</p>
            </div>
            <div >
              <GatsbyImage
                image={poster}
                className={movieimg}
                alt={movie.poster.altText}
              />
            </div>
          </div>
        </div>
          </section>
            
        </Layout>
    )
}

export const query = graphql`
query ($slug: String) {
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
            poster {
                localFile {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                }
            }
                altText
            }
            }
            slug
            id
        }
    }
`

export default MoviesPage;