import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Layout from '../layout';
import {CitiesList} from '../../utils/const';
import FavoritesItem from './favorites-item/favorites-item';
import {store} from '../../store';
import {completeFavoriteOffers} from '../../services/api-actions';
import {useAppSelector} from '../../hooks';

function Favorites() {
  store.dispatch(completeFavoriteOffers());
  const {favoriteOffers} = useAppSelector(({DATA})=>DATA);
  return (
    <Fragment>
      <Layout>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {CitiesList.map((city)=><FavoritesItem key={city} offers={favoriteOffers} city={city}/>)}
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
