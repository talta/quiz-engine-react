import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Control, Form, actions} from 'react-redux-form';
// import bootbox from 'bootbox';

// import {submitAnswers, selectAnswer} from '../actions/index';

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
    let selectedAnswerId = e.target.id;
    let selectedAnswer = e.target.value;
    console.log(selectedAnswerId, selectedAnswer);


    ////dispatch an action SubmitAnswers
    // this.props.dispatch(submitAnswersSuccess());
    ////take in a value the selectedvalue

  }


///remove the action and handler:
  handleChange(event){
    // this.setState({value: e.target.value});
    // waitingDialog.show();
    event.preventDefault();
    console.log('this was the event', event.target.id);

    ///dispatch an action storeSelected
    this.props.dispatch(selectAnswer(selectedAnswer));
    ////potentially 
    // setState({value:event.target.value})
  }

  propTypes: {
    handleChange: PropTypes.func,
    onSubmit: PropTypes.func
  }

///look more into react forms
  render(){
    return(
    <div >
       <div >
         <form className="answers" onSubmit={this.onSubmit}>
         <label id='question'>{this.props.question} </label>
          <div > 
          <select value={this.props.value} onChange={this.handleChange}>
            {this.props.answers.map((item, i)=>(
              <option key={i} id={`${i}`} value={this.props.value} onChange={this.handleChange}>{item.message}</option>
            ))};
          </select>
          </div> 
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
  value: "",
  answers: [{
    message: 'this is a default message',
    correct: false
  }]
};



const mapStateToProps = state =>({
  question: state.question,
  value: state.value,
  answers:state.answers
});

export default connect(mapStateToProps)(QuestionAnswer);
