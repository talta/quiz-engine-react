export const loadState = () => {
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

export const saveState = username => {
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
