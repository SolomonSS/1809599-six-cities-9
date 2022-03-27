import {configureStore} from '@reduxjs/toolkit';
import {api} from '../services/api';
import {redirect} from './midlewares/redirect';
import {rootReducer} from './reducers/root-reducer';


export const store = configureStore(
  {
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk:{
          extraArgument: api,
        },
      }).concat(redirect),
  });
