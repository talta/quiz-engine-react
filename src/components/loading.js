import React from 'react';
import Loading from 'react-loading';

const Loader=({spin, blue})=>(
		<Loading type={spin} color={blue} height='250px' width='250px' />
	);

export default Loader;