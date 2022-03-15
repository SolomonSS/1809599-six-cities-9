import {store} from '../store';

import {Offer} from './types';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type InitialState = {
  city: string,
  offers: Offer[],
  authorizationStatus: boolean,
  fetchStatus: boolean,
};
