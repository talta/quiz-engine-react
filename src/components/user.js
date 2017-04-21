import React, {PropTypes} from 'react';
import Route from 'react-router-dom';

import {saveState} from '../helpers/localStorage';
import styles from './css/user.css';

import Welcome from './welcome';


export default class User extends React.Component {
  constructor(props, context) {
      super(props);
      this.router=context.router;
  }

  handleClick=(event)=>{
    event.preventDefault();
    const username = this.refs.username.value;
    saveState(username);
    this.router.history.push('/welcome');
    // <Redirect to='/username' />
    // <Route path='/welcome' component={Welcome} />
    /////attempt to user interpolation: ${username}
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

///pass the router through proptypes
User.contextTypes={router:PropTypes.object}

