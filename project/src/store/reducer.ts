import {DEFAULT_CITY} from '../utils/const';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, completeOffers} from './action';
import {InitialState} from '../types/state';

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  fetchStatus: false,
  authorizationStatus:false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {city} = action.payload;
      state.city = city;
    })
    .addCase(completeOffers.fulfilled, (state, action)=>{
      state.fetchStatus = true;
      state.offers = action.payload;
    })
    .addCase(completeOffers.pending, (state)=>{
      state.fetchStatus = false;
    })
    .addCase(completeOffers.rejected, (state)=>{
      state.fetchStatus = false;
    });
});
