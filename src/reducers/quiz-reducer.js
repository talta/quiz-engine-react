const initialState = {
	selectedQuiz: {},
	completed: 0,
	numberOfQuestions: '',
	currentIndex: 0,
	currentQuestion: 0,
	loading: false,
	quizzes: [],
	err: '',
	answerValue: {},
	score: 0
}



const quizReducer=(state=initialState, action)=>{

	switch(action.type){

		case 'SELECT_ANSWER' :
			let selected_Answer =  {...state,
				answerValue: action.value
			}
			console.log('Quiz Reducer selected Answer: ', selected_Answer);
			return selected_Answer

		case 'SELECT_QUIZ' :
			return {...state,
				selectedQuiz: action.selectedQuiz
			}

		case 'LOAD_QUIZZES':
			return {...state,
				loading: false,
				quizzes: action.response
			}

		case 'DETERMINE_QUIZ_LENGTH':
			const ReducerNumberOfQuestions =  {...state,
				numberOfQuestions: action.numberOfQuestions
			}
			return ReducerNumberOfQuestions

		case 'SET_COMPLETED':
			const completedQuestions = {...state,
				completed: action.completed
			}
			return completedQuestions

		case 'INCREMENT_COUNTER':
			return {...state,
				currentIndex: state.currentIndex+1
			}

		case 'FETCH_QUIZZES_REQUEST':
			return  {...state,
				loading: true
			}

		case 'FETCH_QUIZZES_ERROR':
			let errorMessage = 'Sorry something happened. Please try again later';	
			return {...state,
      		err: errorMessage
			}

		case 'INCREMENT_SCORE':
			return {...state,
				score: state.score +1
			}

		default:
			return state
	}
}


export default quizReducer