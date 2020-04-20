import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import countriesReducer from './countryList/reducer';

const rootReducer = combineReducers({
  countries: countriesReducer,
});

let middleware = [thunk, logger];

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(...middleware));
};

const store = configureStore();

export default store;
