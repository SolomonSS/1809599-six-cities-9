import MainScreen from '../main-screen/main-screen';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../utils/const';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Property from '../property/property';
import PrivateRoute from '../private-route';
import MainScreenEmpty from '../main-screen-empty/main-screen-empty';
import {getOffers, getStatus} from "../../store/selectors";
import {useSelector} from "react-redux";

function App(): JSX.Element {
  const offers = useSelector(getOffers);
  const status = useSelector(getStatus);

  if(!status){
    return <MainScreenEmpty/>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainScreen offers={offers}/>}/>
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorization={AuthorizationStatus.NoAuth}>
            <Favorites offers={offers}/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Login} element={<Login/>}/>
        <Route path={`${AppRoute.Room}:id`} element={<Property offers={offers}/>}/>
        <Route path='*' element={<MainScreenEmpty/>}/>
      </Routes>
    </BrowserRouter>);
}

export default App;
