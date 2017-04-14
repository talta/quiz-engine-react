import React from 'react';
import {connect} from 'react-redux';

import QuestionAnswer from './question-answers';
// import $ from 'jquery';

import loadQuiz from '../actions';
import data from '../../public/mock-state'



export class Quiz extends React.Component {

  constructor(props) {
      super(props)
  }

  handleAnswerSelected(){
    console.log('handle answer selection called');
  }
  handleSubmit(){
    console.log('handle submit called');

  }


  componentDidMount(){
    // fetch('api/quiz').then(res=>{})
    // fetch('localhost:8080/quiz').then(res=>{
      // $.getJSON('../../public/mock-state.json', (result)=>{
        // this.setState({quiz:data});
        console.log(loadQuiz);
         loadQuiz()
      // })
    //   if(!res.ok){
    //    return Promise.reject(res.statusText);
    //   }
    //   return res.json();
    // }).then(Quiz=>{
    //  // dispatch(loadQuiz)
    //  console.log(loadQuiz);
    // })
    // .catch((err)=>{
    //  throw new Error(err);  
    // })
  }
  render(){
    let {
      quiz, index, numberOfQuestions,  completed, score
    }= this.state
    ///find a way to represent the score
    completed = (quiz.questions && (index === quiz.questions.length)) ? true : false
    numberOfQuestions = quiz.questions ? quiz.questions.length : 0
    score = 0
/////something here to determine if the quiz is completed: potentially a react modal
////need to call 
    console.log(completed, 'completed');
    console.log(score, 'score');


    return (
      <div>
        <h1>{quiz.title} </h1>
        {quiz.questions && index <quiz.questions.length?
          <QuestionAnswer 
            question={quiz.questions[index]}
            index={index}
            onAnswerSelected={(event)=>
              this.handleAnswerSelected(event)}
            onSubmit={()=>this.handleSubmit()} 
          />
        : ''
        }
        <h5>Question:{completed} out of {numberOfQuestions}</h5>
      </div>
    )
  }
}


// let {dispatch} = this.props;

const mapStateToProps =state=>({
  quiz: state.quiz,
  index: state.index,
  numberOfQuestions: state.numberOfQuestions,
  score: state.score,
  answers: state.answers,
  completed: state.completed
});


QuestionAnswer.defaultProps = {
  question: 'this is a default question',
  value: "",
  answers: [{
    message: 'this is a default message',
    correct: false
  }]
};

export default connect(mapStateToProps)(Quiz);