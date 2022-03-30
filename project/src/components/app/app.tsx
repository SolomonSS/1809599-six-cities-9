import MainScreen from '../main-screen/main-screen';
import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../utils/const';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Property from '../property/property';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFound from '../not-found/not-found';
import {useAppSelector} from '../../hooks';


function App(): JSX.Element {
  const {isDataLoaded} = useAppSelector((({DATA}) => DATA));
  const {authorizationStatus} = useAppSelector((({USER}) => USER));

  if (!isDataLoaded) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <Routes>
      <Route index element={<MainScreen/>}/>
      <Route path={AppRoute.Favorites} element={
        <PrivateRoute authorization={authorizationStatus}>
          <Favorites/>
        </PrivateRoute>
      }
      />
      <Route path={AppRoute.Login} element={<Login/>}/>
      <Route path={`${AppRoute.Room}:id`} element={<Property/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>);
}

export default App;
