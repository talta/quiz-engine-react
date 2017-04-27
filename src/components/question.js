import React from 'react';
import {connect} from 'react-redux';

import QuestionAnswer from './question-answers';
import QuizCounter from './quiz-counter';

import {selectAnswer} from '../actions';


export class Question extends React.Component{
    answer = 0
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.storeAnswer = this.storeAnswer.bind(this);
  }

  storeAnswer(input) {

    console.log('Store Answer Input: ', input);
    this.props.dispatch(selectAnswer(input))

    this.answer = input;
    console.log('Question Store Answer this.Answer: ', this.answer);

    ///confirm the current answer:
    console.log('Question current index:', this.props.currentIndex);

    ////store selectedAnswer
    console.log('Question Selected Answer:', this.answer)
    let selectedAnswer = this.answer;

    console.log('Question Selected Answer: ', selectedAnswer);
    console.log('Props selectedAnswer: ', this.props.selectedAnswer);
    console.log('Question Current Index: ', this.props.currentIndex);
    console.log('Question Current Question: ', this.props.currentQuestion);

    ////lodash find by index:
    console.log('Question correct answer:', this.props.selectedQuiz.questions[this.props.currentIndex].answer);
    if(selectedAnswer = this.props.selectedQuiz.questions[this.props.currentIndex].answer){
      console.log('Question storeAnswer was correct:', )
    }

  }
  
  handleClick(i){
    event.preventDefault();
    console.log('Question handle click called');
    console.log('handleClick key:', i)

    this.props.onNext(i)
  }

	render(){
    console.log('Question CHILDREN: ', this.props)
    console.log('selectedQuiz', this.props.selectedQuiz);
    console.log('stored answer: ', this.props.input);
		return (

      <div>
        <QuizCounter selectedQuiz={this.props.selectedQuiz}/>
        Current Question:

            <div> 
              {this.props.selectedQuiz.questions.map((question, i)=>(
                  <div key={i}>
                    <h3 id='question'>
                      Question: {question.question}
                    </h3>
                    <QuestionAnswer question={question} 
                                    grabAnswer={input => this.storeAnswer(input)} />
                    <button onClick={this.handleClick(i)}>
                      Next Question!
                    </button>
                  </div> 
              ))}
            </div>
      </div>
    ) 
	}
};

const mapStateToProps=state=>{
  const {quizzes}= state.quizAPI;
  const {selectedQuiz, currentIndex, selectedAnswer, currentQuestion}= state.quizReducer;
  return {quizzes, selectedQuiz, currentIndex, selectedAnswer, currentQuestion}
};

export default connect(mapStateToProps)(Question);


//// <QuestionAnswer storeAnswer={input => this.props.storeAnswer(input)} />

