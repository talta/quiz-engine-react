///external dependencies:
import React from 'react';
import {connect} from 'react-redux';

////internal dependencies:
import {loadQuiz} from '../actions';
import {API} from '../../config';


export class QuestionAnswer extends React.Component{


  
  render(){
    console.log(this.props, 'question');
    return(
      <div >
        <h3 id='question'>Question: {this.props.question}</h3>
        <form className="answers">
          {this.props.answers.map((answer, i)=>(
            <div key={i}> 
            <input type="radio" name="answer" id={`answer${i}`} /><label>{answer.message}</label><br />
            </div> 
          ))};
          <input type="submit" id="nextButton" className="button" name="submit" value="Next" />
        </form>
      </div>
    )
  };
};


const mapStateToProps=state=>({
  question: state.quizReducer.question,
  answers: state.quizReducer.answers
});

export default connect(mapStateToProps)(QuestionAnswer);
