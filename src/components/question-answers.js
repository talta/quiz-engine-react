
import React, {Component} from 'react';
import {connect} from 'react-redux';

import selectQuiz from '../actions';

///this line would be replaced with the fetch:
// import * as state from '../../public/mock-state';



import state from '../reducers/index';

export class QuestionAnswer extends Component{
  constructor(props){
    super(props);
    
    ////to be turned on when connnecting to the back-end
  //   fetch('localhost:8080/quiz').then(res=>{
  //    if(!res.ok){
  //      return Promise.reject(res.statusText);
  //    }
  //      return res.json();
  //   }).then(board=>{
  //    dispatch(selectQuiz)
  //   });
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


/////potentially to change this to a map:
QuestionAnswer.defaultProps = {
  question: 'this is a default question',
  answers: [{
    message: 'this is a default message',
    correct: false
  }]
};



const mapStateToProps = state =>({
  question: state.question,
  answers:state.answers
});

export default connect(mapStateToProps)(QuestionAnswer);
