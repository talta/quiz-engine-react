

///this would be replaced by the call from the component:
const initialState = {
	selectedQuiz: '',
	values: {}
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



// const store = createStore(quizReducer);

// function createStore(reducer){
// 	let state = data;
// 	const getState = ()=>(state);
// 	const dispatch = (action)=>{
// 		state = reducer(state, action);
// 	}
// 	return {getState, dispatch};
// }