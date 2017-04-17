import React from 'react';
import {shallow} from 'enzyme';

import User from '../components/user';

describe('User', ()=>{
	it('should render without crashing', ()=>{
		shallow(<User />);
	});
})