import React from "react"
import Sect from "../components/main.module.scss"

import { graphql } from "gatsby"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div className={Sect.blog}>
      <div className={Sect.blogPost}>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className={Sect.blogPostContent}
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        path
        title
      }
    }
  }
`
