import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import QuizIntro from './quiz-intro';
import Question from './question';
import QuizCounter from './quiz-counter';
import {determineQuizLength, setCompleted, incrementCounter} from '../actions';


export  class Quiz extends React.Component {

  constructor(props, context) {
      super(props);
      this.router=context.router;
      this.nextQuestion = this.nextQuestion.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log('Quiz HandleSubmit Event: ', event);
  }

  // handleAnswerSelected(){
  //   console.log('Quiz handle answer selection called');
  // }



  // nextAction() {
  //   if(this.props.selectedAnswer == this.answer) {
  //     console.log('Quiz Selected is correct');
  //   }
  // }

  componentWillMount(){
    console.log('Quiz component mounted');
  }

  nextQuestion(i){
    console.log('Quiz Next Question Called with Question Index', i);
    console.log('Quiz THis: ', this);

    ///this might not go here
    this.props.dispatch(incrementCounter(i));
  }

  componentDidMount(){
    console.log('Quiz component mounted');
    console.log('Quiz selected quiz prop: ',  this.props.selectedQuiz);
  }

  render(){
    const isEmpty = this.props.selectedQuiz.questions && this.props.selectedQuiz.questions.length === 0;

    return(
      <div>
        
        <form onSubmit={this.handleSubmit}>
          {isEmpty
            ? <h2>No Active Quiz </h2>
            : <div>
                <div>
                  <h3>Quiz: {this.props.selectedQuiz.name}
                    <QuizIntro />
                    <QuizCounter selectedQuiz={this.props.selectedQuiz} />
                  </h3>
                </div>
                <Question 
                          selectedQuiz={this.props.selectedQuiz} 
                          onNext={(i)=>this.nextQuestion(i)}
                          />
              </div>
          }
        </form>
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

