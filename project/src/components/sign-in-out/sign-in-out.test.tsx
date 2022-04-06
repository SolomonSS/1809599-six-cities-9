import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {fakeStore, mockStore} from '../../utils/mocks';
import HistoryRoute from '../history/history-route';
import SignInOut from './sign-in-out';
import {AuthorizationStatus} from '../../utils/const';


describe('Testing SignOut component', () => {
  it('Should SignIn-Out component:', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={fakeStore}>
        <HistoryRoute history={history}>
          <SignInOut/>
        </HistoryRoute>
      </Provider>,
    );
    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });
  it('Should SignIn component:', () => {
    const history = createMemoryHistory();
    const secondStore= mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NoAuth}});
    render(
      <Provider store={secondStore}>
        <HistoryRoute history={history}>
          <SignInOut/>
        </HistoryRoute>
      </Provider>,
    );
    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });

});
