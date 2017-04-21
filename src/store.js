///this file works:
///quizReducer should be imported as a function within braces


import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import {quizReducer} from './reducers';

// import { loadState, saveState } from './helpers/localStorage';

// const createStore=(reducer)=>{
// 	let state;
// 	let listener= [];

// 	const getState=()=>state;

// 	const dispatch = (action)=>{
// 		state.reducer(state, action);
// 		listeners.forEach(listener=>listener());
// 	}
// 	return {getState, dispatch};
// }






// // ////authentication through loadedState:
// const persistedState = loadState();

// const store = createStore(
// 	combineReducers({quizReducer}), 
// 	applyMiddleware(thunk),
// 	persistedState
// );


// console.log(saveState, 'state save method');


// ////unsure what this is doing:
// ////seems like store.subscribe can be replaced with connect();
// ///or this can be moved into an action

// //adds a new listener to listeners
// ///causes the authetnication to run
// ////like an event listener



// export default {store};

export default createStore(combineReducers({quizReducer}), applyMiddleware(thunk));

