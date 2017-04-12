
import React, {Component} from 'react';
import {connect} from 'react-redux';

import selectQuiz from '../actions';

///this line would be replaced with the fetch:
// import * as state from '../../public/mock-state';
import state from '../reducers/index';

export class QuestionAnswer extends Component{
  constructor(props){
    super(props);
    
    // fetch('/quiz').then(res=>{
    //  if(!res.ok){
    //    return Promise.reject(res.statusText);
    //  }
    //    return res.json();
    // }).then(board=>{
    //  dispatch(selectQuiz)
    // });
  }


  render(){
    /////render the question and answer section 
    ////question as a header 
    /////answers as input
    return(
     <div >
       <h3 id='question'>{this.props.question} </h3>
       <form className="answers">
         <input type="radio" name="answer" id='answer0' /><label>{this.props.answers.message}</label><br />
         <input type="radio" name="answer" id='answer1' /><label>{this.props.answers.message}</label><br />
         <input type="radio" name="answer" id='answer2' /><label>{this.props.answers.message}</label><br />
         <input type="radio" name="answer" id='answer3' /><label>{this.props.answers.message}</label><br />
         <input type="radio" name="answer" id='answer4' /><label>{this.props.answers.message}</label><br />
         <input type="submit" id="nextButton" className="button" name="submit" value="Next" />
       </form>
     </div>
    )
  };
};
//     return(
//       <div >
//         <h3> this is some great header to render</h3>
//       </div>
//     )
//   };
// };

const mapStateToProps = state =>({
  question: state.question,
  answers:[{
    message: state.message,
    correctAnswer: state.correctAnswer
  }]
});

export default connect(mapStateToProps)(QuestionAnswer);

// export default (QuestionAnswer);