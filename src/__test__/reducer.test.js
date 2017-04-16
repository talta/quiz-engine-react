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
			// expect(state.answers).to.be.a('array');
			// expect(state.answers.answer).to.be.a('string');
			// expect(state.answers.correct).to.be.a('boolean');
			expect(state.answers[1].correct).toEqual(true);
		})
		// it('should dispatch loadQuiz', ()=>{
		// 	const state = {
		// 		question: 'this is a test question',
		// 		answers: [{
		// 			answer: 'this is the first answer',
		// 			correct: false
		// 		},
		// 		{
		// 			answer: 'this is the correct answer',
		// 			correct: true
		// 		}
		// 		]
		// 	};
		// 	global.fetch = jest.fn().mockImplementation(()=>
		// 		Promise.resolve({
		// 			ok: true,
		// 			json(){
		// 				return state;
		// 			}
		// 		})
		// 	);
		// 	const dispatch = jest.fn();
		// 	return loadQuiz(state)(dispatch).then(()=>{
		// 		// expect(fetch).toHaveBeenCalledWith(API+'/quiz');
		// 		expect(dispatch).toHaveBeenCalledWith(fetch(state));
		// 	});
		// })
	});
})
