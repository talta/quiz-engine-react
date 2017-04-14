import React from 'react';
import {connect} from 'react-redux';
// import {Control} from 'reactReduxorm'; 

import {question, index, onAnswerSelected, onSubmit, Quiz} from './quiz';

  console.log(question, index, onAnswerSelected, Quiz);


export class QuestionAnswer extends React.Component{

  render(){
    return(
    <div>
      <div>
        <form className="answers" onSubmit={(questions)=>this.onSubmit(event, questions)} >
        <label id='question'>{this.props.question} </label>
          <div> 
            <ol type="a">
              {question.answers.map((answer, i) =>
              <li key={`${index}-${i}`}>
                <input type="radio" name={`question_${index}`} id={`question_${index}_answer_${i}`} defaultChecked={false} value={i} onChange={onAnswerSelected} />
                {' '}
                <label htmlFor={`question_${index}_answer_${i}`}>{answer.label}</label>
              </li>
              )}
            </ol>
          </div> 
          <div>
            <input type="submit" id="nextButton" className="button" name="submit" value="Next"/>
          </div>
        </form>
      </div>
    </div>
    )
  };
};

QuestionAnswer.defaultProps = {
  question: 'this is a default question',
  value: "",
  answers: [{
    message: 'this is a default message',
    correct: false
  }]
};



const mapStateToProps = state =>({
  question: state.question,
  value: state.value,
  answers:state.answers
});

export default connect(mapStateToProps)(QuestionAnswer);
