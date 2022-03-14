import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {Offers} from '../types/types';
import {APIRoute} from '../utils/const';
import {api} from '../services/api';


export const changeCity = createAction<{ city: string }>('change/city');

export const completeOffers = createAsyncThunk('data/fetchOffers', async () => {
  try {
    const { data } = await api.get<Offers>(APIRoute.OFFERS);
    return data;
  } catch (err) {
    throw err;
  }
});
