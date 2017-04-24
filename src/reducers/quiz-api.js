
const initialState = {
	quizzes: [],
	data: [],
	loading:false
}


const quizAPI = (state= initialState, action)=>{
	switch(action.type){
		case 'LOAD_QUIZ':
		/////load quiz will need to accept the name of a quiz or something else in order to load a specific quiz
		return  {...state, 
			name: action.selectedQuiz.name,
			questions: action.selectedQuiz.questions,
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
			quizzes: action.response
		}
		console.log('QuizAPI reducer for loadedQuizzes response: ', loadedQuizzes)
		console.log('QuizAPI reducer for loadedQuizzes quizzes: ', loadedQuizzes.quizzes)
		console.log('QuizAPI reducer for loadedQuizzes quizzes data: ', loadedQuizzes.quizzes[0])
		console.log('QuizAPI reducer for loadedQuizzes quizzes data name : ', loadedQuizzes.quizzes[0].name)
		return loadedQuizzes;
	default:
		return state
	}
}

export default quizAPI