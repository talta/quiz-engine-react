export const SELECT_QUIZ = 'SELECT_QUIZ';
///should accept the return from the API
///should push the return form the API into the state
export const selectQuiz = ()=>({
	type: 'SELECT_QUIZ'
});

export const SELECT_ANSWER = 'SELECT_ANSWER';
export const selectAnswer = (selectedAnswer)=>({
	type: 'SELECT_ANSWER';
	selectedAnswer
});

export const SUBMIT_ANSWERS = 'SUBMIT_ANSWERS';
export const submitAnswers = ()=>{
	type: 'SUBMIT_ANSWERS';

}

// export CREATE_NEW_USER = 'CREATE_NEW_USER';

// export LOGIN_USER = 'LOGIN_USER';

// export TOGGLE_LOGIN_REGISTER = 'TOGGLE_LOGIN_REGISTER';

// export GRANT_ACCESS = 'GRANT_ACCESS';

///FETCH_QUIZ

///export FETCH_QUIZ_SUCCESS


///export FETCH_QUIZ_ERROR