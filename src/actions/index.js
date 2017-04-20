
import {API} from '../../config';


// export const SELECT_QUIZ = 'SELECT_QUIZ';
///should accept the return from the API
///should push the return form the API into the state
// export const selectQuiz = ()=>({
// 	type: 'SELECT_QUIZ'
// });

// export const SELECT_ANSWER = 'SELECT_ANSWER';
// export const selectAnswer = (value)=>({
// 	type: 'SELECT_ANSWER',
// 	value
// });

// export const SUBMIT_ANSWERS_SUCCESS = 'SUBMIT_ANSWERS_SUCCESS';
// export const submitAnswersSuccess = ()=>({
// 	type: 'SUBMIT_ANSWERS_SUCCESS'
// });

export const LOAD_QUIZ='LOAD_QUIZ';
export const loadQuiz = (response)=>({ 
	type: 'LOAD_QUIZ',
	response
})
export const FETCH_QUIZZES = 'FETCH_QUIZZES';
export const fetchQuizzes = () => {
		return dispatch =>{
			fetch(API+'/quiz', {headers:{'Content-Type':'application/json'}})
		    .then(response=>
		        response.json()
		      )
		    .then(response=>{       
		        this.props.dispatch(loadQuiz(response));
		        console.log('dispatch called');
		      })
		    .catch((err)=>{
		      console.log(err);
		      throw new Error(err);  
		    })
		}	
}

// export TOGGLE_LOGIN_REGISTER = 'TOGGLE_LOGIN_REGISTER';

// export GRANT_ACCESS = 'GRANT_ACCESS';

///FETCH_QUIZ

///export FETCH_QUIZ_SUCCESS


///export FETCH_QUIZ_ERROR