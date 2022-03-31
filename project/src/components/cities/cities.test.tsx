import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import HistoryRouter from '../../history/history-route';
import {CitiesList} from '../../utils/const';
import Cities from './cities';
import {Provider} from 'react-redux';
import {fakeStore} from '../../utils/mocks';

describe('Testing Cities component:', () => {
  it('Should return Cities component ', () => {
    const history = createMemoryHistory();
    render(
    <Provider store={fakeStore}>
      <HistoryRouter history={history}>
        <Cities/>
      </HistoryRouter>
    </Provider>
  );
    expect(screen.getByText(CitiesList[0])).toBeInTheDocument();
  });
});
