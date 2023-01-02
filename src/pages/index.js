import * as React from "react"
import { Link,graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Movie from "../components/Movie"
import {
  Homediv,
  Homeintroduction,
  Homeintroductiondivs,
  homeimg,
  homeMovies
}from "./page.module.css"



const IndexPage = ({
  data: {
    wpPage: { homeFields },
  },
}) => { 
  const image = getImage(homeFields.picture.localFile)
  return(
  <Layout>
    <div className={Homediv}>
      <div className={Homeintroduction }>
        <div className={Homeintroductiondivs }>
          <h2>{homeFields.title}</h2>
          <p>{homeFields.summary}</p>
        </div>
        <div className={Homeintroductiondivs }>
          <GatsbyImage
            image={image}
            className={homeimg}
            alt={homeFields.picture.altText}
          />
        </div>
      </div>
      <div className={homeMovies}>
        {homeFields.movies.map((movie) => <Movie key={movie.id}  movie={movie} slug={movie.slug} /> )}
      </div>
    </div>
  </Layout>
)}

export const query = graphql`
query myQueryAndMyQuery  {
  wpPage(slug: {eq: "home"}) {
    homeFields {
      title
      summary
      picture {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        altText
      }
      movies {
        ... on WpMovie {
          id
          slug
          movieMeta {
            title
            poster {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  }
}

`

export default IndexPage
