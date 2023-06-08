import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import Nod from '../components/nod';

export default function SanBenedetto({data: {images}}) {
   return <Layout header={'Sastreria desestructurada'} next={"/faithconnexion/"}>
     <Nod title={"sastreria"}/>
    <p>
    En esta colección Néstor Osuna nos presenta un tipo de Sastrería poco común pero más
adaptada a los tiempos de hoy, una Sastrería Desestructurada y a su vez sin género.
Desestructurar algo significa hacer perder una estructura o no tener una estructura
definida.Sin seguir ningún tipo de protocolo, reglas o normas formales, Néstor nos propone un
traje o un Traje de Chaqueta sin esa estructura que los hace rígidos e incomodos, dándole
a su vez naturalidad, espontaneidad y sencillez, reconciliando la innovación con la
tradición.
Al dejar las técnicas tradicionales de la sastrería, cuidando la línea del hombro en los
sacos, Néstor combina nuevos materiales y formas, obteniendo así el look perfecto

    </p>
    <p><b></b> </p>
    <p><b></b></p>
    <div className="col align-content-center">
      <div className="col-12">
        <GatsbyImage
          image={getImage(images.nodes[5])}/>
      </div>
      <div className="w-100"></div>
      <div className="col-12">
        <GatsbyImage
          image={getImage(images.nodes[14])}/>
      </div>
      <div className="col-12">
        <GatsbyImage
          image={getImage(images.nodes[13])}/>
      </div>
      <div className="col-12 col-md-6">
        <GatsbyImage
          image={getImage(images.nodes[12])}/>
      </div>
      <div className="col-12 col-md-6">
        <GatsbyImage
          image={getImage(images.nodes[11])}/>
      </div>
      <div className="col-12 col-md-6">
        <GatsbyImage
          image={getImage(images.nodes[7])}/>
      </div>
      <div className="col-12 col-md-6">
        <GatsbyImage
          image={getImage(images.nodes[6])}/>
      </div>
      <div className="w-100"></div>
      <div className="col-12 mx-5 my-5">
        <img src={images.nodes[2].publicURL} alt="" className="img-fluid"/>
      </div>
      <div className="col-12 w-100 mx-5 my-5">
        <img src={images.nodes[0].publicURL} alt="" className="img-fluid"/>
      </div>
      <div className="col-12 w-100 mx-5 my-5">
        <img src={images.nodes[1].publicURL} alt="" className="img-fluid"/>
      </div>
      <div className="col-12">
        <GatsbyImage
            image={getImage(images.nodes[8])}/>
      </div>
      <div className="col-4">
        <GatsbyImage
            image={getImage(images.nodes[10])}  className={"h-100"}  />
      </div>
      <div className="col-12 col-md-8 offset-md-4">
        <GatsbyImage
            image={getImage(images.nodes[9])}/>
      </div>
    </div>
  </Layout>;
}
export const query = graphql`{
    images: allFile(
      filter: {relativePath: {regex: "/sastreria(.*)/i"}}
      sort: {order: DESC, fields: relativePath}
    ) { 
      nodes {
        id
        relativePath
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
        publicURL
      } 
    }
  }
`;