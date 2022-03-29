import {datatype, internet, lorem} from 'faker';
import {Offer, ReviewItem} from '../types/types';
import {configureMockStore} from "@jedmao/redux-mock-store";
import {AuthorizationStatus, DEFAULT_CITY} from "./const";

const AMOUNT = 3;

export const makeFakeOffers = (amount = AMOUNT, cityName?: string): Offer[] => Array.from(
  Array(amount),
  () => ({
    bedrooms: datatype.number(),
    city: {
      location: {
        latitude: datatype.float(),
        longitude: datatype.float(),
        zoom: datatype.number(),
      },
      name: 'Paris',
    },
    description: lorem.sentence(),
    goods: Array.from(Array(AMOUNT),()=> lorem.word()),
    host:{
      avatarUrl: internet.avatar(),
      id: datatype.number(),
      isPro: datatype.boolean(),
      name: internet.userName(),
    },
    id: datatype.number(),
    images: Array.from(Array(6), () => internet.avatar()),
    isFavorite: datatype.boolean(),
    isPremium: datatype.boolean(),
    location: {
      latitude: datatype.float(),
      longitude: datatype.float(),
      zoom: datatype.number(),
    },
    maxAdults: datatype.number(),
    previewImage: internet.avatar(),
    price: datatype.number(),
    rating: datatype.float(),
    title: lorem.sentence(),
    type: 'hotel',
  }));

export const makeFakeReviews = (amount = AMOUNT): ReviewItem[] => Array.from(
  Array(amount),
  () => ({
    comment: datatype.string(),
    date: datatype.string(),
    id: datatype.number(),
    offerId: datatype.number(),
    rating: datatype.number(),
    user:{
      avatarUrl:internet.avatar(),
      id: datatype.number(),
      isPro: datatype.boolean(),
      name: datatype.string(),
    }
  }));

const mockStore = configureMockStore();

export const fakeStore = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  DATA: {offers: [], currentOffer: null, nearbyOffers: [], reviews: [], isDataLoaded: true, favoriteOffers:[]},
  SURF: {activeCity: DEFAULT_CITY, email:null, isSubmiting: false},
});

