import {Link} from 'react-router-dom';
import SignInOut from '../sign-in-out/sign-in-out';
import React from 'react';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" data-testid='Header-link' to='/'>
              <img className="header__logo" src='img/logo.svg' alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <SignInOut/>
            </ul>
          </nav>
        </div>
      </div>
    </header>);
}

export default React.memo(Header);
