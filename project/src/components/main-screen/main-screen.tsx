import Layout from '../layout';
import Cards from '../cards/cards';
import Map from '../map/map';
import {useCallback, useState} from 'react';
import {CardMods, MapMods, SortTypes} from '../../utils/const';
import Cities from '../cities/cities';
import Sort from '../sort/sort';
import sortOffers from '../../utils/utils';
import {useAppSelector} from '../../hooks';
import MainScreenEmpty from '../main-screen-empty/main-screen-empty';

function MainScreen(): JSX.Element {
  const [activeCard, setActiveCard] = useState<number|null>(null);
  const handleOnMouseOver = useCallback((id:number|null)=>setActiveCard(id),[]);
  const {activeCity} = useAppSelector((({SURF}) => SURF));
  const {offers} = useAppSelector((({DATA}) => DATA));
  const filteredOffers = offers.filter((offer)=>offer.city.name === activeCity);
  const [sortType, setSortType] = useState<string>(SortTypes.POPULAR);
  const setNewSortType = (newSort:string) => setSortType(newSort);
  const sortedOffers = sortOffers(filteredOffers, sortType);
  if(offers.length === 0){
    return <MainScreenEmpty/>;
  }
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
                <b className="places__found">{filteredOffers.length} places to stay in {activeCity}</b>
                <Sort activeSortType={sortType} setSortType={setNewSortType}/>
                <div className="cities__places-list places__list tabs__content">
                  <Cards handleOnMouseOver={handleOnMouseOver} offers={sortedOffers} mode={CardMods.Main}/>
                </div>
              </section>
              <div className='cities__right-section'>
                <Map city={filteredOffers[0].city} offers={filteredOffers} selectedOffer={activeCard} mode={MapMods.MainScreen}/>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default MainScreen;
