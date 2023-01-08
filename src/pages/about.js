import * as React from "react"
import { Link,graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import {
  aboutdiv,
  aboutsite,
  abouttarantino,
  tarantinointroduction,
  tarantinointroductiondivtext,
  tarantinointroductiondivimg,
  tarantinoimg,
}from "./page.module.css"



const AboutPage = ({
  data: {
    wpPage: { aboutUsFields },
  },
}) => { 
  const siteimage = getImage(aboutUsFields.summaryPicture.localFile)
  const tarantinoimages = getImage(aboutUsFields.aboutHimPicture.localFile)
  return(
  <Layout>
    <div className={aboutdiv}>
      <div className={aboutsite}>
          <h2>{aboutUsFields.aboutTitle}</h2>
          <div className={tarantinointroduction }>
            <div className={tarantinointroductiondivtext }>
              <p>{aboutUsFields.summary}</p>
            </div>
            <div className={tarantinointroductiondivimg }>
              <GatsbyImage
                image={siteimage}
                className={tarantinoimg}
                alt={aboutUsFields.summaryPicture.altText}
              />
            </div>
          </div>
        </div>
      <div className={abouttarantino}>
        <h2>{aboutUsFields.aboutHimTitle}</h2>
        <div className={tarantinointroduction }>
          <div className={tarantinointroductiondivtext }>
            <p>{aboutUsFields.aboutHim}</p>
          </div>
          <div className={tarantinointroductiondivimg }>
            <GatsbyImage
              image={tarantinoimages}
              className={tarantinoimg}
              alt={aboutUsFields.aboutHimPicture.altText}
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)}

export const query = graphql`
query   {
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
      aboutHimTitle
      aboutHim
      aboutHimPicture {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
}
`

export default AboutPage
