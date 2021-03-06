import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import HistoryRoute from '../../history/history-route';
import CityItem from './city-item';
import {CitiesList} from '../../../utils/const';
import userEvent from '@testing-library/user-event';

describe('Test city-item item component:', () => {
  it('Should return component:', () => {
    const history = createMemoryHistory();
    const handler = jest.fn();
    render(
      <HistoryRoute history={history}>
        <CityItem city={CitiesList[0]} activeCity={CitiesList[1]} handleChangeCity={handler}/>
      </HistoryRoute>,
    );
    expect(screen.getByText(CitiesList[0])).toBeInTheDocument();
  });
  it('When user click :', () => {
    const history = createMemoryHistory();
    const handler = jest.fn();
    render(
      <HistoryRoute history={history}>
        <CityItem city={CitiesList[0]} activeCity={CitiesList[1]} handleChangeCity={handler}/>
      </HistoryRoute>,
    );
    userEvent.click(screen.getByText(CitiesList[0]));
    expect(handler).toBeCalled();
  });

});
