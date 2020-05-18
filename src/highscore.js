const getHighscore = () => {
  const highscore = parseInt(localStorage.getItem('highscore')) || 0;
  return highscore;
}

const setHighscore = (val) => {
  localStorage.setItem('highscore', val);
}

export {
  getHighscore,
  setHighscore,
}