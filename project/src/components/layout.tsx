import {Fragment} from 'react';
import Header from './header/header';

type PropsType = {
  children: JSX.Element
};

function Layout({children}: PropsType): JSX.Element {
  return (
    <Fragment>
      <Header/>
      {children}
    </Fragment>);
}

export default Layout;
