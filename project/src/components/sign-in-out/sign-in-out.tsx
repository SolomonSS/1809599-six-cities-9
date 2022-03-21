import {checkAuth} from '../../store/selectors';
import {useSelector} from 'react-redux';
import {AuthorizationStatus} from '../../utils/const';
import SignIn from './sign-in/sign-in';
import SignOut from './sign-out/sign-out';

const SignInOut = ():JSX.Element => {
  const auth = useSelector(checkAuth);
  return auth !== AuthorizationStatus.Auth ? SignIn() : SignOut();
};

export default SignInOut;
