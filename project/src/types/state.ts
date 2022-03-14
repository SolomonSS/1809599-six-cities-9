import {store} from '../store';

import {Offers} from './types';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type InitialState = {
  city: string,
  offers: Offers,
  authorizationStatus: boolean,
  fetchStatus: boolean
};
