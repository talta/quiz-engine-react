import React from 'react';
import {connect} from 'react-redux';

import QuestionAnswer from './question-answers';
import QuizIntro from './quiz-intro';

// import loadQuiz from '../actions';
// import data from '../../public/mock-state'
import {loadQuiz} from '../actions';
import {API} from '../../config';


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
              <form >
                <div>
                  <p> this would be the quiz area</p>
                  <QuizIntro />
                  <QuestionAnswer />
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