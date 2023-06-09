import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';
import Nod from '../components/nod';

export default function SanBenedetto({data: {images}}) {
   return <Layout header={'Sastreria desestructurada'} next={"/lookbook/"}>
    <Nod title={"sastreria"}/>
    <p className="h5 general-text">
      En esta colección Néstor Osuna nos presenta un tipo de Sastrería poco común pero más
      adaptada a los tiempos de hoy, una Sastrería Desestructurada y a su vez sin género.
      Desestructurar algo significa hacer perder una estructura o no tener una estructura
      definida.Sin seguir ningún tipo de protocolo, reglas o normas formales, Néstor nos propone un
      traje o un Traje de Chaqueta sin esa estructura que los hace rígidos e incomodos, dándole
      a su vez naturalidad, espontaneidad y sencillez, reconciliando la innovación con la
      tradición.
      Al dejar las técnicas tradicionales de la sastrería, cuidando la línea del hombro en los
      sacos, Néstor combina nuevos materiales y formas, obteniendo así el look perfecto.
    </p>
    <div className="row align-content-center mt-5 p-0">
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 p-0 m-0">
        <img src={images.nodes[0].publicURL} alt="" className="sastreria-img px-5"/>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 p-0 m-0">
        <img src={images.nodes[1].publicURL} alt="" className="sastreria-img px-5"/>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 p-0 m-0">
        <img src={images.nodes[2].publicURL} alt="" className="sastreria-img px-5"/>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 p-0 m-0">
        <img src={images.nodes[3].publicURL} alt="" className="sastreria-img px-5"/>
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