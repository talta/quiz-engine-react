import React from 'react';
// import {connect} from 'react-redux';
import {saveState} from '../helpers/localStorage';

import styles from './css/user.css';

export default class Users extends React.Component {

  /////save the user's username to local storage

  handleSubmit(){
    console.log('handle submit called');
    console.log('value of the input');
    const username = 'value of input'
    localStorage.setItem("username", username)
    console.log(saveState);
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
                <div id="userSpace">
                    <h5 id="usernameHeader">Name:</h5>
                      <p id="username">Please enter your name in order to track your progress.</p>
                      <input type="text" name="username" id="userName" />
                  </div>
              </div>
            <div >
              <button type="button"data-dismiss="modal" id="createUserButton" onSubmit={this.handleSubmit()}>Let's do it!</button>  
            </div>
      </div>
    )
  }
    

}