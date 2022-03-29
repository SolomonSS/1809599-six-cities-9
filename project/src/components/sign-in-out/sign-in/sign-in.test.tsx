import {createMemoryHistory} from 'history';
import {fakeStore} from '../../../utils/mocks';
import SignIn from './sign-in';
import {Provider} from 'react-redux';
import HistoryRouter from '../../../history/history-route';
import {render, screen} from '@testing-library/react';

describe('Testing SignIn component:', () => {
  it('Should return SignIn component:', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={fakeStore}>
        <HistoryRouter history={history}>
          <SignIn/>
        </HistoryRouter>
      </Provider>);
    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
