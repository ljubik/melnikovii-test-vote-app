import { createStore, combineReducers } from 'redux';
import { reducer as main } from './reducer';

export const reducer = combineReducers({
  main
});

const configureStore = (initialState) => createStore(reducer, initialState);

const store = configureStore();
export default store;
