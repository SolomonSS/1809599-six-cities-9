import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/types';
import {AppRoute, AuthorizationStatus} from '../utils/const';

export const changeCity = createAction<{ city: string }>('change/city');
export const loadOffers = createAction<Offer[]>('data/loadOffers');
export const requireAuthorization = createAction<AuthorizationStatus>('user/authorization');
export const setEmail = createAction<string | null>('user/email');
export const redirectToRoute = createAction<AppRoute>('page/redirectToRoute');
