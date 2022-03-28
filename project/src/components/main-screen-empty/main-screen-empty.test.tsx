import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import HistoryRouter from '../../history/history-route';
import MainScreenEmpty from './main-screen-empty';


describe('Test main screen empty', ()=>{
  it('Should return component:', ()=>{
    const history = createMemoryHistory();
    render(
      <HistoryRouter history={history}>
        <MainScreenEmpty/>
      </HistoryRouter>
    );
    const boldElement = screen.getByText('No places to stay available');
    const descriptionElement = screen.getByText('We could not find any property available at the moment in Dusseldorf');

    expect(boldElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  })
});
