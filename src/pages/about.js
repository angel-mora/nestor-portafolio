import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';

export default function Home({data: {profile}}) {

  return <Layout
      header={<h1 className={'h3'} style={{lineHeight: 1}}></h1>}>
    <div className="row">
      <div className="col-12 col-lg-8 border-top border-dark ">
        <p className={'pt-4'}>Nació en Sinaloa. En el 2007 se fue a vivir a Paris, una ciudad que ama porque ahi se llena de energía e inspiración. Se fue a aprender un nuevo idioma y a descrubrir su
         cultura pero también con el firme propósito de colaborar en la industria de la moda. "En Paris me siento en mi
         habitat natural, el universo de la moda el cual llevo desarrollando desde hace 15 años" comenta Nestor Osuna.

        Nestor estudió diseño de moda en el Istituto Marangoni en Milán. Consecuentemente trabajó en dos reconocidas
        casas de moda, mila SchÖN, Alessandro dell ́ AcquA & Versus, de donde obtuvó un legado de conocimiento para
        desarrollar una colección, un tiempo de mucho enriquecimiento intelectual que lo llevaron a crear su propia
        marca en México, en donde ahora su nombre es reconocido. Ha participado en diversos shows de la semana de la
        moda en México y a lo largo de su trayectoria también ha incursionado en diversos campos del mundo de la moda.
        "Esta es mi pasión, y esta en todo: make up, hairdressing, photo shooting, editoriales y styling. En otras
        palabras, me encanta este mundo y nada más"

        "Nestor Osuna visualiza la moda como un complemento en la vida, es una simple seducción, una ligera
        sofisticación donde la rutina se vuelve simplemente encantadora" - Harper ́s Bazzar, Mexico

        "Cuando diseño, no tengo límites. Concibo una colección como un registro lógico dentro de una fotografía
        estricta y definida. La libertad de creación y los contrastes que puede haber en una colección no son
        necesariamente antagonistas sino que se refuerzan en el proceso de la elaboración. Estamos en la búsqueda
        constante de un balance crítico. Una colección encuentra este punto y crea un estilo" puntualilza.
        </p>

      </div>
      <div className="col-12 col-lg-4 border-dark border-left " >
        <p className={'small'}>CDMX / Mexico <br/>
          Para más información:<br/>
          <a className="font-weight-bold"
             href="mailto:osunanestor@hotmail.com">osunanestor@hotmail.com</a>
        </p>
        <p className={'small'}>
          <a href="https://www.instagram.com/nestorosuna_">@nestorosuna_</a><br/>
        </p>
      </div>
      <div className="col-12 col-md-8 pt-5">
        <div className="w-50">
          <GatsbyImage alt={'Nestor'}
                       image={getImage(profile)}/>
        </div>
      </div>

      <div className="col-12 col-md border-dark border-left h-100">
        <p className=" font-weight-bold"><a
            href={'/NestorOsuna_Pres2017_LinkstoPress.pdf'} download>Press</a>
          <br/>
        </p>
      </div>

    </div>
  </Layout>;
}

export const query = graphql`{
  profile: file(relativePath: {eq: ""}) {
      id
      relativePath
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
        )
      }
      publicURL
  }
}`;