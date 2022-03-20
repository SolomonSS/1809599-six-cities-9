import {checkAuth} from '../../store/selectors';
import {useSelector} from 'react-redux';
import {AuthorizationStatus} from '../../utils/const';
import SignIn from './sign-in/sign-in';

const SignInOut = ():JSX.Element => useSelector(checkAuth) !== AuthorizationStatus.Auth ? SignIn() : SignInOut();

export default SignInOut;
