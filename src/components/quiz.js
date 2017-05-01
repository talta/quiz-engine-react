import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'

// import styles from './css/App.css'
import QuizIntro from './quiz-intro';
import Question from './question';
import QuizCounter from './quiz-counter';
// import {incrementCounter, incrementScore} from '../actions';


export class Quiz extends React.Component {

  constructor(props, context) {
      super(props);
      this.router=context.router;
  }


  shouldComponentUpdate(){
    console.log('Quiz Updated');
    return true
  }

  render(){
    const isEmpty = this.props.selectedQuiz.questions === undefined ;

    return(
      <div className='quiz'>
        {isEmpty
            ? <h2>No Active Quiz </h2>
            : <div>
                <form>
                  <div>
                    <QuizIntro />
                      <h3>Quiz: {this.props.selectedQuiz.name}
                      <QuizCounter selectedQuiz={this.props.selectedQuiz} />
                    </h3>
                  </div>
                  <Question 
                          selectedQuiz={this.props.selectedQuiz} 
                          />
                </form>
              </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  const {quizzes}= state.quizAPI;
  const {selectedQuiz, completed, currentIndex, currentQuestion}= state.quizReducer;
  return {selectedQuiz, quizzes, currentIndex, currentQuestion, completed} 
};


Quiz.contextTypes={router:PropTypes.object}

export default connect(mapStateToProps)(Quiz);
