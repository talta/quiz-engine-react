

///this would be replaced by the call from the component:
import data from '../../public/mock-state'



const quizReducer=(state=data, action)=>{
	///rewrite with case statements:

	switch(action.type){
		case 'SELECT_QUIZ' :
			return state

		case 'SELECT_ANSWER' :
			return {...state,
				values: {...state.values, [action.name]: action.value}
			}

		default:
			return state
	}




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



export default quizReducer

// const store = createStore(quizReducer);

// function createStore(reducer){
// 	let state = data;
// 	const getState = ()=>(state);
// 	const dispatch = (action)=>{
// 		state = reducer(state, action);
// 	}
// 	return {getState, dispatch};
// }