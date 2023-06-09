import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import Nod from '../components/nod';

export default function Buluminiscencia({data: {images}}) {

  return <Layout header={'BOLUMINISCENCIA'} next={"/sastreria/"}>
    <Nod title={'BOLUMINISCENCIA'}/>
    
    <div className="row project-gallery">
      <div className="col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[0])}/>
      </div>
      <div className="col-md-4 position-relative">
        <GatsbyImage
          image={getImage(images.nodes[1])}/>
      </div>    
      <div className="col-md-4 position-relative">
        <GatsbyImage
          image={getImage(images.nodes[2])}/>
      </div>
      

      <div className="col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[4])}/>
      </div>
      <div className="col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[6])}/>
      </div>
      <div className="col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[5])}/>
      </div>

      <div className="col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[7])}/>
      </div>
      <div className="col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[8])}/>
      </div>
      <div className="col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[9])}/>
      </div>


      <div className="col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[10])}/>
      </div>
      <div className="col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[11])}/>
      </div>
      <div className="col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[12])}/>
      </div>

      <div className="col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[13])}/>
      </div>
      <div className="col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[13])}/>
      </div>
      <div className="col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[13])}/>
      </div>

    </div>
  </Layout>
}
export const query = graphql`{
    images: allFile(
      filter: {relativePath: {regex: "/bm_(.*)/i"}}
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