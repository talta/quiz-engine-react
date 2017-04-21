
import {combineReducers} from 'redux';
import quizAPI from './quiz-api';
import quizReducer from './quiz-reducer';

const rootReducer = combineReducers({
	quizAPI,
	quizReducer
})

export default rootReducer
