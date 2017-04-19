import React from 'react';
import {connect} from 'react-redux';

import QuestionAnswer from './question-answers';


export class Question extends React.Component{

	render(){
    console.log('CHILDREN: ', this.props)
    console.log('questions', this.props);
		return (
          <div>
              <h3 id='question'>Question: {this.props.question}</h3>
              <QuestionAnswer />
		      </div>
    ) 
	}
};


////map the questions:  needs some bug fixing:

            // <div> 
            //   {this.props.questions.map((question, i)=>(
            //     <div key={i}>
            //       <h3 id='question'>
            //        Question: {question}
            //       </h3>
            //     </div>
            //   ))}
            // <QuestionAnswer storeAnswer={input => this.props.storeAnswer(input)} />
            // </div>



//////////example of mapping the answers:
 // {this.props.answers.map((answer, i)=>(
 //            <div key={i}> 
 //            <input onChange={input => this.props.storeAnswer({id: `question: ${i}`, answer: answer.message})} 
 // type="radio" name="answer" 
 // id={`answer${i}`} /><label>{answer.message}</label><br />
 //            </div> 
 //          ))}

const mapStateToProps=state=>({
  name: state.quizReducer.name,
  // questions: state.quizReducer.questions

  question: state.quizReducer.question,
  answers: state.quizReducer.answers
});


export default connect(mapStateToProps)(Question);