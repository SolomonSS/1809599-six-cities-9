import {DataProcess} from '../../../types/state';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../../utils/const';

const initialState: DataProcess = {
  currentOffer: null,
  offers: [],
  reviews: [],
  nearbyOffers: [],
  isDataLoaded: false,
  favoriteOffers: [],
  isOfferLoaded: false,
};

export const dataProcess = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    loadOffers: (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    },
    loadOffer: (state, action) => {
      state.currentOffer = action.payload;
      state.isOfferLoaded = true;
    },
    loadComments: (state, action) => {
      state.reviews = action.payload;
    },
    loadNearby: (state, action) => {
      state.nearbyOffers = action.payload;
    },
    updateOffer: (state, action) => {
      const {id} = action.payload;
      const index = state.offers.findIndex((offer)=>offer.id === id);
      state.offers[index].isFavorite = action.payload.isFavorite;
    },
    loadFavorites: (state, action) => {
      state.favoriteOffers = action.payload;
    },
    resetOfferLoaded:(state)=>{
      state.isOfferLoaded = false;
    },
  },
});

export const {loadOffers, loadOffer, loadComments, loadNearby, updateOffer, loadFavorites, resetOfferLoaded} = dataProcess.actions;
