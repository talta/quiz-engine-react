
import * as actions from '../actions';

const initialState = {
	data: [],
	loading:false
}


const quizAPI = (state= initialState, action)=>{
	switch(action.type){
		case 'LOAD_QUIZ':
		/////load quiz will need to accept the name of a quiz or something else in order to load a specific quiz
		return  Object.assign({}, state, {
			name: action.response.name,
			index: action.response.index,
			question: action.response.question,
			answers: action.response.answers
		})

		case 'LOAD_QUIZZES':
		return Object.assign({}, state, {
			name: action.response.name
		})
	default:
		return state
	}


}

export default quizAPI