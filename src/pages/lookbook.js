import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import Nod from '../components/nod';
import pdfFile from '../../static/Presentacion31.pdf';

export default function SanBenedetto({data: {images}}) {

  return <Layout header={' LOOK BOOK Y MOODBOARD'} next={"/backtoblack/"}>
    <Nod title={'LOOK BOOK Y MOODBOARD'}/>
    <a className="h5 general-text" href={pdfFile} download="Presentacion31.pdf"> 
      PDF LOOK BOOK
    </a>
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
      <div className="col-xl-6 col-md-6 col-lg-6 col-sm-12 col-xs-6">
        <GatsbyImage image={getImage(images.nodes[5])} alt="lookbook-image" />
      </div>
      <div className="col-xl-6 col-md-6 col-lg-6 col-sm-12 col-xs-6">
        <GatsbyImage image={getImage(images.nodes[9])} alt="lookbook-image" />
      </div>
    </div>

    <div className="row project-gallery" id="fc-pics-container">
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6">
        <GatsbyImage image={getImage(images.nodes[13])} alt="lookbook-image" />
      </div>
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6">
        <GatsbyImage image={getImage(images.nodes[15])} alt="lookbook-image" />
      </div>
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6">
        <GatsbyImage image={getImage(images.nodes[16])} alt="lookbook-image" />
      </div>
    </div>

    <div className="row project-gallery" id="fc-pics-container" >
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6">
          <GatsbyImage image={getImage(images.nodes[10])} alt="lookbook-image"/>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6">
          <GatsbyImage image={getImage(images.nodes[11])} alt="lookbook-image"/>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6">
            <GatsbyImage image={getImage(images.nodes[12])} alt="lookbook-image"/>
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