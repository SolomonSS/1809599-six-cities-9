import {AppRoute, AuthorizationStatus} from '../const';
import {Navigate} from 'react-router-dom';

type PrivateProps = {
  authorization: AuthorizationStatus;
  children: JSX.Element;
};

function PrivateRoute(props: PrivateProps): JSX.Element {
  const {authorization, children} = props;
  return (
    authorization === AuthorizationStatus.Auth ?
      children :
      <Navigate to={AppRoute.Login}/>
  );
}

export default PrivateRoute;
