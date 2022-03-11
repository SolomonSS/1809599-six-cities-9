import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/types';

export const changeCity = createAction<{ city: string }>('change/city');
export const chooseCard = createAction('choose/card');
export const leaveCard = createAction('leave/card');
export const completeOffers = createAction<{offers: Offer[]}>('complete/offers');

