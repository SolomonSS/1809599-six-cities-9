import {fakeStore, makeFakeOffers} from '../../utils/mocks';
import {render, screen} from '@testing-library/react';
import Card from './card';
import {CardMods} from '../../utils/const';
import HistoryRouter from "../../history/history-route";
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';

const offer = makeFakeOffers(1);

describe('Testing card component:', () => {
  it('should return Card component', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={fakeStore}>
        <HistoryRouter history={history}>
          <Card offer={offer[0]} mode={CardMods.Main}/>
        </HistoryRouter>
      </Provider>);
    expect(screen.getByText(offer[0].title)).toBeInTheDocument();
  });
});
