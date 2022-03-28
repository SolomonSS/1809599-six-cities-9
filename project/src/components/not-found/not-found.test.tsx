import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../history/history-route';
import NotFound from './not-found';

describe('Test not found',()=>{
  it('Should return component:', ()=>{
    const history = createMemoryHistory();
    render(
      <HistoryRouter history={history}>
        <NotFound/>
      </HistoryRouter>
    );
    const headerElement = screen.getByText('404. Page not found');
    const linkElement = screen.getByText('Вернуться на главную');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  })
});
