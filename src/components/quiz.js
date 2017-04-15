import React from 'react';
import {connect} from 'react-redux';

import QuestionAnswer from './question-answers';
// import $ from 'jquery';

import loadQuiz from '../actions';
import data from '../../public/mock-state'


export class Quiz extends React.Component {

  constructor(props) {
      super(props);
  }

  handleAnswerSelected(){
    console.log('handle answer selection called');
  }
  handleSubmit(){
    console.log('handle submit called');
  }

  componentDidMount(){
    fetch('localhost:8080/quiz')
    .then(res=>{
        this.setState({quiz:res});
        console.log(loadQuiz);
        console.log(state);
         // loadQuiz()
      })
    .then(Quiz=>{
     // dispatch(loadQuiz)
     console.log(loadQuiz);
    })
    .catch((err)=>{
     throw new Error(err);  
    })
  }


  render(){

    return(

            <div>
              <form className="answers" onSubmit={(questions)=>this.onSubmit(event, questions)} >
                <label id='question'>{question} </label>
                <div>
                  
                </div>
                <div>
                  <input type="submit" id="nextButton" className="button" name="submit" value="Next"/>
                </div>
              </form>
            </div>
    )
  }
}



const mapStateToProps = state =>({
  // title: state.title,
  // questions: state.questions
  question: state.question,
  answers: state.answers
});


Quiz.defaultProps = {
  question: 'this is a default question',
  answers: [{
    message: 'this is a default message',
    correct: false
  }]
};

export default connect(mapStateToProps)(Quiz);