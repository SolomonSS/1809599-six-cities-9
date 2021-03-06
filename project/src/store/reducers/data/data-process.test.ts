import {dataProcess, loadComments, loadFavorites, loadNearby, loadOffer, loadOffers} from './data-process';
import {makeFakeOffers, makeFakeReviews} from '../../../utils/mocks';

const fakeOffers = makeFakeOffers();
const fakeReviews = makeFakeReviews();


describe('Testing of data-process reducer:', ()=>{
  const state = {offers: [], currentOffer: null, nearbyOffers: [], reviews: [], isDataLoaded: false, favoriteOffers:[], isOfferLoaded: false};
  it('without additional parameters',()=>{
    expect(dataProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'})).toEqual(state);
  });

  it('Load data:', () =>{
    expect(dataProcess.reducer(state, loadOffers(fakeOffers)))
      .toEqual({offers: fakeOffers, currentOffer: null, nearbyOffers: [], reviews: [], isDataLoaded: true, favoriteOffers:[], isOfferLoaded: false});
  });

  it('Load reviews:', ()=>{
    expect(dataProcess.reducer(state, loadComments(fakeReviews)))
      .toEqual({offers: [], currentOffer: null, nearbyOffers: [], reviews: fakeReviews, isDataLoaded: false, favoriteOffers:[], isOfferLoaded: false});
  });

  it('Load offer:', ()=>{
    expect(dataProcess.reducer(state, loadOffer(fakeOffers[0])))
      .toEqual({offers: [], currentOffer: fakeOffers[0], nearbyOffers: [], reviews: [], isDataLoaded: false, favoriteOffers:[], isOfferLoaded: true});
  });

  it('Load nearby:', ()=>{
    expect(dataProcess.reducer(state, loadNearby(fakeOffers)))
      .toEqual({offers: [], currentOffer: null, nearbyOffers: fakeOffers, reviews: [], isDataLoaded: false, favoriteOffers:[], isOfferLoaded: false});
  });

  it('Load favorites:', ()=>{
    expect(dataProcess.reducer(state, loadFavorites(fakeOffers)))
      .toEqual({offers: [], currentOffer: null, nearbyOffers: [], reviews: [], isDataLoaded: false, favoriteOffers:fakeOffers, isOfferLoaded: false});
  });
});
