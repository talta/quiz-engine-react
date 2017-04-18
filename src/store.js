///this file works:
///quizReducer should be imported as a function within braces


import {applyMiddleware, createStore, combineReducers} from 'redux';
import throttle from 'lodash/throttle';
import thunk from 'redux-thunk';

import {quizReducer} from './reducers';

import { loadState, saveState } from './helpers/localStorage';


////authentication through loadedState:
const persistedState = loadState();

const store = createStore(
	combineReducers({quizReducer}), 
	applyMiddleware(thunk),
	persistedState
);

store.subscribe(throttle(() => saveState({
  auth: store.getState().auth
}), 1000));


export default {store};

