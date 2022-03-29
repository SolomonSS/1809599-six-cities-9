import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../history/history-route';
import NotFound from './not-found';
import {Provider} from "react-redux";
import {fakeStore} from "../../utils/mocks";

describe('Test not found', () => {
  it('Should return component:', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={fakeStore}>
        <HistoryRouter history={history}>
          <NotFound/>
        </HistoryRouter>
      </Provider>
    );
    const headerElement = screen.getByText('404. Page not found');
    const linkElement = screen.getByText('Вернуться на главную');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  })
});
