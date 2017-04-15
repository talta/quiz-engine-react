import {applyMiddleware, createStore, combineReducers} from 'redux';

import thunk from 'redux-thunk';

import {quizReducer} from './reducers';



////if multiple reducers, use the combineReducers
///list the additional reducers 

export default createStore(combineReducers({quizReducer}), applyMiddleware(thunk));

// export default createStore(quizReducer, applyMiddleware(thunk));



/////house the state here