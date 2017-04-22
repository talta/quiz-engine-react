
import {combineReducers} from 'redux';
import quizAPI from './quiz-api';
import quizReducer from './quiz-reducer';
import userReducer from './user-reducer';

const rootReducer = combineReducers({
	quizAPI,
	quizReducer,
	userReducer
})

export default rootReducer
