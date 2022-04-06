import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import HistoryRoute from '../history/history-route';
import Property from './property';
import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from '../../store/reducers/root-reducer';
import {api} from '../../services/api';
import {redirect} from '../../store/midlewares/redirect';

describe('Testing Login item component', () => {
  it('Should return Login item component:', () => {
    const history = createMemoryHistory();
    const enhancedStore = configureStore(
      {
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware({
            thunk:{
              extraArgument: api,
            },
          }).concat(redirect),
      });
    render(
      <Provider store={enhancedStore}>
        <HistoryRoute history={history}>
          <Property/>
        </HistoryRoute>
      </Provider>,
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
