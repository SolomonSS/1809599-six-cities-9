import {DEFAULT_CITY} from '../utils/const';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, completeOffers} from './action';
import {offers} from '../mocks/offers';

const initialState = {
  city: DEFAULT_CITY,
  offers: offers,
  activeCard:null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {city} = action.payload;
      state.city = city;
    })
    .addCase(completeOffers, (state, action)=>{
      const {offers} = action.payload;
      state.offers = offers;
    });
});
