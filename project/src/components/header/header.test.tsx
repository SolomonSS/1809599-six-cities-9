import Header from './header';
import {render, screen} from '@testing-library/react';
import HistoryRoute from '../history/history-route';
import {createMemoryHistory} from 'history';
import {fakeStore} from '../../utils/mocks';
import {Provider} from 'react-redux';

describe('Testing Header component', () => {
  it('Should return Header component', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={fakeStore}>
        <HistoryRoute history={history}>
          <Header/>
        </HistoryRoute>
      </Provider>,
    );
    expect(screen.getByTestId('Header-link')).toBeInTheDocument();
  });
});
