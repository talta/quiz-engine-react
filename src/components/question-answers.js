import React from 'react';
import {connect} from 'react-redux';

export class QuestionAnswer extends React.Component{

  componentWillMount(){
    console.log('question answers will mount');    
  }

  render(){
    console.log('answers props: ', this.props);
    return(
      <div 
        className='answers'
      >
        {this.props.question.answers.map((answer, index)=>(
            <div key={index}>
              <input value={answer.message} 
                onChange={input => this.props.grabAnswer(answer.message)}
                type="radio" 
                name="answer" 
                id={`answer${index}`}
                // defualtChecked={false}
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