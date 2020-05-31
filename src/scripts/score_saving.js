import { hide } from './utils';
import { getHighscore, getDocRef, saveDocRef, saveUsername, getUsername, sanitize, encrypt } from './functions.js';
import words from '~/assets/words.yml';

import { app } from './firebase.js';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';

const $leaderboards = document.getElementById('score_saver');
const $sendButton = document.getElementById('send');
const $cancelButton = document.getElementById('cancel');

$sendButton.onclick = async () => {
  // send high score

  let username = getUsername();
  if (username == null || username === '') {
    username = prompt('Enter a username: ');
    // if username is still null, generate a random one
    if (username == null || username === '') {
      const u1 = words[Math.floor(Math.random() * words.length)];
      const u2 = words[Math.floor(Math.random() * words.length)];
      username = `${u1}_${u2}`;
    }
    // also save username locally
    saveUsername(username);
  }
  // remove html tags
  username = sanitize(username);

  const score = parseInt(getHighscore()) || 0;

  const timestamp = new Date().getTime();
  // const timestamp = firebase.database.ServerValue.TIMESTAMP;

  const db = firebase.firestore(app);
  const highscoresCollection = db.collection('highscores');
  // check if a doc id exists
  const prevDocRef = getDocRef();
  if (prevDocRef != null) {
    // use the exisiting doc id
    await highscoresCollection.doc(prevDocRef).set({
      username: sanitize(username),
      score: encrypt(score),
      timestamp: timestamp
    });
  } else {
    // generate a doc for the user
    await highscoresCollection.add({
      username: sanitize(username),
      score: encrypt(score),
      timestamp: timestamp
    }).then((docRef) => {
      // save this doc id for saving the score the next time
      const docId = docRef.id;
      console.log(docId);
      saveDocRef(docId);
    });
  }

  // redirect to leaderboards page
  window.location = 'leaderboards.html';
};

$cancelButton.onclick = () => {
  hide($leaderboards);
};
