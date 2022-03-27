import {DataProcess} from "../../../types/state";
import {createSlice} from "@reduxjs/toolkit";
import {NameSpace} from "../../../utils/const";

const initialState: DataProcess = {
  currentOffer: null,
  offers: [],
  reviews: [],
  nearbyOffers: [],
  isDataLoaded: false,
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
    },
    loadComments: (state, action) => {
      state.reviews = action.payload;
    },
    loadNearby: (state, action) => {
      state.nearbyOffers = action.payload;
    },
  },
})

export const {loadOffers, loadOffer, loadComments, loadNearby} = dataProcess.actions;
