import React from 'react';
import Layout from '../components/Layout';
import {Link} from 'gatsby';
import Nod from '../components/nod';
import '/src/images/logoNestor.png';

export default function Home() {

  const pages = [
    {
      label: 'BIOLUMINISCENIA',
      path: '/cj/'
    },
    {
      label: 'SASTREIA DESESTRUCTURADA-ONGOING',
      path: '/golfodeltigullio/'
    },
    {
      label: 'COLECCIÓN THE COVEN: LOOK BOOK Y MOODBOARD',
      path: "/faithconnexion/"
    },
    {
      label: 'BACK TO BLACK',
      path: "/thestripedshop/"
    },
  ]
  return <Layout hideNavigation>
    <Nod title={"Portfolio"}/>
    <header className="row py-3">
      <h1 className={'h3 col-6'} style={{lineHeight: '1', fontWeight: 1000}}></h1>
      <div className="col align-self-center text-right">
        <Link to={'/about'}>about</Link>
      </div>
    </header>
    <div className="row">
      <div className="col-12 col-lg-6 border border-dark border-left-0
        border-bottom-0 d-flex flex-column justify-content-between"
           style={{minHeight: '65vh'}}>
        <div className={''}>
        <img className='logo' src={require('/src/images/logoNestor.png').default} />
        </div>
      </div>
      <nav className="col-12 col-lg-6 offset-lg-6">
        <ul className="list-unstyled projects-list">
          {pages.map(({label, path}) =><li key={path} className={"h2 border-bottom border-dark pt-4"}>
            <Link to={path}>{label}</Link>
          </li>)}
        </ul>
      </nav>
    </div>

  </Layout>;
}