import React from 'react';
import {shallow} from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';

import Question from '../components/question';

describe('Question', ()=>{
	it('should render without crashing', ()=>{
		shallow(<Question />);
	});
	it('should render a question', ()=>{
		const question = 'foo';
		const wrapper = shallow(<Question />);
		expect(wrapper.contains(<h3> Question: {question}</h3>)).toEqual(true);
	});
});