import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {fakeStore} from '../../../utils/mocks';
import HistoryRoute from '../../history/history-route';
import SignOut from './sign-out';

describe('Testin SignOut component:', ()=>{
  it('Should return Sign Out component:',()=>{
    const history = createMemoryHistory();
    render(
      <Provider store={fakeStore}>
        <HistoryRoute history={history}>
          <SignOut/>
        </HistoryRoute>
      </Provider>,
    );
    expect(screen.getByText('Sign out')).toBeInTheDocument();
    expect(screen.getByTestId('Sign-out-here')).toBeInTheDocument();
  });
});
