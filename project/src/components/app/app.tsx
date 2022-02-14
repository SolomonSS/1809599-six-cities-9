import MainScreen from '../main-screen/main-screen';

const Settings = {
  count : 6,
};

function App(): JSX.Element {
  return <MainScreen count = {Settings.count}/>;
}

export default App;
