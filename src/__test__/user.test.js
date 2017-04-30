import React from 'react';
import {shallow} from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';

import User from '../components/user';

describe('User', ()=>{
	it('should render without crashing', ()=>{
		shallow(<User />);
	});
})