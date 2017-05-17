import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Results extends Component{

  render(){
  	return(
		<div >
			<div className="congrats">
				Congratulations!  You are the quiz master!
			</div>
			<div className="results" >
		  		<div>
		  			<strong>Quiz:</strong> {this.props.selectedQuiz.name}
		  		</div>
		  		<div>
		  			<strong>Score:</strong> {this.props.score}
		  		</div>
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