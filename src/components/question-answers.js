import React from 'react';
import {connect} from 'react-redux';


////destructuring assignment:
import {loadQuiz} from '../actions';
import {API} from '../../config';
// import Quiz from './quiz';
import state from '../../public/mock-state';


export class QuestionAnswer extends React.Component{

  componentDidMount(){
    console.log('compoennt mounted');
    fetch(API+'/quiz', {headers:{'Content-Type':'application/json'}})
    .then(response=>
        response.json()
      )
    .then(response=>{
        console.log(response);
        // this.setState(response);
        console.log('load quiz', loadQuiz);
        console.log(state);
        
         this.props.dispatch(loadQuiz(response));
        console.log(state);
        console.log(this.props.answers.message);
      })
    .then()
    .catch((err)=>{
     throw new Error(err);  
    })
  }
  
  render(){
    console.log(this.props.question, 'question');
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

console.log(state);

const mapStateToProps = state =>({
  question: state.quizReducer.question,
  answers: state.quizReducer.answers
});

export default connect(mapStateToProps)(QuestionAnswer);
