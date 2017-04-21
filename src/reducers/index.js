
import * as actions from '../actions';

///this would be replaced by the call from the component:
import data from '../../public/mock-state'
// import bootBox from 'bootBox';


export const quizReducer=(state=data, action)=>{
	///rewrite with case statements:
	if(action.type ===actions.SELECT_QUIZ){
		return state
	}

	else if (action.type === actions.SELECT_ANSWER){
		return Object.assign({}, state, {
				values: Object.assign({}, state.values, {
					[action.name]: action.value
				})
		});
	}

	else if(action.type ===actions.SUBMIT_ANSWER_SUCCESS){
		return state
	}

	else if (action.type === actions.SUBMIT_ANSWER_ERROR){
		return state
	}
	else if (action.type === actions.CALCULATE_SCORE){
		////if the selected = correct
		////if guess = questions.correct
		////$("#myform input[type='radio']:checked").val();
		///then increment the correct count
	}

	else if(action.type === actions.LOAD_QUIZ){
		console.log(action.response, 'response from within the action');
		return  Object.assign({}, state, {
			name: action.response.name,
			index: action.response.index,
			question: action.response.question,
			answers: action.response.answers
		})
	}
	else if (action.type===actions.LOAD_QUIZZES){
		return Object.assign({}, state, {
			name: action.response.name
		})
	}
	return state
}


// const store = createStore(quizReducer);

// function createStore(reducer){
// 	let state = data;
// 	const getState = ()=>(state);
// 	const dispatch = (action)=>{
// 		state = reducer(state, action);
// 	}
// 	return {getState, dispatch};
// }
