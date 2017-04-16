///this file works:
///quizReducer should be imported as a function within braces


import {applyMiddleware, createStore, combineReducers} from 'redux';

import thunk from 'redux-thunk';

import {quizReducer} from './reducers';



////if multiple reducers, use the combineReducers
///list the additional reducers within the object

export default createStore(combineReducers({quizReducer}), applyMiddleware(thunk));


// export default createStore(quizReducer, applyMiddleware(thunk));
