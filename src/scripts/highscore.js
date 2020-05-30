import { key } from './keys.js';
var CryptoJS = require('crypto-js');

// saving scores locally
export const getHighscore = () => {
  const ciphertext = localStorage.getItem('highscore') || null;
  let highscore;
  try {
    const bytes = CryptoJS.AES.decrypt(ciphertext, key);
    highscore = parseInt(bytes.toString(CryptoJS.enc.Utf8)) || 0;
  } catch {
    highscore = 0;
  }
  return highscore;
};

export const setHighscore = (val) => {
  const ciphertext = CryptoJS.AES.encrypt(val.toString(), key).toString();
  localStorage.setItem('highscore', ciphertext);
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
  // remove html tags
  const div = document.createElement('div');
  div.innerHTML = username;
  username = div.innerText;
  localStorage.setItem('username', username);
};

export const getUsername = () => {
  const username = localStorage.getItem('username') || null;
  return username;
};
