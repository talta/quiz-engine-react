

///this would be replaced by the call from the component:
const initialState = {
	selectedQuiz: {},
	values: {},
	completed: 0,
	numberOfQuestions: '',
	currentIndex: 0
}



const quizReducer=(state=initialState, action)=>{
	///rewrite with case statements:

	switch(action.type){

		case 'SELECT_ANSWER' :
			return {...state,
				values: {...state.values, [action.name]: action.value}
			}
		case 'SELECT_QUIZ' :
			return {...state,
				selectedQuiz: action.selectedQuiz
			}

		case 'DETERMINE_QUIZ_LENGTH':
			const ReducerNumberOfQuestions =  {...state,
				numberOfQuestions: action.numberOfQuestions
			}
			console.log('Quiz Reducer Number of Questions: ', ReducerNumberOfQuestions);
			return ReducerNumberOfQuestions

		case 'SET_COMPLETED':
			const completedQuestions = {...state,
				completed: action.completed
			}
			console.log('Quiz Reducer set Complted: ', completedQuestions);
			return completedQuestions

		case 'INCREMENT_COUNTER':
			const incrementCounter = {...state,
				currentIndex: action.currentIndex
			}
			console.log('Quiz Reducer increment counter: ', incrementCounter);
			return incrementCounter
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

// 	else if(action.type ===actions.SUBMIT_ANSWER_SUCCESS){
// 		return state
// 	}

// 	else if (action.type === actions.SUBMIT_ANSWER_ERROR){
// 		return state
// 	}
// 	else if (action.type === actions.CALCULATE_SCORE){
// 		////if the selected = correct
// 		////if guess = questions.correct
// 		////$("#myform input[type='radio']:checked").val();
// 		///then increment the correct count
// 	}

// 	return state
// }
