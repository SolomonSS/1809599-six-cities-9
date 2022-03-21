import browserHistory from '../../history';
import {Middleware} from 'redux';
import {reducer} from '../reducer';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer>=
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === 'page/redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
