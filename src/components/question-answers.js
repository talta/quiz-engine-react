import React from 'react';
import {connect} from 'react-redux';
// import {Control} from 'reactReduxorm'; 

// import {Quiz} from './quiz';

import loadQuiz from '../actions';
import Quiz from './quiz';



export class QuestionAnswer extends React.Component{
  componentDidMount(){
    loadQuiz();
  }

  handleChange(){
    console.log('on change called');
  }

  render(){
        return(
              <div> 
                <input onChange={(event)=>this.handleChange(event)}>
                  {question.answers.map((item, i)=>(
                    <option key={i} id={`${i}`} value={item.answer} onChange={this.handleChange}>{item.message}</option>
                  ))};
                </input>
              </div> 
        )
  };
};

////inside each questions map the question
//inside each question, map the answers



const mapStateToProps = state =>({
  title: state.title,
  questions: state.questions
  // question: state.question,
  // value: state.value,
  // answers:state.answers
});

export default connect(mapStateToProps)(QuestionAnswer);
