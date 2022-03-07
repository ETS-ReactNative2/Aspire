import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import cardReducer from './reducers';

const rootReducer = combineReducers({cardReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
