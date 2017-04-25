export const loadStorage = () => {
  try {
    const auth = localStorage.getItem('quizEngine');
    if (auth === null) {
      return undefined
    }
    // return JSON.parse(auth);  ///this was producing an error, will need testing once submitted
    return auth;
  } catch (err) {
    console.log(err, 'this is the error that was encountered');
    return undefined;
  }
};

export const saveStorage = username => {
  try {
    const auth = JSON.stringify(username);
    console.log(username);
    console.log(auth);
    localStorage.setItem('quizEngine', username);
    console.log(localStorage, 'local storage here');
    console.log('username set to local storage');
  } catch (err) {
    console.log(err);
  }
};

export const loadQuizStorage = () => {
  try {
    const quiz = localStorage.getItem('quizEngineQuiz');
    if (quiz === null) {
      return undefined
    }
    return JSON.parse(quiz);  ///this was producing an error, will need testing once submitted
    // return quiz;
  } catch (err) {
    console.log(err, 'this is the error that was encountered');
    return undefined;
  }
};

export const saveQuizStorage = quizObj => {
  try {
    const quiz = JSON.stringify(quizObj);
    console.log(quiz);
    localStorage.setItem('quizEngineQuiz', quiz);
    console.log(localStorage, 'local storage here');
    console.log('quiz set to local storage');
  } catch (err) {
    console.log(err);
  }
};