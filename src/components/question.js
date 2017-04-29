import React from 'react';
import {connect} from 'react-redux';

import QuestionAnswer from './question-answers';
import QuizCounter from './quiz-counter';
import styles from './css/App.css';

import {selectAnswer, incrementScore, incrementCounter} from '../actions';


export class Question extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.storeAnswer = this.storeAnswer.bind(this);
  }

  storeAnswer(input) {
    console.log('Store Answer Input: ', input);
    this.props.dispatch(selectAnswer(input));
  }
  
  handleClick(event){
    ///3 things: score Answer, increment counter, rerender with next question
    console.log('Question handle click called');

    event.preventDefault();

    console.log('selected Answer: ', this.props.answerValue);
    console.log('index answer: ', this.props.selectedQuiz.questions[this.props.currentIndex].answer);
    ////1st: store and score answer
    if(this.props.answerValue === this.props.selectedQuiz.questions[this.props.currentIndex].answer){
      console.log('correct answer selected');
    }

    /////2nd: Increment counter;

    ////this is being called on load:
    this.props.dispatch(incrementCounter());


    /////3rd: rerender with the next question:

  }


  componentWillMount(){
    console.log('Question Component Will Mount');
  }

  componentDidMount(){
    console.log('Question compoenent Mounted');
  }


	render(){
    let question = this.props.selectedQuiz.questions[this.props.currentIndex]
    console.log('QUESTION: ', question)
		return (

      <div className='questions'>
          <div>
            <h3 id='question' className='questionName'>Question:{question.question}</h3>
          </div>
          <QuestionAnswer question={question} 
                          grabAnswer={input => this.storeAnswer(input)} />
          <button onClick={this.handleClick} 
                  className='nextQuestionButton'>Next Question!
          </button>
      </div>
    ) 
    console.log('the question should be returned');
	}
};


const mapStateToProps=state=>{
  const {quizzes}= state.quizAPI;
  const {selectedQuiz, currentIndex, answerValue, currentQuestion, score}= state.quizReducer;
  return {quizzes, selectedQuiz, currentIndex, answerValue, currentQuestion, score}
};

export default connect(mapStateToProps)(Question);





/*



////to score:
      // console.log('Score Before:', this.props.score)
      // this.props.dispatch(incrementScore());
      // console.log('Score After:', this.props.score)

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
    // console.log('this answer within handle click: ', this.answer);
    // if(this.answer>0){
    //     console.log('answer can be submitted');
    //       this.props.onNext(i)
    // // }
    // this.props.dispatch(incrementCounter(i))


            <div> 
              {this.props.selectedQuiz.questions.map((question, i)=>(
                  <div key={i}>
                    <h3 id='question'
                        className='questionName'
                    >
                      Question: {question.question}
                    </h3>
                    
                    <button onClick={this.handleClick(i)}
                            className='nextQuestionButton'
                    >
                      Next Question!
                    </button>
                  </div> 
              ))}
            </div>
*/




//// <QuestionAnswer storeAnswer={input => this.props.storeAnswer(input)} />

