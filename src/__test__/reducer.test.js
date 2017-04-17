import {quizReducer} from '../reducers/index.js';
import {loadQuiz}  from '../actions';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {TestUtils} from 'react-dom'
import data from '../../public/mock-state';

chai.use(chaiEnzyme());



describe('quizReducer', ()=>{
	it('should return the current state on an unknown action', ()=>{
		let currentState = data;
		const state = quizReducer(currentState, {type: '_UNKNOWN'});
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
			state = quizReducer(state, loadQuiz(state));
			expect(state.question).toEqual('this is a test question');
			// expect(state.answers).toBe.a('array');
			// expect(state.answers.answer).toBe.a('string');
			// expect(state.answers.correct).toBe.a('boolean');
			expect(state.answers[1].correct).toEqual(true);
		});
	});
})