import React from 'react';
import {connect} from 'react-redux';

export class QuestionAnswer extends React.Component{

  // constructor(props){
  //   super(props);
  // }


  //////////score here
  //////has the data to determine if the selected nswer is correct

  ////1. pass the selected answer to the question component

  render(){
    console.log('answers props: ', this.props);
    return(
      <div >this would be the answers
        {this.props.question.answers.map((answer, index)=>(
            <div key={index}>
              <input value={answer.message} 
                onChange={input => this.props.storeAnswer({id: `question: ${index}`, answer: answer.message})}
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