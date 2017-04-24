import React from 'react';
import {connect} from 'react-redux';

import QuestionAnswer from './question-answers';

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
        this would be the question

            <div> 

            </div>



      </div>
    ) 
	}
};

const mapStateToProps=state=>{
  const {quizzes}= state.quizAPI;
  return {quizzes}
};




export default connect(mapStateToProps)(Question);



///              {this.props.quizzes[0].questions.map((question, i)=>(
                // <div key={i}>
                  // <h3 id='question'>
                   // Question: {question.question}
                  // </h3>
                  // <QuestionAnswer />
                // </div>
              // ))}


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
