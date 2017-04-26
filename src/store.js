///this file works:
///quizReducer should be imported as a function within braces


import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import {autoRehydrate, persistStore} from 'redux-persist';

import rootReducer from './reducers';
import {initialState} from './reducers/quiz-reducer';
import {loadQuizStorage, saveQuizStorage} from './helpers/localStorage';


const store = createStore(
		rootReducer,
		applyMiddleware(thunk)
	);


// const store = createStore(
// 	rootReducer, 
// 	initialState,
// 	// compose(window.devToolsExtension ? window.devToolsExtension() : f => f, 
// 		// applyMiddleware(thunk), 
// 		// autoRehydrate())
// 	applyMiddleware(thunk),
// 	autoRehydrate()
// );


persistStore(store, {whitelist: ['rootReducer']}, () => {
  console.log('rehydration complete')
})


export default store;


