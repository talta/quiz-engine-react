import React from 'react';
import {shallow} from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';

import Quiz from '../components/quiz';

describe('Quiz', ()=>{
	it('should render without crashing', ()=>{
		shallow(<Quiz />);
	});
});
