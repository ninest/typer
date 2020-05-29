// import * as firebase from 'firebase/app';
import { hide } from './utils';
import { getHighscore } from './highscore.js';

const firebase = require('firebase');
require('firebase/firebase');

const $leaderboards = document.getElementById('score_saver');
const $sendButton = document.getElementById('send');
const $cancelButton = document.getElementById('cancel');

$sendButton.onclick = () => {
  // send high score
  // const username = prompt('Enter a username: ');
  // const score = getHighscore();
  const db = firebase.firestore();
  console.log(db);
};

$cancelButton.onclick = () => {
  hide($leaderboards);
};
