import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {fakeStore} from '../../utils/mocks';
import HistoryRouter from '../history/history-route';
import FavoritesEmpty from './favorites-empty';

describe('Testing FavoritesEmpty item component', () => {
  it('Should return FavoritesEmpty item component', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={fakeStore}>
        <HistoryRouter history={history}>
          <FavoritesEmpty />
        </HistoryRouter>
      </Provider>
    );
    expect(screen.getByText('Nothing yet saved.')).toBeInTheDocument();
  });
});
