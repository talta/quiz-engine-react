export const loadState = () => {
  try {
    const auth = localStorage.getItem('quizEngine.auth');
    if (auth === null) return undefined;
    return JSON.parse(auth);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const auth = JSON.stringify(state);
    localStorage.setItem('quizEngine.auth', auth);
  } catch (err) {
    console.log(err);
  }
};