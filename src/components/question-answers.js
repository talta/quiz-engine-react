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
        
        console.log(res);
        this.setState(res);
        console.log('load quiz', loadQuiz);
        console.log(state);
        
         // this.props.dispatch(loadQuiz(res))
        console.log(state);
        console.log(this.props.answers.message);
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
          {this.props.answers.map((item, i)=>(
            <div key={i}> 
            <input type="radio" name="answer" id={`answer${i}`} /><label>{item.message}</label><br />
            </div> 
          ))};
          <input type="submit" id="nextButton" className="button" name="submit" value="Next" />
        </form>
      </div>
    )
  };
};


console.log(state);

const mapStateToProps = state =>({
  question: state.question,
  answers:state.answers
});

export default connect(mapStateToProps)(QuestionAnswer);
