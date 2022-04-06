import {FormEvent, useRef} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AuthData} from '../../types/types';
import {loginAction} from '../../services/api-actions';
import {Link, Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../utils/const';
import {resetOfferLoaded} from '../../store/reducers/data/data-process';
import {getRandomCity, isValidPass} from '../../utils/utils';
import {changeCity} from '../../store/reducers/surf-process/surf-process';

function Login() {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  dispatch(resetOfferLoaded());
  const {authorizationStatus} = useAppSelector(({USER}) => USER);

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const city = getRandomCity();

  const onRandomCityClick = () =>{
    dispatch(changeCity({city}));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null && isValidPass(passwordRef.current?.value)) {
      onSubmit({
        email: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  if(authorizationStatus===AuthorizationStatus.Auth){
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to='/'>
                <img className="header__logo" src='img/logo.svg' alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title" data-testid={'Hi from login component'}>Sign in</h1>
            <form className="login__form form" action="" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" ref={loginRef} type="email" name="email" data-testid = {'email-test'} placeholder="Email" required/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" ref={passwordRef} type="password" data-testid = {'password-test'} name="password" placeholder="Password" required/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/" onClick={onRandomCityClick}>
                <span>{city}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>);
}

export default Login;

