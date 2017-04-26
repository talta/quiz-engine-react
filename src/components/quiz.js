import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import QuizIntro from './quiz-intro';
import Question from './question';
import QuizCounter from './quiz-counter';
import {determineQuizLength, setCompleted} from '../actions';


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
    event.preventDefault();
    console.log('handle submit of the quiz called');

    console.log('Quiz Completed in State: ', this.props.completed);
    let completed = this.props.completed
    console.log('Quiz Completed before incremented', completed);
    completed++
    console.log('Quiz Completed after incremented', completed);
    ///dispatch the action to restore this value
    this.props.dispatch(setCompleted(completed))

    console.log('Quiz Completed after stored', completed);
    console.log('Quiz Competed in State', this.props.completed);
  }

  storeAnswer(input) {
    // const { id, answer } = input
    // this.answers[id] = answer
    console.log(this.answers)
  }

  componentWillMount(){
    let numberOfQuestions = this.props.selectedQuiz.questions.length;
    this.props.dispatch(determineQuizLength(numberOfQuestions));
    console.log('Quiz Props for completed: ', this.props.completed);
    console.log('Quiz Props for number of Questions: ', this.props.numberOfQuestions);

////////questions will tell you if the answer is correct
////////store score++
/////////are we done yet?
/////////if no
    /////go to next question
    //////else, 
    ////////display results


  }

  componentDidMount(){
    console.log('quiz component mounted');
    console.log('selected quiz prop: ',  this.props.selectedQuiz);

    ///establish the counter's number of questions and completed
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
  const {selectedQuiz, completed, numberOfQuestions}= state.quizReducer;
  return {selectedQuiz, quizzes} 
};

///if using history.push, pass the router through proptypes
Quiz.contextTypes={router:PropTypes.object}

export default connect(mapStateToProps)(Quiz);