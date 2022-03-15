import {State} from '../types/state';

export const getCity = (state:State) => state.city;
export const getOffers = (state:State) => state.offers.filter((offer)=>offer.city.name === state.city);
export const getStatus = (state:State) => state.fetchStatus;
