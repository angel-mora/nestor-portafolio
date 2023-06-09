import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import Nod from '../components/nod';

export default function SanBenedetto({data: {images}}) {

  return <Layout header={' LOOK BOOK Y MOODBOARD'} next={"/backtoblack/"}>
    <Nod title={'LOOK BOOK Y MOODBOARD'}/>
    <p className="h5 general-text">
      It was very inspiring to be able to create these shots in one's own home,
      it
      really helped me to take into account the spaces and light, trying to get
      shots that could reflect the brand. In this job there was the creation of
      outfits, study of positions, study of environments
    </p>
    <div className="row project-gallery" id="fc-pics-container">
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6">
        <GatsbyImage image={getImage(images.nodes[18])} alt="lookbook-image" />
      </div>
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6">
        <GatsbyImage image={getImage(images.nodes[4])} alt="lookbook-image" />
      </div>
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6">
        <GatsbyImage image={getImage(images.nodes[3])} alt="lookbook-image" />
      </div>
    </div>

    <div className="row project-gallery" id="fc-pics-container">
      <div className="col-6">
        <GatsbyImage image={getImage(images.nodes[5])} alt="lookbook-image" />
      </div>
      <div className="col-6">
        <GatsbyImage image={getImage(images.nodes[9])} alt="lookbook-image" />
      </div>
    </div>

    <div className="row project-gallery" id="fc-pics-container">
      <div id="fc1">
        <GatsbyImage image={getImage(images.nodes[13])} alt="lookbook-image" />
      </div>
      <div id="fc2">
        <GatsbyImage image={getImage(images.nodes[15])} alt="lookbook-image" />
      </div>
      <div id="fc3">
        <GatsbyImage image={getImage(images.nodes[16])} alt="lookbook-image" />
      </div>
    </div>

    <div className="project-gallery">
      <div className="row ">
        <div className="col-4">
          <GatsbyImage image={getImage(images.nodes[10])} alt="lookbook-image"/>
        </div>
        <div className="col-4">
          <GatsbyImage image={getImage(images.nodes[11])} alt="lookbook-image"/>
        </div>
        <div className="col-4">
            <GatsbyImage image={getImage(images.nodes[12])} alt="lookbook-image"/>
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