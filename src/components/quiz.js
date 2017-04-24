import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import QuizIntro from './quiz-intro';
import Question from './question';
import QuizCounter from './quiz-counter';


export  class Quiz extends React.Component {
  constructor(props, context) {
      super(props);
      this.storeAnswer = this.storeAnswer.bind(this);
      this.router=context.router;
  }

  handleAnswerSelected(){
    console.log('handle answer selection called');
  }

  handleSubmit(){
    console.log('handle submit of the quiz called');
  }

  storeAnswer(input) {
    // const { id, answer } = input
    // this.answers[id] = answer
    console.log(this.answers)
  }

  componentDidMount(){
    console.log('quiz component mounted');
    console.log('selected quiz prop: ',  this.props.selectedQuiz);
  }

  render(){
    return(
            <div>
              <div>
                <h3>Quiz: {this.props.selectedQuiz.name}
                  <QuizIntro />
                  <QuizCounter selectedQuiz={this.props.selectedQuiz} />
                </h3>
              </div>
              <form onSubmit={this.handleSubmit()}>
                <div>
                  <Question storeAnswer={input => this.storeAnswer} selectedQuiz={this.props.selectedQuiz} />
                </div>
                <input type="submit" id="nextButton" className="button" name="submit" value="Next" />
              </form>
            </div>
    )
  }
}

const mapStateToProps = (state) =>{
  const {quizzes}= state.quizAPI;
  const {selectedQuiz}= state.quizReducer;
  return {selectedQuiz, quizzes} 
};

///if using history.push, pass the router through proptypes
Quiz.contextTypes={router:PropTypes.object}

export default connect(mapStateToProps)(Quiz);