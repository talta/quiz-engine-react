import React from 'react';
import {connect} from 'react-redux';

import QuestionAnswer from './question-answers';
import QuizCounter from './quiz-counter';
import styles from './css/App.css';

import {selectAnswer, incrementScore} from '../actions';


export class Question extends React.Component{
    answer = 0;
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.storeAnswer = this.storeAnswer.bind(this);
  }

  storeAnswer(input) {

    console.log('Store Answer Input: ', input);
    // this.props.dispatch(selectAnswer(input))
    this.answer = input;
    let selectedAnswer = this.answer;
    console.log('selectedAnswer: ', selectedAnswer);
    console.log('index answer: ', this.props.selectedQuiz.questions[this.props.currentIndex].answer);
    if(selectedAnswer === this.props.selectedQuiz.questions[this.props.currentIndex].answer){
      console.log('correct answer selected');
      console.log('Score:', this.props.score)
      this.props.dispatch(incrementScore());

    }


  }
  
  handleClick(i){
    event.preventDefault();
    console.log('Question handle click called');
    console.log('handleClick key:', i)


    // let selectedAnswer = this.answer;
    // console.log('selectedAnswer: ', selectedAnswer);

    ///////this is not being identified on load:
    // console.log('index question: ', this.props.selectedQuiz.questions[this.props.currentIndex])
    // console.log('index answer: ', this.props.selectedQuiz.questions[this.props.currentIndex].answer);
    // if(selectedAnswer === this.props.selectedQuiz.questions[this.props.currentIndex].answer){
    //   console.log('correct answer selected');
    //   console.log('Score:', this.props.score)
    //   this.props.dispatch(incrementScore());
      
    // }
    console.log('this answer within handle click: ', this.answer);
    if(this.answer>0){
        console.log('answer can be submitted');
          this.props.onNext(i)
    }
  }

	render(){
    console.log('Question CHILDREN: ', this.props)
    console.log('selectedQuiz', this.props.selectedQuiz);
    console.log('stored answer: ', this.props.input);
		return (

      <div className='questions'>
            <div> 
              {this.props.selectedQuiz.questions.map((question, i)=>(
                  <div key={i}>
                    <h3 id='question'
                        className='questionName'
                    >
                      Question: {question.question}
                    </h3>
                    <QuestionAnswer question={question} 
                                    grabAnswer={input => this.storeAnswer(input)} />
                    <button onClick={this.handleClick(i)}
                            className='nextQuestionButton'
                    >
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
  const {selectedQuiz, currentIndex, selectedAnswer, currentQuestion, score}= state.quizReducer;
  return {quizzes, selectedQuiz, currentIndex, selectedAnswer, currentQuestion, score}
};

export default connect(mapStateToProps)(Question);


//// <QuestionAnswer storeAnswer={input => this.props.storeAnswer(input)} />

