import React from 'react';
import {connect} from 'react-redux';

import loadQuiz from '../actions';
// import Quiz from './quiz';



export class QuestionAnswer extends React.Component{

  // handleChange(){
  //   console.log('on change called');
  // }

  componentDidMount(){
    console.log('compoennt mounted');
    fetch('https://10.0.2.2/quiz')
    .then(res=>{
        // this.setState({quiz:res});
        console.log(loadQuiz);
        // console.log(state);
         this.props.dispatch(loadQuiz(res))
      })
    // .then(Quiz=>{
    //  // dispatch(loadQuiz)
    //  console.log(loadQuiz);
    //  // loadQuiz();
    // })
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


const mapStateToProps = state =>({
  question: state.question,
  answers:state.answers
});

export default connect(mapStateToProps)(QuestionAnswer);
