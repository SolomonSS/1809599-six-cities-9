import {Offer} from '../types/types';
import {CitiesList, SortTypes} from './const';

function sortOffers(offers: Offer[], sortType: string) {
  const newOffers = [...offers];
  switch (sortType) {
    case SortTypes.POPULAR.valueOf():
      return offers;
    case SortTypes.PRICE_LOW_HIGH.valueOf():
      return newOffers.sort(sortByPriceLH);
    case SortTypes.PRICE_HIGH_LOW.valueOf():
      return newOffers.sort(sortByPriceHL);
    case SortTypes.TOP_RATED.valueOf():
      return newOffers.sort(sortByRating);
    default:
      return offers;
  }
}

const sortByPriceLH = (offerA: Offer, offerB: Offer) => offerA.price - offerB.price;
const sortByPriceHL = (offerA: Offer, offerB: Offer) => offerB.price - offerA.price;
const sortByRating = (offerA: Offer, offerB: Offer) => offerB.rating - offerA.rating;

export const getRandomCity = () => CitiesList[Math.floor(Math.random() * CitiesList.length)];

export function isValidPass(password: string): boolean {
  return (/([0-9].*[a-z])|([a-z].*[0-9])/i).test(password);
}

export default sortOffers;
