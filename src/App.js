
import React from 'react';

import Header from './components/header';
import Footer from './components/footer';
import Quiz from './components/quiz';
import User from './components/user';


import store from './store';
import { loadState, saveState } from './helpers/localStorage';


 export default function App(props){
 // export class App extends React.Component {
 		///read from local storage 
 		const user = localStorage.getItem('User');
 		///if nothing returned, display user
 		if(typeof user !== 'undefined' && user !== null){
 			store.subscribe(() => saveState({
 				auth: store.getState().auth
			}));
 			return  (
  				<div>
  					<Header />
  					<User />
        			<Footer />
    			</div>
    		)
    	///if there is a user, get the user's score and render the quiz's
 		} 
 			////get the user's score
 			console.log('user found');
	 		return(
				<div>
					<Header />
					<Quiz />
			    	<Footer />
				</div>
			)
};




