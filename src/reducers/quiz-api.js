
const initialState = {
	data: [],
	loading:false
}


const quizAPI = (state= initialState, action)=>{
	switch(action.type){
		case 'LOAD_QUIZ':
		/////load quiz will need to accept the name of a quiz or something else in order to load a specific quiz
		return  {...state, 
			name: action.response.name,
			index: action.response.index,
			question: action.response.question,
			answers: action.response.answers
		}

		case 'LOAD_QUIZZES':
		// return {...state, 
		// 	name: action.response.name
		// }
		const loadQuizzesState =  {...state, 
			name: action.response.name
		}
		console.log('state from load quizzes reducer:', loadQuizzesState);
		return loadQuizzesState
	default:
		return state
	}


}

export default quizAPI