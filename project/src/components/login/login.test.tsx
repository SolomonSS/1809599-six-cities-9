import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {fakeStore} from '../../utils/mocks';
import HistoryRoute from '../history/history-route';
import Login from './login';
import userEvent from '@testing-library/user-event';

describe('Testing Login item component', () => {
  it('Should return Login item component:', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={fakeStore}>
        <HistoryRoute history={history}>
          <Login />
        </HistoryRoute>
      </Provider>,
    );
    expect(screen.getByText('Password')).toBeInTheDocument();
  });

  it('When typing e-mail and password:', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={fakeStore}>
        <HistoryRoute history={history}>
          <Login />
        </HistoryRoute>
      </Provider>,
    );
    userEvent.type(screen.getByTestId('email-test'), 'testtest');
    expect(screen.getByTestId('email-test')).toHaveValue('testtest');
    userEvent.type(screen.getByTestId('password-test'), '123123');
    expect(screen.getByTestId('password-test')).toHaveValue('123123');
  });
});
