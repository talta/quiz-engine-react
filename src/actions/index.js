
import {API} from '../../config';



export const LOAD_QUIZ='LOAD_QUIZ';
export const loadQuiz = (response)=>({ 
	type: 'LOAD_QUIZ',
	response
})

export const LOAD_QUIZZES = 'LOAD_QUIZZES';
export const loadQuizzes=(response) =>({
	type: 'LOAD_QUIZZES',
	response
})

export const FETCH_QUIZZES = 'FETCH_QUIZZES';
export const fetchQuizzes = () => {
		return dispatch =>{
			fetch(API+'/quiz', {headers:{'Content-Type':'application/json'}})
		    .then(response=>response.json())
		    .then(response=>{console.log('this is the response from the server: ', response);
				dispatch(loadQuizzes(response))
		})
		    .catch((err)=>{
		      console.log(err);
		      throw new Error(err);  
		    })
		}	
}

export const SAVE_USER = 'SAVE_USER';
export const saveUser = (username) => ({
	type: 'SAVE_USER',
	username
})

export const SELECT_QUIZ = 'SELECT_QUIZ';
export const selectQuiz = (selectedQuiz)=>({
	type: 'SELECT_QUIZ',
	selectedQuiz
});

// export const SELECT_ANSWER = 'SELECT_ANSWER';
// export const selectAnswer = (value)=>({
// 	type: 'SELECT_ANSWER',
// 	value
// });

// export const SUBMIT_ANSWERS_SUCCESS = 'SUBMIT_ANSWERS_SUCCESS';
// export const submitAnswersSuccess = ()=>({
// 	type: 'SUBMIT_ANSWERS_SUCCESS'
// });

///export FETCH_QUIZ_SUCCESS

///export FETCH_QUIZ_ERROR