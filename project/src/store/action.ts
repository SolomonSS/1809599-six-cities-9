import {createAction} from '@reduxjs/toolkit';
import {Offer, ReviewItem} from '../types/types';
import {AppRoute, AuthorizationStatus} from '../utils/const';

export const changeCity = createAction<{ city: string }>('change/city');
export const loadOffers = createAction<Offer[]>('data/loadOffers');
export const requireAuthorization = createAction<AuthorizationStatus>('user/authorization');
export const setEmail = createAction<string | null>('user/email');
export const redirectToRoute = createAction<AppRoute>('page/redirectToRoute');
export const loadOffer = createAction<Offer>('data/loadOffer');
export const loadComments = createAction<ReviewItem[]>('data/loadComments');
export const loadNearby = createAction<Offer[]>('data/loadNearby');
export const submitingComment = createAction<boolean>('data/submiting');
