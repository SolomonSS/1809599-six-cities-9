import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {fakeStore} from '../../utils/mocks';
import HistoryRoute from '../history/history-route';
import MainScreen from './main-screen';
import {createMemoryHistory} from 'history';

describe('Testing main screen:',()=>{
  it('should return main screen component',()=>{
    const history = createMemoryHistory();
    render(
      <Provider store={fakeStore}>
        <HistoryRoute history={history}>
          <MainScreen/>
        </HistoryRoute>
      </Provider>,
    );
    expect(screen.getByText('No places to stay available')).toBeInTheDocument();
  });
});
