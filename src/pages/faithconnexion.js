import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import Nod from '../components/nod';

export default function SanBenedetto({data: {images}}) {

  return <Layout header={'Back to Black'} next={"/thestripedshop/"}>
    <Nod title={'Faith Connexion'}/>
    <p>
      It was very inspiring to be able to create these shots in one's own home,
      it
      really helped me to take into account the spaces and light, trying to get
      shots that could reflect the brand. In this job there was the creation of
      outfits, study of positions, study of environments
    </p>
    <div className="row project-gallery" id="fc-pics-container">
      <div id="fc1">
        <GatsbyImage image={getImage(images.nodes[4])}/>
      </div>
      <div id="fc2">
        <GatsbyImage image={getImage(images.nodes[4])}/>
      </div>
      <div id="fc3">
        <GatsbyImage image={getImage(images.nodes[3])}/>
      </div>
    </div>

    <div className="row project-gallery" id="fc-pics-container">
      <div className="col-6">
        <GatsbyImage image={getImage(images.nodes[5])}/>
      </div>
      <div className="col-6">
        <GatsbyImage image={getImage(images.nodes[9])}/>
      </div>
    </div>

    <div className="row project-gallery" id="fc-pics-container">
      <div id="fc1">
        <GatsbyImage image={getImage(images.nodes[13])}/>
      </div>
      <div id="fc2">
        <GatsbyImage image={getImage(images.nodes[15])}/>
      </div>
      <div id="fc3">
        <GatsbyImage image={getImage(images.nodes[16])}/>
      </div>
    </div>

    <div className="project-gallery">
      <div className="row ">
        <div className="col-4">
          <GatsbyImage image={getImage(images.nodes[10])}/>
        </div>
        <div className="col-4">
          <GatsbyImage image={getImage(images.nodes[11])}/>
        </div>
        <div className="col-4">
            <GatsbyImage image={getImage(images.nodes[12])}/>
        </div>
      </div>
    </div>
  </Layout>;
}
export const query = graphql`{
    images: allFile(
      filter: {relativePath: {regex: "/lt_(.*)/i"}}
      sort: {order: DESC, fields: relativePath}
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