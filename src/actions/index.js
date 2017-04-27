
import {API} from '../../config';




export const LOAD_QUIZ='LOAD_QUIZ';
export const loadQuiz = (selectedQuiz)=>({ 
	type: 'LOAD_QUIZ',
	selectedQuiz
})

export const LOAD_QUIZZES = 'LOAD_QUIZZES';
export const loadQuizzes=(response, loading) =>({
	type: 'LOAD_QUIZZES',
	response,
	loading
})

export const FETCH_QUIZZES_ERROR = 'FETCH_QUIZZES_ERROR';
export const fetchQuizzesError =  (err)=>({
	type: 'FETCH_QUIZZES_ERROR',
	err
})

// export const FETCH_QUIZZES_REQUEST = 'FETCH_QUIZZES_REQUEST';
// export const fetchQuizzesRequest =(loading)=>{
// 		type: 'FETCH_QUIZZES_REQUEST',
// 		loading
// }

export const FETCH_QUIZZES = 'FETCH_QUIZZES';
export const fetchQuizzes = () => dispatch=> {
	console.log('inside the fetch Quizzes');
	// dispatch(fetchQuizzesRequest());
	console.log('fetch quizzes request called');
		fetch(API+'/quiz', {headers:{'Content-Type':'application/json'}})
	    .then(response=>response.json())
	    .then(response=>{
	    	console.log('Server Response: ', response);
	    	console.log('then promise called within the action');
			dispatch(loadQuizzes(response))
	})
	    .catch((err)=>{
	    	console.log('actions error called');
  			dispatch(fetchQuizzesError(err))
	    })	
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

export const DETERMINE_QUIZ_LENGTH = 'DETERMINE_QUIZ_LENGTH';
export const determineQuizLength = (numberOfQuestions)=>({
	type: 'DETERMINE_QUIZ_LENGTH',
	numberOfQuestions
})

export const SET_COMPLETED = 'SET_COMPLETED';
export const setCompleted = (currentIndex)=>({
	type: 'SET_COMPLETED',
	currentIndex
})

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const incrementCounter = (currentIndex)=>({
	type: 'INCREMENT_COUNTER',
	currentIndex
})




export const SELECT_ANSWER = 'SELECT_ANSWER';
export const selectAnswer = (value)=>({
	type: 'SELECT_ANSWER',
	value
});


////may not need to be async:
// export const SUBMIT_ANSWERS_SUCCESS = 'SUBMIT_ANSWERS_SUCCESS';
// export const submitAnswersSuccess = ()=>({
// 	type: 'SUBMIT_ANSWERS_SUCCESS'
// });

///export FETCH_QUIZ_SUCCESS

///export FETCH_QUIZ_ERROR