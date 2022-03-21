import MainScreen from '../main-screen/main-screen';
import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../utils/const';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Property from '../property/property';
import PrivateRoute from '../private-route';
import {checkAuth, getOffers, getStatus} from '../../store/selectors';
import {useSelector} from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import HistoryRouter from '../../history/history-route';
import browserHistory from '../../history';
import NotFound from '../not-found/not-found';


function App(): JSX.Element {
  const offers = useSelector(getOffers);
  const status = useSelector(getStatus);
  const authStatus = useSelector(checkAuth);

  if(!status){
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route index element={<MainScreen/>}/>
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorization={authStatus}>
            <Favorites offers={offers}/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Login} element={<Login/>}/>
        <Route path={`${AppRoute.Room}:id`} element={<Property offers={offers}/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </HistoryRouter>);
}

export default App;
