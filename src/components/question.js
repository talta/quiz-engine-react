import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import QuestionAnswer from './question-answers';
import QuizCounter from './quiz-counter';
import styles from './css/App.css';

import {selectAnswer, incrementScore, incrementCounter} from '../actions';


export class Question extends React.Component{
  constructor(props, context){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.storeAnswer = this.storeAnswer.bind(this);
    this.router=context.router;
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
      this.props.dispatch(incrementScore());
    }
    ///if the current question === length of the selectedQuiz.questions
    console.log('Question Props: ', this.props);
    if(this.props.currentIndex+1 === this.props.selectedQuiz.questions.length){
      console.log('reached the end of the quiz');
      this.router.history.push('/results');
    }else{
      this.props.dispatch(incrementCounter());
      console.log('Question Props counter', this.props.currentIndex);
    }
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

Question.contextTypes={router:PropTypes.object}



/*



////to score:


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

