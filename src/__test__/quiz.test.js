import React from 'react';
import {shallow} from 'enzyme';

import Quiz from '../components/quiz';

describe('Quiz', ()=>{
	it('should render without crashing', ()=>{
		shallow(<Footer />);
	});

});
