
import React from 'react';

import Header from './components/header';
import Footer from './components/footer';
import Quiz from './components/quiz';
import User from './components/user';


// import store from './store';
import { loadState} from './helpers/localStorage';


export default function App(){
	// const username = 'tatest';
	// saveState(username);
	if(typeof username !== 'undefined' && typeof username !== null){
		const loadedState = loadState();
		
		console.log(loadedState);
		////route for quiz
			return(
				<div>
					<Header />
					<Quiz />
			    	<Footer />
				</div>
			)

	}else{
		console.log('route the user to user view');
		// saveState()
	}
		
			return(
				<div>
					<Header />
					<User />
			    	<Footer />
				</div>
			)
}
// })
// export class App extends React.Component {
// 	constructor(props){
// 		super(props);

//  		const username = loadState();

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




//import store and connect the store and the App component
// /change to connect
// store.subscribe(() => saveState({
//   auth: store.getState().auth
// }));




