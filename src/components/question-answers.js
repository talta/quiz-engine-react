import React, {Component} from 'react';
import {connect} from 'react-redux';
// import bootbox from 'bootbox';

import {submitAnswers, selectAnswer} from '../actions/index';

///this line would be replaced with the fetch:
// import * as state from '../../public/mock-state';
// import state from '../reducers/index';

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
    // waitingDialog.show();
    e.preventDefault();
    console.log('form submitted');
    console.log(this.state.value);
    ////dispatch an action SubmitAnswers
    this.props.dispatch(submitAnswersSuccess());
    ////take in a value the selectedvalue
  }

  handleChange(e){
    // this.setState({value: e.target.value});
    // waitingDialog.show();
    e.preventDefault();
    console.log('this was the event', e.target.id);
    let selectedAnswer = e.target.id;
    ///dispatch an action storeSelected
    this.props.dispatch(selectAnswer(selectedAnswer));
  }


  render(){
    return(
    <div >
       <div >
         <h3 id='question'>{this.props.question} </h3>
         <form className="answers" onSubmit={this.submit}>
          {this.props.answers.map((item, i)=>(
             <div key={i}> 
              <input type="radio" name="answer" id={`${i}`} value={this.props.value} onChange={this.handleChange}/><label>{item.message}</label><br />
            </div> 
            ))};
           <input type="submit" id="nextButton" className="button" name="submit" value="Next" onSubmit={this.onSubmit}/>
         </form>
       </div>

       <div className="modal hide" id="waitingDialog" data-backdrop="static" data-keyboard="false">
          <div className="modal-header">
              <h1>Processing...</h1>
          </div>
          <div className="modal-body">
              <div className="progress progress-striped active">
                  <div className="bar" ></div>
              </div>
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
