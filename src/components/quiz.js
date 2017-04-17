import React from 'react';
import {connect} from 'react-redux';

import QuizIntro from './quiz-intro';
import Question from './question';

import {loadQuiz} from '../actions';
import {API} from '../../config';


export class Quiz extends React.Component {

  answers = []

  constructor(props) {
      super(props);
      this.storeAnswer = this.storeAnswer.bind(this)
  }

  handleAnswerSelected(){
    console.log('handle answer selection called');
  }

  handleSubmit(){
    console.log('handle submit called');
  }


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

    return(

            <div>
              <form onSubmit={this.handleSubmit()}>
                <div>
                  <p> this would be the quiz area</p>
                  <QuizIntro />
                  <Question ref={input => this.storeAnswer(input)} />
                </div>
              </form>
            </div>
    )
  }

  storeAnswer(input) {
    console.log('INPUT FOR ANSWER IS: ', input)
    this.answers.push(input)
  }
}



const mapStateToProps = state =>({
  question: state.question,
  answers: state.answers
});



export default connect(mapStateToProps)(Quiz);