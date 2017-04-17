import React from 'react';
import {shallow} from 'enzyme';

import Header from '../components/header';

describe('Header', ()=>{
	it('should render without crashing', ()=>{
		shallow(<Header />);
	});
	// it('should contain 4 li', ()=>{

	// })
});