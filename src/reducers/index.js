import * as actions from '../actions/index';

///this would be replaced by the call from the component:
import data from '../../public/mock-state'


export const quizReducer = (state = data, action)=>{

	switch(action.type){
		case 'SELECT_QUIZ':
			return Object.assign({}, state, {
				question: action.question,
				answers: [...state, {
					message: action.answers[0].message,
					correct: action.answers[0].correct
				}
				]
			});

		default: 
			return state
	}

}