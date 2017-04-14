import React from 'react';
import {connect} from 'react-redux';
import {Control} from 'react-redux-form';


export class QuestionAnswer extends React.Component{
  
  onSubmit(event){
    event.preventDefault();
    console.log('form submitted');

  }


///remove the action and handler:
  handleChange(event){
    event.preventDefault();
    console.log('this was the event', event.target.id);
    let selectedAnswerId = event.target.id;
    let selectedAnswer = event.target.value;
    console.log(selectedAnswerId, selectedAnswer);
  }
///look more into react forms
  render(){
    return(
    <div>
      <div>
        <form className="answers" onSubmit={(questions)=>this.onSubmit(event, questions)} >
        <label id='question'>{this.props.question} </label>
          <div> 
          <Control.select value={this.props.value} onChange={(event)=>this.handleChange(event)}>
            {this.props.answers.map((item, i)=>(
              <option key={i} id={`${i}`} value={this.props.value} onChange={this.handleChange}>{item.message}</option>
            ))};
          </Control.select>
          </div> 
          <div>
            <input type="submit" id="nextButton" className="button" name="submit" value="Next"/>
          </div>
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
