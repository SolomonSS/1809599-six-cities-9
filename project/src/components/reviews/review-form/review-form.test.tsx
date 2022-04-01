import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {fakeStore} from '../../../utils/mocks';
import HistoryRouter from '../../history/history-route';
import ReviewForm from './review-form';
import userEvent from "@testing-library/user-event";

describe('Testing Review form component', () => {
  it('Should return Review form item component:', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={fakeStore}>
        <HistoryRouter history={history}>
          <ReviewForm/>
        </HistoryRouter>
      </Provider>
    );
    expect(screen.getByText('Your review')).toBeInTheDocument();
  });
  it('When typing : ', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={fakeStore}>
        <HistoryRouter history={history}>
          <ReviewForm/>
        </HistoryRouter>
      </Provider>
    );
    userEvent.click(screen.getByDisplayValue('5'));
    expect(screen.getByDisplayValue('5')).toBeChecked();
    userEvent.type(screen.getByRole('textbox'), 'ajsdfasbdnfhoasbfdhasbfdhasbfashf');
    expect(screen.getByRole('textbox')).toHaveValue('ajsdfasbdnfhoasbfdhasbfdhasbfashf');
  });
});
