import browserHistory from '../../history';
import {Middleware} from 'redux';
import {rootReducer} from '../reducers/root-reducer';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer>=
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === 'page/redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
