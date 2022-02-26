import MainScreen from '../main-screen/main-screen';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from '../layout';
import {AppRoute, AuthorizationStatus} from '../../const';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Property from '../property/property';
import PrivateRoute from '../private-route';
import MainScreenEmpty from '../main-screen-empty/main-screen-empty';

const Settings = {
  count: 6,
};

function App(): JSX.Element {
  return (<BrowserRouter>
    <Routes>
      <Route index element={<Layout>
        <MainScreen count={Settings.count}/>
      </Layout>}/>
      <Route path={AppRoute.Favorites} element={
        <PrivateRoute authorization={AuthorizationStatus.NoAuth}>
          <Layout><Favorites/></Layout>
        </PrivateRoute>
      }/>
      <Route path={AppRoute.Login} element={<Login/>}/>
      <Route path={AppRoute.Room} element={<Layout><Property/></Layout>}/>
      <Route path='*' element={<MainScreenEmpty/>}/>
    </Routes>
  </BrowserRouter>);
}

export default App;
