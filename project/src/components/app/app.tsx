import MainScreen from '../main-screen/main-screen';
import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../utils/const';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Property from '../property/property';
import PrivateRoute from '../private-route';
import LoadingScreen from '../loading-screen/loading-screen';
import HistoryRouter from '../../history/history-route';
import browserHistory from '../../history';
import NotFound from '../not-found/not-found';
import {useAppSelector} from '../../hooks';


function App(): JSX.Element {
  const {offers, isDataLoaded} = useAppSelector((({DATA}) => DATA));
  const {authorizationStatus} = useAppSelector((({USER}) => USER));

  if(!isDataLoaded){
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route index element={<MainScreen/>}/>
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorization={authorizationStatus}>
            <Favorites offers={offers}/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Login} element={<Login/>}/>
        <Route path={`${AppRoute.Room}:id`} element={<Property />}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </HistoryRouter>);
}

export default App;
