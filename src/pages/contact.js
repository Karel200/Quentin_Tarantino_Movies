import * as React from "react"
import { Link,graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import {
  contactdiv,
  contactsite,
  contactinfo,
  contactinfotext,
  contactinfoimg,
  contactimg,
  contactspan,
  form,
}from "./page.module.css"



const ContactPage = ({
  data: {
    wpPage: { contactUsFields },
  },
}) => { 
  const siteimage = getImage(contactUsFields.picture.localFile)
  return(
  <Layout>
    <div className={contactdiv}>
      <div className={contactsite}>
          <h2>{contactUsFields.title}</h2>
          <div className={contactinfo }>
            <div className={contactinfotext }>
              <p>{contactUsFields.description}</p>
              <p><span className={contactspan} >Email:  </span> <a  href={`mailto:${contactUsFields.email}`}>{contactUsFields.email}</a></p>
              <p><span className={contactspan}>PhoneNumber:  </span> <a href={`tel:${contactUsFields.phoneNumber}`}>{contactUsFields.phoneNumber}</a></p>
            </div>
            <div className={contactinfoimg }>
              <GatsbyImage
                image={siteimage}
                className={contactimg}
                alt={contactUsFields.picture.altText}
              />
            </div>
          </div>
        </div>
        <section className={form}>
        <form name="contact" method="POST" data-netlify="true">
            <label>First Name:</label>
            <input type="text" name="fname" required={true} />
            <label>Last Name:</label>
            <input type="text" name="lname" required={true} />
            <label>Your Email:</label>
            <input type="email" name="email" required={true} />
            <label>Subject:</label>
            <input type="text" name="subject" required={true} />
            <label>Message:</label>
            <textarea name="message" required={true}></textarea>
            <input type="hidden" name="form-name" value="contact" />
            <button type="submit">Send</button>
        </form>
      </section>
    </div>
  </Layout>
)}

export const query = graphql`
query  {
    wpPage(slug: {eq: "contact"}) {
      contactUsFields {
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
        email
        phoneNumber
      }
    }
  }
  
`

export default ContactPage
