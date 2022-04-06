import LoadingScreen from './loading-screen';
import {render, screen} from '@testing-library/react';

describe('Testing Loading screen :',()=>{
  it('Should return loading screen component:',()=>{
    render(<LoadingScreen/>);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
