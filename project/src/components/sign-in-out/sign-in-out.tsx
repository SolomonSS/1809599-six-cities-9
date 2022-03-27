import {AuthorizationStatus} from '../../utils/const';
import SignIn from './sign-in/sign-in';
import SignOut from './sign-out/sign-out';
import {useAppSelector} from '../../hooks';
import React from 'react';

function SignInOut():JSX.Element {
  const {authorizationStatus} = useAppSelector((({USER}) => USER));
  return authorizationStatus !== AuthorizationStatus.Auth ? <SignIn /> : <SignOut/>;
}

export default React.memo(SignInOut);
