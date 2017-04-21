
import * as actions from '../actions';

const initialState = {
	data: [],
	loading:false
}

const quizAPI = (state= initialState, action){
	switch(action.type){
		case 'LOAD_QUIZ'
		console.log(action.response, 'response from within the action');
		return  Object.assign({}, state, {
			name: action.response.name,
			index: action.response.index,
			question: action.response.question,
			answers: action.response.answers
		})
		case 'LOAD_QUIZZES'
		console.log('load quizzes called');
		return Object.assign({}, state, {
			name: action.response.name
		})
	default:
		return state
	}


}

export default quizAPI