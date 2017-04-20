import React from 'react';
import {connect} from 'react-redux';

import QuizIntro from './quiz-intro';
import Question from './question';

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



  ///counter for number of questions (new component)

  ///logic for when counter =  questions.length; display results
  /////change the text on teh button to say finish
  /////programable routing for next button unless counter exhausted, then the results page
  ///results component to have button for welcome page
////                  // state.questions[i]


  ///map the questions so that only one question is passed into the question component:

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

                  <Question storeAnswer={input => this.storeAnswer} />
                
                </div>
                <input type="submit" id="nextButton" className="button" name="submit" value="Next" />
              </form>
            </div>
    )
  }
}


const mapStateToProps = state =>({
  name: state.name,
  // questions: state.questions
  question: state.question,
  answers: state.answers
});



export default connect(mapStateToProps)(Quiz);