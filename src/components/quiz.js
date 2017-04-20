import React from 'react';
import {connect} from 'react-redux';

import QuizIntro from './quiz-intro';
import Question from './question';

import {loadQuiz} from '../actions';
import {API} from '../../config';


export class Quiz extends React.Component {

  answers = {}

  constructor(props) {
      super(props);
      this.storeAnswer = this.storeAnswer.bind(this)
  }

  handleAnswerSelected(){
    console.log('handle answer selection called');
  }

  handleSubmit(){
    console.log('handle submit of the quiz called');
    // this.answers
  }

  storeAnswer(input) {
    const { id, answer } = input
    this.answers[id] = answer

    console.log(this.answers)
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

  ///counter for number of quizzes
  ///logic for when counter =  questions.length; display results

  render(){

  console.log(this.props);
    ////question should be stored in the question file:
    ///quiz should contain the submit button
    return(

            <div>
              <QuizIntro />
              <form onSubmit={this.handleSubmit()}>
                <div>
                  <p> this would be the quiz area</p>
                  <Question storeAnswer={input => this.storeAnswer(input)} {this.props.question, this.props.index, this.props.answers}/>
                
                </div>
                <input type="submit" id="nextButton" className="button" name="submit" value="Next" />
              </form>
            </div>
    )
  }
}


const mapStateToProps = state =>({
  name: state.name,
  questions: state.questions
  // question: state.questions.question,
  // answers: state.questions.answers
});



export default connect(mapStateToProps)(Quiz);