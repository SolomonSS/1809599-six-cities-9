import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {fakeStore, makeFakeOffers} from '../../utils/mocks';
import HistoryRouter from '../history/history-route';
import OtherPlaces from './other-places';
import {CardMods} from "../../utils/const";

const fakeOffers = makeFakeOffers(3);

describe('Testing Login item component', () => {
  it('Should return Login item component:', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={fakeStore}>
        <HistoryRouter history={history}>
          <OtherPlaces offers={fakeOffers} mode={CardMods.Main}/>
        </HistoryRouter>
      </Provider>
    );
    expect(screen.getByText(fakeOffers[0].title)).toBeInTheDocument();
  });
});
