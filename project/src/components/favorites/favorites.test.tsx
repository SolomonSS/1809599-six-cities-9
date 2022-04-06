import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {fakeStore} from '../../utils/mocks';
import HistoryRoute from '../history/history-route';
import Favorites from './favorites';

describe('Testing Favorites item component', () => {
  it('Should return Favorites item component', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={fakeStore}>
        <HistoryRoute history={history}>
          <Favorites />
        </HistoryRoute>
      </Provider>,
    );
    expect(screen.getByText('Nothing yet saved.')).toBeInTheDocument();
  });
});
