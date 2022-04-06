import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRoute from '../history/history-route';
import NotFound from './not-found';
import {Provider} from 'react-redux';
import {fakeStore} from '../../utils/mocks';

describe('Test not found', () => {
  it('Should return component:', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={fakeStore}>
        <HistoryRoute history={history}>
          <NotFound/>
        </HistoryRoute>
      </Provider>,
    );
    const headerElement = screen.getByText('404. Page not found');
    const linkElement = screen.getByText('Вернуться на главную');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
