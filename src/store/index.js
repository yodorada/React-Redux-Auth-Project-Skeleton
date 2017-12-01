import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { compose, applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';

export default function configureStore(baseHistory, initialState) {
  var tempStore;

  if(process.env.NODE_ENV !== 'production') {
    tempStore = createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(routerMiddleware(baseHistory), thunkMiddleware, createLogger()),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    );
  } else {
    tempStore = createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(routerMiddleware(baseHistory), thunkMiddleware)
      )
    );
  }

  

  const history = baseHistory
  const store = tempStore


  return { store, history };

}