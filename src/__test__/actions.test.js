import {quizReducer} from '../reducers/index.js';
import {fetchQuizzes, saveUser, SAVE_USER}  from '../actions';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {ReactTestUtils} from 'react-dom/test-utils';
import data from '../../public/mock-state';

chai.use(chaiEnzyme());



// describe('fetchQuizzes', ()=>{	
// 	it('should dispatch loadQuizzes', ()=>{
// 			const state = {
// 				question: 'this is a test question',
// 				answers: [{
// 					answer: 'this is the first answer',
// 					correct: false
// 				},
// 				{
// 					answer: 'this is the correct answer',
// 					correct: true
// 				}
// 				]
// 			};
// 			global.fetch = jest.fn().mockImplementation(()=>
// 				Promise.resolve({
// 					ok: true,
// 					json(){
// 						return response;
// 					}
// 				})
// 			);
// 			const dispatch = jest.fn();
// 			return fetchQuizzes()(dispatch).then(()=>{
// 				// expect(fetch).toHaveBeenCalledWith(API+'/quiz');
// 				expect(dispatch).toHaveBeenCalledWith(fetch(response));
// 			});
// 	});
// });
describe('save_user', ()=>{
	it('should save a user to the state', ()=>{
		const username = 'tatest';
		const action = saveUser(username);
		expect(action.type).toEqual(SAVE_USER);
		expect(action.username).toEqual(username);
	})
})