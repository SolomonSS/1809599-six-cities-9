import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from './api';
import {AuthData, Offer, NewComment, ReviewItem, UserData, CommentData, ChangeStatus} from '../types/types';
import {APIRoute, AppRoute, AuthorizationStatus} from '../utils/const';
import {store} from '../store';
import {errorHandle} from './error-handle';
import {redirectToRoute} from '../store/action';
import {dropToken, saveToken} from './token';
import {
  loadComments,
  loadFavorites,
  loadNearby,
  loadOffer,
  loadOffers,
  updateOffer
} from '../store/reducers/data/data-process';
import {requireAuthorization} from '../store/reducers/user-process/user-process';
import {setEmail, submitingChangeStatus, submitingComment} from '../store/reducers/surf-process/surf-process';

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
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const completeOffer = createAsyncThunk(
  'data/loadOffer',
  async (id: number)=>{
    try {
      const {data} = await api.get<Offer>(`${APIRoute.OFFERS}/${id}`);
      store.dispatch(loadOffer(data));
    }
    catch (err){
      errorHandle(err);
    }
  },
);

export const completeNearbyOffers = createAsyncThunk(
  'data/loadOffer',
  async (id: number)=>{
    try {
      const {data} = await api.get<Offer[]>(`${APIRoute.OFFERS}/${id}/nearby`);
      store.dispatch(loadNearby(data));
    }
    catch (err){
      errorHandle(err);
    }
  },
);

export const completeComments = createAsyncThunk(
  'data/loadComments',
  async (id:number)=>{
    try{
      const {data} = await api.get<ReviewItem[]>(`${APIRoute.COMMENTS}/${id}`);
      store.dispatch(loadComments(data));
    } catch (err){
      errorHandle(err);
    }
  },
);

export const postReview = createAsyncThunk(
  'data/postReview',
  async (newComment: NewComment)=>{
    try{
      const {comment, rating, id} = newComment;
      await api.post<CommentData>(`${APIRoute.COMMENTS}/${id}`, {comment, rating});
      store.dispatch(submitingComment(false));
    }catch (err) {
      errorHandle(err);
    }
  },
);

export const changeStatus = createAsyncThunk(
  'data/changeFavorite',
  async ({id,status}:ChangeStatus)=>{
    try {
      const {data} = await api.post(`${APIRoute.FAVORITES}/${id}/${status}`);
      store.dispatch(submitingChangeStatus(false));
      store.dispatch(updateOffer(data));
    }
    catch(err){
      errorHandle(err);
    }
  },
);

export const completeFavoriteOffers = createAsyncThunk(
  'data/completeFavorites',
  async ()=>{
    try {
      const {data} = await api.get(APIRoute.FAVORITES);
      store.dispatch(loadFavorites(data));
    }
    catch(err){
      errorHandle(err);
    }
  },
);
