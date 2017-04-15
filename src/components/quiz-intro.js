      <div>
        <div>
          <h1>{quiz.title} </h1>
          {quiz.questions && index <quiz.questions.length?
            <QuestionAnswer 
              question={quiz.questions[index]}
              index={index}
              onAnswerSelected={(event)=>
                this.handleAnswerSelected(event)}
              onSubmit={()=>this.handleSubmit()} 
            />
          : ''
          }
          <h5>Question:{completed} out of {numberOfQuestions}</h5>
        </div>
        <div>
          {question}
        </div>
      <div>