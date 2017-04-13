import * as actions from '../actions/index';

///this would be replaced by the call from the component:
import data from '../../public/mock-state'


export const quizReducer = (state = data, action)=>{

	switch(action.type){
		case 'SELECT_QUIZ':
			waitingDialog.hide();
			return Object.assign({}, state, {
				question: action.question,
				answers: [...state, {
					message: action.answers[0].message,
					correct: action.answers[0].correct
				}
				]
			});
		case 'SELECT_ANSWER':
			waitingDialog.hide();
			return Object.assign({selectedAnswer}, state, {
				////for the object index of selectedAnswer in teh answers array, push selectedAnswer: true into the object
				////potentially a for in loop
				message: action.answers[`${selectedAnswer}`].message,
				correct: action.answers[`${selectedAnswer}`].correct,
				selectedAnswer: true
			});
		case 'SUBMIT_ANSWER_SUCCESS':
			waitingDialog.hide();
			bootBox.alert("Thank you for submitting your answers.")
			return Object.assign({}, state, {

			});
		case 'SUBMIT_ANSWER_ERROR':
			waitingDialog.hide();
			bootBox.alert("Apologies, there was an error submitting your answers.")
			return state
		default: 
			return state
	}

}