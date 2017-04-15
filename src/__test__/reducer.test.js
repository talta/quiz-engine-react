import quizReducer from '../reducers/index.js';
import * as actions from '../actions';

describe('quizReducer', ()=>{
	it('should return the current state on an unknown action', ()=>{
		let currentState = {};
		const state = reducer(currentState, {type: '_UNKNOWN'});
		expect(state).toBe(currentState);
	});
	describe('load quiz', ()=>{
		it('should load a quiz when selected', ()=>{
			let state = {
				question: 'this is a test question',
				answers: [{
					answer: 'this is the first answer',
					correct: false
				},
				{
					answer: 'this is the correct answer',
					correct: true
				}
				]
			};
			state = quizReducer(state, loadQuiz());
			expect(state.question).toEqual('this is the test question');
			expect(state.answers).toEqual([]);
			
		})
	})
})