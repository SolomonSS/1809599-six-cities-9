import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import HistoryRouter from '../../../history/history-route';
import CityItem from './city-item';
import {CitiesList} from '../../../utils/const';

describe('Test city item component:', () => {
  it('Should return component:', () => {
    const history = createMemoryHistory();
    const handler = (cityName: string) => cityName;
    render(
      <HistoryRouter history={history}>
        <CityItem city={CitiesList[0]} activeCity={CitiesList[1]} handleChangeCity={handler}/>
      </HistoryRouter>
    );
    const firstElement = screen.getByText(CitiesList[0]);
    expect(firstElement).toBeInTheDocument();
  });
});
