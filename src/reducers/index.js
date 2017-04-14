
import assign from 'lodash.assign';


import * as actions from '../actions';

///this would be replaced by the call from the component:
import data from '../../public/mock-state'
// import bootBox from 'bootBox';


export const quizReducer = (state=data, action)=>{

	///rewrite with if else statement:
	if(action.type ===actions.SELECT_QUIZ){
		return state
	}
	else if (action.type === actions.SELECT_ANSWER){
		return assign({}, state, {
				values: assign({}, state.values, {
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
	return state
}





////commented out for clarity

// 	switch(action.type){
// 		case 'SELECT_QUIZ':
// 			// waitingDialog.hide();
// 			// set the state to contain the object received from the API


// 			// return Object.assign({}, state, {
// 			// 	question: action.question,
// 			// 	answers: [...state, {
// 			// 		message: action.answers[0].message,
// 			// 		correct: action.answers[0].correct
// 			// 	}
// 			// 	]
// 			// });
// 			return state

// 		case 'SELECT_ANSWER':
// 			return assign({}, state, {
// 				values: assign({}, state.values, {
// 					[action.name]: action.value
// 				})
// 			});

// 			// waitingDialog.hide();
// 			// return Object.assign({selectedAnswer}, state, {

// 			// return Object.assign({}, state, {
// 			// 	////for the object index of selectedAnswer in teh answers array, push(or some other method,  v2 githubProjectExamples) selectedAnswer: true into the object
// 			// 	////potentially a for in loop
			

// 			// 	// message: action.answers[`${selectedAnswer}`].message,
// 			// 	// correct: action.answers[`${selectedAnswer}`].correct,
// 			// 	selectedAnswer: true
// 			// });
// 		case 'SUBMIT_ANSWER_SUCCESS':
// 			// waitingDialog.hide();
// 			// bootBox.alert("Thank you for submitting your answers.")


// 			// return Object.assign({}, state, {

// 			// });
// 			return state
// 		case 'SUBMIT_ANSWER_ERROR':
// 			// waitingDialog.hide();
// 			// bootBox.alert("Apologies, there was an error submitting your answers.")
// 			return state
// 		default: 
// 			return state
// 	}

// }
