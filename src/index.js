import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHashHistory from 'history/createHashHistory';
import { ConnectedRouter } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'
import App from './App';
import configureStore from './store';



injectTapEventPlugin();

const { store, history } = configureStore(createHashHistory(), window.__INITIAL_STATE__);
const persistor = persistStore(store);

export default class AppProvider extends React.Component {

  render() {
    
    return (
      <div>
      <Provider store={store}>
        <PersistGate loading={<div id="loading">loading…</div>} persistor={persistor}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </PersistGate>
      </Provider>
      </div>
    )
  }
}

ReactDOM.render(
  <AppProvider />,
  document.getElementById('root')
);
if(process.env.NODE_ENV !== 'production'){
  registerServiceWorker();
}