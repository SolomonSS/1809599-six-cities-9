import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {reducer} from './reducer';
import thunk from 'redux-thunk';
import {api} from '../services/api';


export const store = configureStore(
  {
    reducer, middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk:{
          extraArgument: api,
        },
      }),
  });
