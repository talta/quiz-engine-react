import React from 'react';
import {shallow} from 'enzyme';

import QuizIntro from '../components/quiz-intro';

describe('QuizIntro', ()=>{
	it('should render without crashing', ()=>{
		shallow(<Footer />);
	});
});