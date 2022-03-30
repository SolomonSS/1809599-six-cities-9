import {AppRoute} from '../../utils/const';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import App from './app';
import {render, screen} from '@testing-library/react';
import {fakeStore} from '../../utils/mocks';
import HistoryRouter from '../../history/history-route';

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={fakeStore}>
    <HistoryRouter history={history}>
      <App/>
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "MainScreen" when user navigate to "/"', () => {
    history.push(AppRoute.Main);
    render(fakeApp);
    expect(screen.getByText(`No places to stay available`)).toBeInTheDocument();
  });
  it('should render "Login" when user navigate to "AppRoute.Login"', () => {
    history.push(AppRoute.Login);
    render(fakeApp);
    expect(screen.getByTestId('Hi from login component')).toBeInTheDocument();
  });
  it('should render "Favorites" when user navigate to "AppRoute.Favorites"', () => {
    history.push(AppRoute.Favorites);
    render(fakeApp);
    expect(screen.getByTestId('Hey from Favorites component')).toBeInTheDocument();
  });
  it('should render "Offer" when user navigate to "AppRoute.Room"', () => {
    const randomId = Math.random()*90;
    history.push(`${AppRoute.Room}${randomId}`);
    render(fakeApp);
    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
  });
});
