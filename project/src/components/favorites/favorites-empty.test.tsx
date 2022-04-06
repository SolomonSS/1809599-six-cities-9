import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {fakeStore} from '../../utils/mocks';
import HistoryRoute from '../history/history-route';
import FavoritesEmpty from './favorites-empty';

describe('Testing FavoritesEmpty item component', () => {
  it('Should return FavoritesEmpty item component', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={fakeStore}>
        <HistoryRoute history={history}>
          <FavoritesEmpty />
        </HistoryRoute>
      </Provider>,
    );
    expect(screen.getByText('Nothing yet saved.')).toBeInTheDocument();
  });
});
