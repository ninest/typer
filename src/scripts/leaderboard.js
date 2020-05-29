import { app } from './firebase.js';
import firebase from 'firebase/app';
import 'firebase/firestore';

import { hide } from './utils.js';

const $loding = document.getElementById('loading');
const $scoreList = document.getElementById('score_list');

const db = firebase.firestore(app);
const highscoresCollection = db.collection('highscores');
let scores = [];

window.addEventListener('load', async () => {
  // when document loads, get all high scores and populate an array
  scores = await getScores();

  // sort that array
  scores.sort((a, b) => (a.score < b.score) ? 1 : -1);

  // hide the loading indicator
  hide($loding);

  // create the list elements
  let elem = '';
  scores.forEach((s) => {
    elem += `<li> ${s.username}: ${s.score} </li>`;
  });
  $scoreList.innerHTML = elem;
});

const getScores = async () => {
  const s = [];
  await highscoresCollection.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      s.push(doc.data());
    });
  });
  return s;
};
