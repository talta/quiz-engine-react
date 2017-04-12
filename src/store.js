import {applyMiddleware, createStore} from 'redux';

import thunk from 'redux-thunk';

import {quizReducer} from './reducers';

export default createStore(quizReducer, applyMiddleware(thunk));