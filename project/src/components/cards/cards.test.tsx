import {render, screen} from '@testing-library/react';
import HistoryRoute from '../history/history-route';
import {createMemoryHistory} from 'history';
import {fakeStore, makeFakeOffers} from '../../utils/mocks';
import {Provider} from 'react-redux';
import {CardMods} from '../../utils/const';
import Cards from './cards';
import userEvent from '@testing-library/user-event';

const fakeOffers = makeFakeOffers(5);
const history = createMemoryHistory();

describe('Testing Cards component:', () => {
  it('Should return Cards component', () => {
    render(
      <Provider store={fakeStore}>
        <HistoryRoute history={history}>
          <Cards offers={fakeOffers} mode={CardMods.Main}/>
        </HistoryRoute>
      </Provider>,
    );
    expect(screen.getByText(fakeOffers[0].title)).toBeInTheDocument();
  });
  it('when user click on card-title',()=>{
    const handleClick = jest.fn();
    render(
      <Provider store={fakeStore}>
        <HistoryRoute history={history}>
          <Cards offers={fakeOffers} mode={CardMods.Main} handleOnMouseOver={handleClick}/>
        </HistoryRoute>
      </Provider>,
    );

    userEvent.click(screen.getByText(fakeOffers[0].title));
    expect(handleClick).toBeCalled();
  });
});
