import * as actions from '../actions/index';

///this would be replaced by the call from the component:
import * as state from '../../public/mock-state'


const initialState = {};

export const quizReducer = (initialState, action)=>{
	const state = initialState;

	switch(action.type){
		case 'SELECT_QUIZ':
			return state ///this needs to be changed

		default: 
			return state
	}

}