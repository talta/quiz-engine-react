

///this would be replaced by the call from the component:
const initialState = {
	selectedQuiz: {},
	values: {},
	completed: 0,
	numberOfQuestions: '',
	currentIndex: 0,
	loading: false,
	quizzes: [],
	err: '',
	selectedAnswer: '',
	score: 0
}



const quizReducer=(state=initialState, action)=>{
	///rewrite with case statements:

	switch(action.type){

		case 'SELECT_ANSWER' :
			let selected_Answer =  {...state,
				values: {...state.values, [action.name]: action.value}
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
			// console.log('Quiz Reducer Number of Questions: ', ReducerNumberOfQuestions);
			return ReducerNumberOfQuestions

		case 'SET_COMPLETED':
			const completedQuestions = {...state,
				completed: action.completed
			}
			// console.log('Quiz Reducer set Complted: ', completedQuestions);
			return completedQuestions

		case 'INCREMENT_COUNTER':
			// console.log('Quiz Reducer increment counter currentIndex: ', action.currentIndex);
			const incrementCounter = {...state,
				currentIndex: action.currentIndex+1
			}
			// console.log('Quiz Reducer increment counter currentIndex: ', action.currentIndex);
			// console.log('Quiz Reducer increment counter: ', incrementCounter);
			return incrementCounter

		case 'FETCH_QUIZZES_REQUEST':
			return {...state,
				loading: true
			}
		case 'FETCH_QUIZZES_ERROR':
			console.log(action);
			let errorMessage = 'Sorry something happened. Please try again later';	
			return {...state,
      		err: errorMessage
			}

		default:
			return state
	}
}




export default quizReducer

// 	if(action.type ===actions.SELECT_QUIZ){
// 		return state
// 	}

// 	else if (action.type === actions.SELECT_ANSWER){
// 		return Object.assign({}, state, {
// 				values: Object.assign({}, state.values, {
// 					[action.name]: action.value
// 				})
// 		});
// 	}
// 	else if (action.type === actions.CALCULATE_SCORE){
// 		////if the selected = correct
// 		////if guess = questions.correct
// 		////$("#myform input[type='radio']:checked").val();
// 		///then increment the correct count
// 	}

// 	return state
// }
