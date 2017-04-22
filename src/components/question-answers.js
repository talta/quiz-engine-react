///external dependencies:
import React from 'react';
import {connect} from 'react-redux';


export default class QuestionAnswer extends React.Component{

  render(){
    console.log(this.props, 'answers props');
    return(
      <div >
          {this.props.answers.map((answer, i)=>(
            <div key={i}> 
            <input onChange={input => this.props.storeAnswer({id: `question: ${i}`, answer: answer.message})} type="radio" name="answer" id={`answer${i}`} /><label>{answer.message}</label><br />
            </div> 
          ))}
      </div>
    )
  };
};


// const mapStateToProps=state=>({
//   answers: state.quizAPI.answers
// });

// export default connect(mapStateToProps)(QuestionAnswer);
