
const initialState = {
	data: [],
	loading:false
}


const quizAPI = (state= initialState, action)=>{
	switch(action.type){
		case 'LOAD_QUIZ':
		/////load quiz will need to accept the name of a quiz or something else in order to load a specific quiz
		return  {...state, 
			name: action.selectedQuiz.name,
			index: action.selectedQuiz.index,
			question: action.selectedQuiz.question,
			answers: action.selectedQuiz.answers
		}

		case 'LOAD_QUIZZES':
		// return {...state, 
		// 	name: action.response.name,
		// 	index: action.response.index,
		// 	question: action.response.question,
		// 	answers: action.response.answers
		// }
		console.log('load quizzes called');
		const loadedQuizzes = {...state, 
			name: action.response.name,
			index: action.response.index,
			question: action.response.question,
			answers: action.response.answers
		}
		console.log('QuizAPI reducer for loadedQuizzes: ', loadedQuizzes)
		return loadedQuizzes;
	default:
		return state
	}
}

export default quizAPI