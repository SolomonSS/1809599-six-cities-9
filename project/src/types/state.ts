import {store} from '../store';
import {Offer, ReviewItem} from './types';
import {AuthorizationStatus} from '../utils/const';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type SurfProcess = {
  activeCity: string
  email: string | null
  isSubmiting: boolean
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
};

export type DataProcess = {
  offers: Offer[]
  reviews: ReviewItem[]
  currentOffer: Offer | null
  nearbyOffers: Offer[]
  isDataLoaded: boolean
  favoriteOffers: Offer[]
}
