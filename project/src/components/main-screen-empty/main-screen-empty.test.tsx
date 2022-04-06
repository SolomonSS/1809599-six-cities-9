import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import HistoryRoute from '../history/history-route';
import MainScreenEmpty from './main-screen-empty';
import {fakeStore} from '../../utils/mocks';
import {Provider} from 'react-redux';


describe('Test main screen empty', () => {
  it('Should return component:', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={fakeStore}>
        <HistoryRoute history={history}>
          <MainScreenEmpty/>
        </HistoryRoute>
      </Provider>,
    );
    const boldElement = screen.getByText('No places to stay available');
    const descriptionElement = screen.getByText('We could not find any property available at the moment in Dusseldorf');

    expect(boldElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
