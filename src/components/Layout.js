import React from 'react';
import '../scss/style.scss';
import Link from 'gatsby-link';
import {Helmet} from 'react-helmet';

export default function Layout({children, header, hideNavigation, next}) {

  return <div className={'container-fluid'}>
    {hideNavigation ||
    <nav className="row pt-5">
      <div className="col px-2">
        <Link to={'/'} className={'pl-0 text-decoration-none'}>
          <img className='logoHeader' alt="logo" src={require('/src/images/logoNestor.png').default} />
        </Link>
      </div>
      {next && next && <div className="col-auto general-text mt-2">
        <Link to={next} className={'text-decoration-none general-text h5  px-3'}>Next →</Link>
      </div>}
    </nav>}
    {header && <header className="row ">
      <div className="col-12 col-md-6 py-3">
        {typeof header === 'string' ?
            <h1 className={'h1'}>{header}</h1> :
            header}
      </div>
    </header>}
    <main>{children}</main>
    <footer className={'row pt-5 pb-3'}>
      <div className="col-9">
        <div className="row">

          <div className="col-12">
            <a className="font-weight-bold general-text h5"
               href="osunanestor@hotmail.com">osunanestor@hotmail.com</a>
          </div>
          <div className="col-4 py-1 general-text h5">
            <a href="https://www.instagram.com/nestorozuna/">Instagram</a><br/>
          </div>
          <div className="col-4 py-1 general-text h5">
            <a href="https://www.linkedin.com/search/results/all/?keywords=nestor%20osuna&origin=RICH_QUERY_SUGGESTION&position=0&searchId=c852b55d-cb19-4a18-93c4-5385011d176e&sid=m)X">Linkedin</a>
          </div>
        </div>
      </div>
      <div className="col align-self-center text-right">
        <a className={'btn btn-text px-3'} onClick={(e) => {
          e.preventDefault();

          window.scrollTo(0, 0);

        }}>
          <span className="text-white general-text h1">&#129145;</span>
        </a>
      </div>
    </footer>
  </div>;
}