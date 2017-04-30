import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import styles from './css/App.css'


export class Results extends Component{

  render(){
  	return(
		<div>
			<div>
				Congratulations!  You are the quiz master!
			</div>
	  		<div>
	  			Quiz:{this.props.selectedQuiz.name}
	  		</div>
	  		<div>
	  			Score: {this.props.score}
	  		</div>
	  	</div>
  	)
  }
}


const mapStateToProps=(state)=>{
  	const {selectedQuiz, score}= state.quizReducer;
	return  {selectedQuiz, score}
};

export default connect(mapStateToProps)(Results);