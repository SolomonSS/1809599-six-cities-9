import {Link} from 'react-router-dom';
import Cards from '../../cards/cards';
import {CardMods} from '../../../utils/const';
import {Offer} from '../../../types/types';

type FavoriteProps = {
  offers: Offer[],
  city: string
}

function FavoritesItem ({offers, city}: FavoriteProps){
  const filteredOffers = offers.filter((offer)=>offer.city.name ===city && offer.isFavorite);
  if(filteredOffers.length === 0){
    return null;
  }
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="#">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        <Cards offers={filteredOffers} mode={CardMods.Favorite}/>
      </div>
    </li>
  );
}

export default FavoritesItem;
