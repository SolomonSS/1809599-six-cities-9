import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import HistoryRouter from '../history/history-route';
import Property from './property';
import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from '../../store/reducers/root-reducer';
import {api} from '../../services/api';
import {redirect} from '../../store/midlewares/redirect';

describe('Testing Login item component', () => {
  it('Should return Login item component:', () => {
    const history = createMemoryHistory();
    const fake_store = configureStore(
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
      <Provider store={fake_store}>
        <HistoryRouter history={history}>
          <Property/>
        </HistoryRouter>
      </Provider>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
