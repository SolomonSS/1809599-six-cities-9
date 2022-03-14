import Layout from '../layout';
import {AppScreenProps} from '../../types/types';
import Cards from '../cards/cards';
import Map from '../map/map';
import {useState} from 'react';
import {CardMods, MapMods} from '../../utils/const';
import Cities from '../cities/cities';
import useFilter from '../../utils/utils';
import {getCity} from '../../store/selectors';
import {useSelector} from 'react-redux';


function MainScreen({offers}: AppScreenProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<number|null>(null);
  const handleOnMouseOver = (id:number|null)=>setActiveCard(id);
  const currentCity = useSelector(getCity);
  return (
    <Layout>
      <div className="page page--gray page--main">
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <Cities/>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{useFilter(currentCity).length} places to stay in {currentCity}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                  Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                <div className="cities__places-list places__list tabs__content">
                  <Cards handleOnMouseOver={handleOnMouseOver} selectedOffer={activeCard} offers={useFilter(currentCity)} mode={CardMods.Main}/>
                </div>
              </section>
              <div className='cities__right-section'>
                <Map city={offers[0].city} offers={useFilter(currentCity)} selectedOffer={activeCard} mode={MapMods.MainScreen}/>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default MainScreen;
