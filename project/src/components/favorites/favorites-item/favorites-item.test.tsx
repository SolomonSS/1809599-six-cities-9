import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import FavoritesItem from './favorites-item';
import {fakeStore, makeFakeOffers} from '../../../utils/mocks';
import HistoryRouter from '../../../history/history-route';
import {CitiesList} from "../../../utils/const";

const offer = makeFakeOffers(3);

describe('Testing Favorites item component', () => {
  it('Should return Favorites item component', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={fakeStore}>
        <HistoryRouter history={history}>
          <FavoritesItem offers={offer} city={CitiesList[0]}/>
        </HistoryRouter>
      </Provider>
    );
    expect(screen.getByText(CitiesList[0])).toBeInTheDocument();
  });
});
