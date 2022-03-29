import {AppRoute, DEFAULT_CITY} from '../../utils/const';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import App from './app';
import {render, screen} from '@testing-library/react';
import {fakeStore} from '../../utils/mocks';

const history = createMemoryHistory();


const fakeApp = (
  <Provider store={fakeStore}>
      <App />
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
    expect(screen.getByText('Amsterdam')).toBeInTheDocument();
    //expect(screen.getByText('Password')).toBeInTheDocument();
  });
  it('should render "Favorites" when user navigate to "AppRoute.Favorites"', () => {
    history.push(AppRoute.Favorites);
    render(fakeApp);
    expect(screen.getByText('Cities')).toBeInTheDocument();
  });
  it('should render "Offer" when user navigate to "AppRoute.Room"', () => {
    history.push(`${AppRoute.Room}21`);
    render(fakeApp);
    expect(screen.getByText('Cities')).toBeInTheDocument();
  });
});
