import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import Nod from '../components/nod';

export default function TheStripedShop({data: {images}}) {
  return <Layout header={'Back to Black'}>
    <Nod title={'Back to Black'}/>
    <p>
      Back to black. Its essence is deeply connected with the theme of the
      journey; starting from finding it, a special treasure hunt organized to
      celebrate the opening!
    </p>

    <div className="row  justify-content-center project-gallery">
      <div className="col-12 col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[3])}/>
      </div>
      <div className="col-12 col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[5])}/>
      </div>
      <div className="col-12 col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[13])}/>
      </div>
      <div className="col-12 col-md-6">
        <GatsbyImage
            image={getImage(images.nodes[1])}/>
      </div>

      <div className="col-12 col-md-6">
        <GatsbyImage
            image={getImage(images.nodes[6])}/>
      </div>

      <div className="col-12 col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[10])}/>
      </div>

      <div className="col-12 col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[7])}/>
      </div>

      <div className="col-12 col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[2])}/>
      </div>

      <div className="col-12 col-md-6">
        <GatsbyImage
            image={getImage(images.nodes[8])}/>
      </div>
      <div className="col-12 col-md-6">
        <GatsbyImage
            image={getImage(images.nodes[13])}/>
      </div>

      <div className="col-12 col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[4])}/>
      </div>

      <div className="col-12 col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[12])}/>
      </div>

      <div className="col-12 col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[14])}/>
      </div>
      <div className="col-12 col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[13])}/>
      </div>
    </div>
  </Layout>;
}

export const query = graphql`{
    images: allFile(
        filter: {relativePath: {regex: "/bb_(.*)/i"}}
        sort: {order: ASC, fields: relativePath}
    ) {
        nodes {
            id
            relativePath
            childImageSharp {
                gatsbyImageData(
                    layout: CONSTRAINED
                    quality: 100
                )
            }
            publicURL
        }
    }
}
`;