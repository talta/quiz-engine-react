///this file works:
///quizReducer should be imported as a function within braces


import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import {quizAPI} from './reducers';
import {quizReducer} from './reducers';



const store = createStore(
	combineReducers({quizReducer, quizAPI}), 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
	applyMiddleware(thunk)
	);

// export default {store};

export default store;


