import React, { ReactElement } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

type ImageProps = {
  fileName: string
  alt: string
}

function Image(props: ImageProps): ReactElement {
  const { fileName } = props

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ef.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (fileName) {
    return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
  }
  return <div />
}

export default Image
