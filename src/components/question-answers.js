///external dependencies:
import React from 'react';
import {connect} from 'react-redux';

////internal dependencies:
import {loadQuiz} from '../actions';
import {API} from '../../config';
// import Quiz from './quiz';
// import state from '../../public/mock-state';
// import {stateReducer, store} from '../reducers';


export class QuestionAnswer extends React.Component{

  componentDidMount(){
    console.log('compoennt mounted');
    fetch(API+'/quiz', {headers:{'Content-Type':'application/json'}})
    .then(response=>
        response.json()
      )
    .then(response=>{       
        this.props.dispatch(loadQuiz(response));
        console.log('dispatch called');
      })
    .catch((err)=>{
      console.log(err);
      throw new Error(err);  
    })
  }
  
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
