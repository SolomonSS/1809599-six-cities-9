import Header from './header';
import {render, screen} from '@testing-library/react';
import HistoryRouter from '../../history/history-route';
import {createMemoryHistory} from 'history';
import {fakeStore} from '../../utils/mocks';
import {Provider} from 'react-redux';

describe('Testing Header component', () => {
  it('Should return Header component', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={fakeStore}>
        <HistoryRouter history={history}>
          <Header/>
        </HistoryRouter>
      </Provider>
    );
    expect(screen.getByTestId('Header-link')).toBeInTheDocument();
  });
});
