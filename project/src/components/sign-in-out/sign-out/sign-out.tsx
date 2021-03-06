import {Link} from 'react-router-dom';
import {AppRoute} from '../../../utils/const';
import {Fragment} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {logoutAction} from '../../../services/api-actions';

function SignOut (){
  const {email} = useAppSelector((({SURF}) => SURF));
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(logoutAction());
  };
  return(
    <Fragment>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name" data-testid='Sign-out-here'>{email}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to={'/'}>
          <span className="header__signout" onClick={onClick}>Sign out</span>
        </Link>
      </li>
    </Fragment>
  );
}

export default SignOut;
