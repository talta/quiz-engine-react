import React from 'react';

import {saveState} from '../helpers/localStorage';
import styles from './css/user.css';


export default class Users extends React.Component {
  constructor(props) {
      super(props);
  }

  handleClick=(event)=>{
    event.preventDefault();
    const username = this.refs.username.value;
    saveState(username);
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