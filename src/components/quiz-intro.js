import React from 'react'; 

import styles from './css/App.css';



export default function QuizIntro(props){
    return (
      <div>
        <p className={styles.quizIntro}>The pyramids were built one brick at a time.  Your success is in your hands!</p>
      </div>
    )
}






      // <div>
      //   <div>
      //     <h1>{quiz.title} </h1>
      //     {quiz.questions && index <quiz.questions.length?
      //       <QuestionAnswer 
      //         question={quiz.questions[index]}
      //         index={index}
      //         onAnswerSelected={(event)=>
      //           this.handleAnswerSelected(event)}
      //         onSubmit={()=>this.handleSubmit()} 
      //       />
      //     : ''
      //     }
      //     <h5>Question:{completed} out of {numberOfQuestions}</h5>
      //   </div>
      //   <div>
      //     {question}
      //   </div>
      // <div>