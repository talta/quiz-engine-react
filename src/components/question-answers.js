
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
  onSubmit(e){
    waitingDialog.show();
    e.preventDefault();
    console.log('form submitted');
    console.log(this.state.value);
    ////dispatch an action SubmitAnswers
    this.props.dispatch(submitAnswers());
  }

  handleChange(e){
    // this.setState({value: e.target.value});
    waitingDialog.show();
    console.log('this was the event', e.target.id);
    let selectedAnswer = e.target.id;
    ///dispatch an action storeSelected
    this.props.dispatch(selectAnswer(selectedAnswer));
  }


  render(){
    return(
     <div >
       <h3 id='question'>{this.props.question} </h3>
       <form className="answers" onSubmit={this.submit}>
        {this.props.answers.map((item, i)=>(
           <div key={i}> 
            <input type="radio" name="answer" id={`answer${i}`} value={this.props.value} onChange={this.handleChange}/><label>{item.message}</label><br />
          </div> 
          ))};
         <input type="submit" id="nextButton" className="button" name="submit" value="Next" />
       </form>
     </div>

     <div class="modal hide" id="waitingDialog" data-backdrop="static" data-keyboard="false">
        <div class="modal-header">
            <h1>Processing...</h1>
        </div>
        <div class="modal-body">
            <div class="progress progress-striped active">
                <div class="bar" style="width: 100%;"></div>
            </div>
        </div>
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
