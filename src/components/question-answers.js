///external dependencies:
import React from 'react';
import {connect} from 'react-redux';


export class QuestionAnswer extends React.Component{

  // constructor(props){
  //   super(props);
  // }

  render(){
    console.log('answers props: ', this.props);
    return(
      <div >this would be the answers
        {this.props.answers.map((answer, index)=>(
            <div key={index}>
              <input value={answer.message} 
                onChange={input => this.props.storeAnswer({id: `question: ${index}`, answer: answer.message})}
                type="radio" 
                name="answer" 
                id={`answer${index}`}
              />
              <label>{answer.message}
              </label>
            </div>
          ))}

      </div>
    )
  };
};


const mapStateToProps=state=>{
  const {answers}= state.quizAPI;
  return {answers}
};

export default connect(mapStateToProps)(QuestionAnswer);


// {this.props.answers.map((answer, i)=>(
//             <div key={i}> 
//             <input onChange={input => this.props.storeAnswer({id: `question: ${i}`, answer: answer.message})} type="radio" name="answer" id={`answer${i}`} /><label>{answer.message}</label><br />
//             </div> 
//           ))}