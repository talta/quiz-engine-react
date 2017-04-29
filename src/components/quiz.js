import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import styles from './css/App.css'
import QuizIntro from './quiz-intro';
import Question from './question';
import QuizCounter from './quiz-counter';
import {determineQuizLength, setCompleted, incrementCounter, incrementScore} from '../actions';


export class Quiz extends React.Component {

  constructor(props, context) {
      super(props);
      this.router=context.router;
  }

  // handleSubmit(event){
  //   event.preventDefault();
  //   console.log('Quiz this: ', this);
  //   console.log('Quiz HandleSubmit Event: ', event);
  //   // if(this.props.answerValues === this.props.selectedQuiz.questions[this.props.currentIndex].answer){
  //   // // if(selectedAnswer === this.props.selectedQuiz.questions[this.props.currentIndex].answer){
  //   //   console.log('correct answer selected');
  //   //   console.log('Score:', this.props.score)
  //   //   this.props.dispatch(incrementScore());

  //   // }
  //   this.props.dispatch(incrementCounter());
  // }

  // handleAnswerSelected(){
  //   console.log('Quiz handle answer selection called');
  // }

  // nextAction() {
  //   if(this.props.selectedAnswer == this.answer) {
  //     console.log('Quiz Selected is correct');
  //   }
  // }


  componentWillMount(){
    console.log('Quiz Componenet Will Mount');
  }

  componentDidMount(){
    console.log('Quiz Component Mounted');
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
  const {selectedQuiz, completed, numberOfQuestions, currentIndex, currentQuestion}= state.quizReducer;
  return {selectedQuiz, quizzes, currentIndex, currentQuestion, completed} 
};


Quiz.contextTypes={router:PropTypes.object}

export default connect(mapStateToProps)(Quiz);

////removed from the question compoenent render:
//////storeAnswer={input => this.storeAnswer(input)} 


///
                          // onNext={(i)=>this.nextQuestion()}
