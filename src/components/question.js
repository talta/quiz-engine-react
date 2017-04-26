import React from 'react';
import {connect} from 'react-redux';

import QuestionAnswer from './question-answers';
import QuizCounter from './quiz-counter';


export class Question extends React.Component{
  // constructor(props){
  //   super(props);
  // }

///1.score the selected answer
///////did selected===answers.correct?
//////////if yes, pass to quiz 
/////////
////2. quiz are we done?
  



	render(){
    console.log('Question CHILDREN: ', this.props)
    console.log('selectedQuiz', this.props.selectedQuiz);
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
                    <QuestionAnswer question={question} storeAnswer={input => this.storeAnswer} />
                  </div>
              ))}
               
            </div>
      </div>
    ) 
	}
};

const mapStateToProps=state=>{
  const {quizzes}= state.quizAPI;
  const {selectedQuiz}= state.quizReducer;
  return {quizzes, selectedQuiz}
};

export default connect(mapStateToProps)(Question);


//// <QuestionAnswer storeAnswer={input => this.props.storeAnswer(input)} />

