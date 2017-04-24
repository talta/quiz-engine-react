
const initialState = {
	quizzes: [],
	data: [],
	loading:false
}


const quizAPI = (state= initialState, action)=>{
	switch(action.type){
		case 'LOAD_QUIZ':
		return  {...state, 
			name: action.selectedQuiz.name,
			questions: action.selectedQuiz.questions,
			index: action.selectedQuiz.index,
			question: action.selectedQuiz.question,
			answers: action.selectedQuiz.answers
		}

		case 'LOAD_QUIZZES':
			const loadedQuizzes = {...state, 
				quizzes: action.response
			}
		return loadedQuizzes;
	default:
		return state
	}
}

export default quizAPI