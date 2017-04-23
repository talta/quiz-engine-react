import React from 'react';
import {connect} from 'react-redux';

import QuizIntro from './quiz-intro';
import Question from './question';
import QuizCounter from './quiz-counter';

// import {loadQuiz} from '../actions';

import styles from './css/App.css'


export  class Quiz extends React.Component {

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
    // const { id, answer } = input
    // this.answers[id] = answer

    console.log(this.answers)
  }

  componentWillMount(){
    console.log('quiz component mounted');
    // this.props.dispatch(loadQuiz(this.props.selectedQuiz));
  }

  render(){

  console.log('Quiz Props: ', this.props);
    ////question should be stored in the question file:

    return(

            <div>
              <QuizIntro />
              <div>
                <QuizCounter />
              </div>
              <h3>Quiz: {this.props.selectedQuiz}
              </h3>
              <form onSubmit={this.handleSubmit()}>
                <div>
                  <p className={styles.quizIntro}> this would be the quiz area</p>

                  <Question storeAnswer={input => this.storeAnswer} />
               
                
                </div>
                <input type="submit" id="nextButton" className="button" name="submit" value="Next" />
              </form>
            </div>
    )
  }
}

/////potentially only questions would be mapped:
const mapStateToProps = (state) =>{
  const {name, index, questions, question, answers}= state.quizAPI;
  const {selectedQuiz}= state.quizReducer;
  return {selectedQuiz, name, questions, index, question, answers} 
};



export default connect(mapStateToProps)(Quiz);



///Object destructoring of the props:
//////  name: state.quizAPI.name,
  // index:state.quizAPI.index,
  // question: state.quizAPI.question,
  // answers: state.quizAPI.answers,