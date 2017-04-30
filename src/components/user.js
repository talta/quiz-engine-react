import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import PropTypes from 'prop-types';

import {saveStorage, loadStorage} from '../helpers/localStorage';
import styles from './css/user.css';
import {saveUser} from '../actions'


export default class User extends React.Component {
  constructor(props, context) {
      super(props);
      this.router=context.router;
  }

  ComponentDidMount(){
    console.log('user component mounted');
    const username  = loadStorage();
    console.log(`username: ${username}`);
    this.props.dispatch(saveUser(username));
  }

  handleClick=(event)=>{
    event.preventDefault();
    console.log('user create button selected');
    const username = this.refs.username.value;
    saveStorage(username);
    this.router.history.push('/welcome');
    console.log(`this is the username after stored ${username}`);
  }


  render(){
    return (
      <Router>
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
        </div>
      </Router>
    )
  }
}

///pass the router through proptypes
User.contextTypes={router:PropTypes.object}

