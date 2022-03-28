import {Fragment} from 'react';
import Header from '../header/header';
import Cities from '../cities/cities';
import {Link} from 'react-router-dom';

function NotFound(){
  return(
    <Fragment>
      <Header/>
      <Cities/>
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">404. Page not found</b>
            <Link to={'/'}><p>Вернуться на главную</p></Link>
          </div>
        </section>
        <div className="cities__right-section"></div>
      </div>
    </Fragment>
  );
}

export default NotFound;
