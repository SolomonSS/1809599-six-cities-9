import {DEFAULT_CITY} from '../utils/const';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers} from './action';
import {InitialState} from '../types/state';

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  fetchStatus: false,
  authorizationStatus:false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action)=>{
      state.offers = action.payload;
      state.fetchStatus = true;
    })
    .addCase(changeCity, (state, action) => {
      const {city} = action.payload;
      state.city = city;
    });
});
