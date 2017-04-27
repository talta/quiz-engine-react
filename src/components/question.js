import React from 'react';
import {connect} from 'react-redux';

import QuestionAnswer from './question-answers';
import QuizCounter from './quiz-counter';


export class Question extends React.Component{
    answer = 0
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.storeAnswer = this.storeAnswer.bind(this);
  }


  //////////score here
  //////has the data to determine if the selected nswer is correct


///1.score the selected answer
///////did selected===answers.correct?
//////////if yes, pass to quiz 
/////////
////2. quiz are we done?


  storeAnswer(input) {

    ///find correct answer:
    ////set the correctAnswer = answers.message


    this.answer = input;
    console.log('Question Store Answer this.Answer: ', this.answer);

    ///confirm the current answer:
    console.log('Question current index:', this.props.currentIndex);


    ////store selectedAnswer
    console.log('Question Selected Answer:', this.answer)
    let selectedAnswer = this.answer;
    console.log('Question Selected Answer: ', selectedAnswer);


    console.log('Question Current Index: ', this.props.currentIndex);

    console.log('Question correct answer:', this.props.selectedQuiz.questions[this.props.currentIndex].answer);
    if(selectedAnswer = this.props.selectedQuiz.answer){
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
                                    storeAnswer={input => this.props.storeAnswer(input)} />
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
  const {selectedQuiz, currentIndex}= state.quizReducer;
  return {quizzes, selectedQuiz, currentIndex}
};

export default connect(mapStateToProps)(Question);


//// <QuestionAnswer storeAnswer={input => this.props.storeAnswer(input)} />

