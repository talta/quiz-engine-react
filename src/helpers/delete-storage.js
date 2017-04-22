import React, {PropTypes} from 'react';

import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';

export default class DeleteStorage extends React.Component {
	constructor(props, context){
		super(props);
		this.router=context.router;
	}

	handleClick=(event)=>{
		event.preventDefault();
		localStorage.clear()
	}

	handleRedirect=(event)=> {
		this.router.history.push('/welcome');
	///atempts to redirect correctly:
    // <Redirect to='/welcome' />
    // <Link to='/welcome' />
    // <Redirect to='/username' />
    // <Route path='/welcome' component={Welcome} />
    /////attempt to user interpolation: ${username}
	}
	render(){
		return(
		<div>
			<button onClick={this.handleClick}>
				Delete
			</button>
			<button onClick={this.handleRedirect}>
				redirect
			</button>
		</div>

		)
	}	
}



///pass the router through proptypes
DeleteStorage.contextTypes={router:PropTypes.object}
