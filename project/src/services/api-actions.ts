import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from './api';
import {Offer} from '../types/types';
import {APIRoute} from '../utils/const';
import {store} from '../store';
import {errorHandle} from './error-handle';
import {loadOffers} from '../store/action';

export const completeOffers = createAsyncThunk('data/fetchOffers', async () => {
  try {
    const { data } = await api.get<Offer[]>(APIRoute.OFFERS);
    store.dispatch(loadOffers(data));
  } catch (err) {
    errorHandle(err);
  }
});

