import React from 'react';
import {shallow} from 'enzyme';

import QuestionAnswer from '../components/question-answers';


describe('QuestionAnswer', ()=>{
	it('should render without crashing', ()=>{
		shallow(<QuestionAnswer />);
	});
	it('should render a question', ()=>{
		const question = 'foo';
		const wrapper = shallow(<QuestionAnswer />);
		expect(wrapper.contains(<h3> Question: {question}</h3>)).toEqual(true);
	});
})
