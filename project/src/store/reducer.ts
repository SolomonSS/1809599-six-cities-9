import {AuthorizationStatus, DEFAULT_CITY} from '../utils/const';
import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity,
  loadComments,
  loadNearby,
  loadOffer,
  loadOffers,
  requireAuthorization,
  setEmail,
  submitingComment
} from './action';
import {InitialState} from '../types/state';

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  email: null,
  nearbyOffers: [],
  currentOffer: null,
  reviews: [],
  isSubmiting: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action)=>{
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(changeCity, (state, action) => {
      const {city} = action.payload;
      state.city = city;
    })
    .addCase(requireAuthorization,(state, action)=>{
      state.authorizationStatus = action.payload;
    })
    .addCase(setEmail, (state, action)=>{
      state.email = action.payload;
    })
    .addCase(loadOffer,(state, action)=>{
      state.currentOffer = action.payload;
    })
    .addCase(loadComments,(state, action)=>{
      state.reviews = action.payload;
    })
    .addCase(loadNearby, (state, action)=>{
      state.nearbyOffers = action.payload;
    })
    .addCase(submitingComment, (state, action)=>{
      state.isSubmiting = action.payload;
    });
});
