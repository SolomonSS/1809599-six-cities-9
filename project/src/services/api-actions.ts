import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from './api';
import {AuthData, Offer, UserData} from '../types/types';
import {APIRoute, AppRoute, AuthorizationStatus} from '../utils/const';
import {store} from '../store';
import {errorHandle} from './error-handle';
import {loadOffers, redirectToRoute, requireAuthorization, setEmail} from '../store/action';
import {dropToken, saveToken} from './token';

export const completeOffers = createAsyncThunk('data/fetchOffers', async () => {
  try {
    const {data} = await api.get<Offer[]>(APIRoute.OFFERS);
    store.dispatch(loadOffers(data));
  } catch (err) {
    errorHandle(err);
  }
});

export const checkAuth = createAsyncThunk(
  'user/checkAuth',
  async () => {
    await api.get(APIRoute.LOGIN);
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({email, password}: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.LOGIN, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(setEmail(email));
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.LOGOUT);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      store.dispatch(setEmail(null));
    } catch (error) {
      errorHandle(error);
    }
  },
);
