// saving scores locally
export const getHighscore = () => {
  const highscore = parseInt(localStorage.getItem('highscore')) || 0;
  return highscore;
};

export const setHighscore = (val) => {
  localStorage.setItem('highscore', val);
};

// savign document id for firebase highscore
export const saveDocRef = (docId) => {
  localStorage.setItem('doc_id', docId);
};
export const getDocRef = () => {
  const docId = localStorage.getItem('doc_id') || null;
  return docId;
};

// saving username locally
export const saveUsername = (username) => {
  localStorage.setItem('username', username);
};

export const getUsername = () => {
  const username = localStorage.getItem('username') || null;
  return username;
};
