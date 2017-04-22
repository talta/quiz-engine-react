// /* eslint-disable no-shadow */
// import React from 'react';

// import { Route, Redirect } from 'react-router-dom';




// export class PrivateRoute extends React.Componenent{

// 	constructor(props){
// 		super(props);
// 		const username = null
// 	}

// 	compoentDidMount(){
// 		console.log('the comonent will mount');
// 		const username = loadState();
// 		// if( username === undefined || username === null){
// 		// 	console.log('the username doesnt exist and this should work');
// 		// 		// <Route path='/username' component={User} />
// 		// 		// <Route render={() => (<Redirect push to='/username' />)} />
// 		// 		// <Route render={() => (<Redirect to='/username' />)} />

// 		// }
// 		// {
// 		// 	(username === undefined || username === null)? 
// 	}
// 	render(
// 			<Route render={()=>(
// 					typeof username !== 'undefined' && username !== null
// 					?
// 					<Quiz />
// 					: 
// 					<User />
// 				)} />


// 	)
	

// }
// export default PrivateRoute;




// const PrivateRoute = ({ component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     client.isLoggedIn() ? (
//       React.createElement(component, props)
//     ) : (
//       <Redirect to={{
//         pathname: '/login',
//       }} />
//     )
//   )} />
// );
