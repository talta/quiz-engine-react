import React from 'react';
import {connect} from 'react-redux';

import loadQuiz from '../actions';
import api from '../../config';
// import Quiz from './quiz';
import state from '../../public/mock-state';


export class QuestionAnswer extends React.Component{

  // handleChange(){
  //   console.log('on change called');
  // }

  componentDidMount(){
    console.log('compoennt mounted');
    fetch(api+'/quiz')
    .then(res=>{
        this.setState(res);
        console.log('load quiz', loadQuiz);
        console.log(state);
        // console.log(state);
         // this.props.dispatch(loadQuiz(res))

      })
    .catch((err)=>{
     throw new Error(err);  
    })
  }

  render(){
    return(
      <div >
          <h3 id='question'>{this.props.question} </h3>
          <form className="answers">
            <div> 
              <p>this would be the answers</p>
            </div> 
          </form>
      </div>
    )
  };
};



// <input type="radio" name="answer" id='answer0' /><label>{this.props.answers.message}</label><br />
//               <input type="radio" name="answer" id='answer1' /><label>{this.props.answers.message}</label><br />
//               <input type="radio" name="answer" id='answer2' /><label>{this.props.answers.message}</label><br />
//               <input type="radio" name="answer" id='answer3' /><label>{this.props.answers.message}</label><br />
//               <input type="radio" name="answer" id='answer4' /><label>{this.props.answers.message}</label><br />


console.log(state);

const mapStateToProps = state =>({
  question: state.question,
  answers:state.answers
});

export default connect(mapStateToProps)(QuestionAnswer);
