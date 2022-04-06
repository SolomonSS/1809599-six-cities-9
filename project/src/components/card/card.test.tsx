import {fakeStore, makeFakeOffers} from '../../utils/mocks';
import {render, screen} from '@testing-library/react';
import Card from './card';
import {CardMods} from '../../utils/const';
import HistoryRoute from '../history/history-route';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';

const offer = makeFakeOffers(1);

describe('Testing card component:', () => {
  it('should return Card component', () => {
    const history = createMemoryHistory();
    const handleClick = jest.fn();
    render(
      <Provider store={fakeStore}>
        <HistoryRoute history={history}>
          <Card offer={offer[0]} mode={CardMods.Main} handleOnMouseOver={handleClick}/>
        </HistoryRoute>
      </Provider>);
    expect(screen.getByText(offer[0].title)).toBeInTheDocument();
    userEvent.click(screen.getByText(offer[0].title));
    expect(handleClick).toBeCalled();
  });
});
