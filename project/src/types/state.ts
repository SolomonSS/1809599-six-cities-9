import {store} from '../store';
import {Offer, ReviewItem} from './types';
import {AuthorizationStatus} from '../utils/const';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type InitialState = {
  city: string
  offers: Offer[]
  authorizationStatus: AuthorizationStatus
  isDataLoaded: boolean
  email: string | null
  reviews: ReviewItem[]
  currentOffer: Offer | null
  nearbyOffers: Offer[]
  isSubmiting: boolean
};
