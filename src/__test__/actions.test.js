import {quizReducer} from '../reducers/index.js';
import {loadQuiz}  from '../actions';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {TestUtils} from 'react-dom'
import data from '../../public/mock-state';

chai.use(chaiEnzyme());



describe('loadQuiz', ()=>{	
	it('should dispatch loadQuiz', ()=>{
			const state = {
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
			global.fetch = jest.fn().mockImplementation(()=>
				Promise.resolve({
					ok: true,
					json(){
						return state;
					}
				})
			);
			const dispatch = jest.fn();
			return loadQuiz(state)(dispatch).then(()=>{
				// expect(fetch).toHaveBeenCalledWith(API+'/quiz');
				expect(dispatch).toHaveBeenCalledWith(fetch(state));
			});
		})