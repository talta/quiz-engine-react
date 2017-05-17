import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import {autoRehydrate, persistStore} from 'redux-persist';

import rootReducer from './reducers';
import {initialState} from './reducers/quiz-reducer';


// const store = createStore(
// 		rootReducer,
// 		applyMiddleware(thunk)
// 	);


const store = createStore(
	rootReducer, 
	initialState,
	compose(
		applyMiddleware(thunk), 
		autoRehydrate(),
	window.devToolsExtension ? window.devToolsExtension() : f => f)

	// applyMiddleware(thunk),
	// autoRehydrate()
);


// persistStore(store, ////{whitelist: ['rootReducer']}, 
// 	() => {
//   console.log('rehydration complete')
// })


persistStore(store, {storage: localStorage})

export default store;


