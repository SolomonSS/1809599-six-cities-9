import {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import Layout from '../layout';
import {PropsType} from '../../types/types';
import Cards from '../cards/cards';

function Favorites({offers}: PropsType) {
  const [activeCard, setActiveCard] = useState<number|null>(null);
  const handleOnMouseOver = (id:number|null)=>setActiveCard(id);
  return (
    <Fragment>
      <Layout>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link className="locations__item-link" to="#">
                        <span>Amsterdam</span>
                      </Link>
                    </div>
                  </div>
                  <div className="favorites__places">
                    <Cards handleOnMouseOver={handleOnMouseOver} selectedOffer={activeCard} offers={offers}/>
                  </div>
                </li>

                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link className="locations__item-link" to="#">
                        <span>Cologne</span>
                      </Link>
                    </div>
                  </div>
                  <div className="favorites__places">
                    <Cards handleOnMouseOver={handleOnMouseOver} selectedOffer={activeCard} offers={offers}/>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </main>
      </Layout>
      <footer className="footer container">
        <Link className="footer__logo-link" to='/'>
          <img className="footer__logo" src='img/logo.svg' alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </Fragment>);
}

export default Favorites;
