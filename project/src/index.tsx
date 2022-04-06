import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {completeOffers} from './services/api-actions';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import browserHistory from './history';
import HistoryRoute from './components/history/history-route';

store.dispatch(completeOffers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRoute history={browserHistory}>
        <ToastContainer/>
        <App/>
      </HistoryRoute>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
