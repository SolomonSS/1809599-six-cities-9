import {Fragment} from 'react';
import Header from './header/header';

type PropsType = {
  children: JSX.Element
};

const Layout = ({children}: PropsType):JSX.Element => (
  <Fragment>
    <Header />
    {children}
  </Fragment>
);
export default Layout;
