import * as React from "react"
import { Link,graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Movie from "../components/Movie"
import {
  Homediv,
  Homeintroduction,
  Homeintroductiondivtext,
  Homeintroductiondivimg,
  homeimg,
  homeMovies
}from "./page.module.css"



const AboutPage = ({
  data: {
    wpPage: { aboutUsFields },
  },
}) => { 
  const image = getImage(aboutUsFields.summaryPicture.localFile)
  return(
  <Layout>
    <div className={Homediv}>
      <div className={Homeintroduction }>
        <div className={Homeintroductiondivtext }>
          <h2>{aboutUsFields.aboutTitle}</h2>
          <p>{aboutUsFields.summary}</p>
        </div>
        <div className={Homeintroductiondivimg }>
          <GatsbyImage
            image={image}
            className={homeimg}
            alt={aboutUsFields.summaryPicture.altText}
          />
        </div>
      </div>
    </div>
  </Layout>
)}

export const query = graphql`
query myQueryAndMyQueryAndMyQueryAndMyQuery  {
    wpPage(slug: {eq: "about"}) {
      aboutUsFields {
        aboutTitle
        summary
        summaryPicture {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          altText
        }
        aboutHim
        aboutHimPicture {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          altText
        }
      }
    }
  }

`

export default AboutPage
