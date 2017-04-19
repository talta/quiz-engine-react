
import React from 'react';

import Header from './components/header';
import Footer from './components/footer';
import Quiz from './components/quiz';
import User from './components/user';


import store from './store';
import { loadState, saveState } from './helpers/localStorage';


export default function App(){
				return(
				<div>
					<Header />
					<Quiz />
			    	<Footer />
				</div>
			)
}
// })
// export class App extends React.Component {
// 	constructor(props){
// 		super(props);

//  // 		const username = localStorage.getItem('username');

//  		// if(typeof username !== 'undefined' || username !== null){
//  		// 	return  (
//   	// 			<div>
//   	// 				<Header />
//   	// 				<User />
//    //      			<Footer />
//    //  			</div>
//    //  		)
//  		// } 


//  		// 	////future enahncement: get the user's score
//  		// 	////get the user's authentication

//  		// 	console.log(username);

//  		// 	console.log('user found');

// 	}
// 	render(){
// 			return(
// 				<div>
// 					<Header />
// 					<Quiz />
// 			    	<Footer />
// 				</div>
// 			)
// 	}
// };




////import store and connect the store and the App component
///change to connect
// store.subscribe(() => saveState({
//   auth: store.getState().auth
// }));




