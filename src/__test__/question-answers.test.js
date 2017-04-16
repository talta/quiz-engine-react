////tests fail to run: https://github.com/facebook/jest/issues/3114


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
	it('should render the answers', ()=>{
		const answers = [{message: 'first answer'}] 
		const wrapper = shallow(<QuestionAnswer />);
		expect(wrapper.contains(<input><label>{answers.message}</label></input>))toEqual(true);
	});
	it('should have the number of inputs equal to the number of items within the answers array', ()=>{
		const answers = [{message: 'first answer'}, {message: 'second answer'}];
		const wrapper = shallow(<QuestionAnswer />);
		const instance = wrapper.instance();
		answers.forEach(instance.answers);
		expect(wrapper.state('quiz').length).toEqual(answers.length);
	});
})
