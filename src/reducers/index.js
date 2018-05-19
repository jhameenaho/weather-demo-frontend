import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import weather from './weather'
import auth from './auth'
import favourite from './favourite'
import * as types from '../types';

const isFetching = (state = '', action) => {
  switch (action.type) {
    case types.CREATE_REQUEST:
      return true;
    case types.REQUEST_SUCCESS:
    case types.REQUEST_FAILURE:
      return false;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  isFetching,
  form,
  weather,
  auth,
  favourite,
  routing
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, {}, process.env.NODE_ENV !== "production" ? composeEnhancers(applyMiddleware(thunk, logger)) : applyMiddleware()
)

export default store;