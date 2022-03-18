import Layout from '../layout';
import Cards from '../cards/cards';
import Map from '../map/map';
import {useState} from 'react';
import {CardMods, MapMods, SortTypes} from '../../utils/const';
import Cities from '../cities/cities';
import {getCity, getOffers} from '../../store/selectors';
import {useSelector} from 'react-redux';
import Sort from '../sort/sort';
import sortOffers from '../../utils/utils';

function MainScreen(): JSX.Element {
  const [activeCard, setActiveCard] = useState<number|null>(null);
  const handleOnMouseOver = (id:number|null)=>setActiveCard(id);
  const currentCity = useSelector(getCity);
  const [sortType, setSortType] = useState<string>(SortTypes.POPULAR);
  const setNewSortType = (newSort:string) => setSortType(newSort);
  const sortedOffers = sortOffers(useSelector(getOffers), sortType);
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
                <b className="places__found">{useSelector(getOffers).length} places to stay in {currentCity}</b>
                <Sort activeSortType={sortType} setSortType={setNewSortType}/>
                <div className="cities__places-list places__list tabs__content">
                  <Cards handleOnMouseOver={handleOnMouseOver} offers={sortedOffers} mode={CardMods.Main}/>
                </div>
              </section>
              <div className='cities__right-section'>
                <Map city={useSelector(getOffers)[0].city} offers={useSelector(getOffers)} selectedOffer={activeCard} mode={MapMods.MainScreen}/>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default MainScreen;
