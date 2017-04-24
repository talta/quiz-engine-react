import React from 'react';
import {connect} from 'react-redux';

import QuestionAnswer from './question-answers';

import QuizCounter from './quiz-counter';

////deal with submitting answer
///deal with check answer's correct value


export class Question extends React.Component{
  // constructor(props){
  //   super(props);
  // }

	render(){
    console.log('Question CHILDREN: ', this.props)
    console.log('quizzes', this.props.quizzes);
		return (

      /////the 

      <div>
        <QuizCounter selectedQuiz={this.props.selectedQuiz}/>
        this would be the question

            <div> 
               {this.props.selectedQuiz.questions.map((question, i)=>(
                  <div key={i}>

                    <h3 id='question'>
                     Question: {question.question}
                    </h3>
                   <QuestionAnswer question={question} />
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

////        {this.props.quizzes[id].questions.question}


////map the questions:  needs some bug fixing:

            // <div> 
              // {this.props.questions.map((question, i)=>(
                // <div key={i}>
                  // <h3 id='question'>
                   // Question: {question}
                  // </h3>
               // </div>
            //   ))}
            //   <QuestionAnswer storeAnswer={input => this.props.storeAnswer(input)} />
            // </div>



//////////example of mapping the answers:
 // {this.props.answers.map((answer, i)=>(
 //            <div key={i}> 
 //            <input onChange={input => this.props.storeAnswer({id: `question: ${i}`, answer: answer.message})} 
 // type="radio" name="answer" 
 // id={`answer${i}`} /><label>{answer.message}</label><br />
 //            </div> 
 //          ))}
