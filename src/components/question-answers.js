import React from 'react';
import {connect} from 'react-redux';

export class QuestionAnswer extends React.Component{



  render(){
    console.log('answers props: ', this.props);
    return(
      <div >this would be the answers
        {this.props.question.answers.map((answer, index)=>(
            <div key={index}>
              <input value={answer.message} 
                onChange={input => this.props.grabAnswer({id: `question: ${index}`, answer: answer.message})}
                type="radio" 
                name="answer" 
                id={`answer${index}`}
              />
              <label>{answer.message}
              </label>
            </div>
        ))}
      </div>
    )
  };
};


const mapStateToProps=state=>{
  const {quizzes}= state.quizAPI;
  const {selectedQuiz}= state.quizReducer;
  return {quizzes, selectedQuiz}
};

export default connect(mapStateToProps)(QuestionAnswer);