import React from 'react';
// import {connect} from 'react-redux';
import {saveState} from '../helpers/localStorage';

import styles from './css/user.css';

export default class Users extends React.Component {


  constructor(props) {
      super(props);
  }
  /////save the user's username to local storage

  handleClick=(event)=>{
    event.preventDefault();
    console.log('value of the input');
    console.log(this.refs.username.value);
    const username = this.refs.username.value;
    console.log(username);
    localStorage.setItem("username", username);
    ///confirm the username or display on the following quiz page
    ///then redirect the user to a different route

  }

  render(){
    return (
      <div className={styles.userwindow}>
            <div >
                <h4 >Welcome to <span>Alphabet to Zylophone Quizzes!</span></h4>
              <p id="welcomeNewUserInstructions">
                    Alphabet to Zylophone Quizzes is a quiz engine which encourages the leaders of tomorrow's world to stay hungry and focused for knowledge!
              
            </p>
            </div>
              <div >
                <form id="userSpace" onSubmit={this.handleClick}>
                    <h5 id="usernameHeader">Name:</h5>
                      <p id="username">Please enter your name in order to track your progress.</p>
                      <input type="text" ref="username" placeholder="Name" id="userName" />
                      <input type="submit" id="createUserButton" value="Let's do it!" />  
                </form>
              </div>
            <div >
              
            </div>
      </div>
    )
  }
    

}