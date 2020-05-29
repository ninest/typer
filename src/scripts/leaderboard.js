import { hide } from './utils';
import { getHighscore, getDocRef, saveDocRef, saveUsername } from './highscore.js';

import { app } from './firebase.js';
import firebase from 'firebase/app';
import 'firebase/firestore';

const $leaderboards = document.getElementById('score_saver');
const $sendButton = document.getElementById('send');
const $cancelButton = document.getElementById('cancel');

$sendButton.onclick = () => {
  // send high score
  const username = prompt('Enter a username: ');
  const score = getHighscore();
  const timestamp = new Date().getTime();

  const db = firebase.firestore(app);
  const highscoresCollection = db.collection('highscores');
  // check if a doc id exists
  const prevDocRef = getDocRef();
  if (prevDocRef != null) {
    // use the exisiting doc id
    console.log('use exisiting doc id');
    highscoresCollection.doc(prevDocRef).set({
      username: username,
      score: score,
      timestamp: timestamp
    });
  } else {
    // generate a doc for the user
    console.log('gen new doc for user');
    highscoresCollection.add({
      username: username,
      score: score,
      timestamp: timestamp
    }).then((docRef) => {
      // save this doc id for saving the score the next time
      const docId = docRef.id;
      console.log(docId);
      saveDocRef(docId);
    });
  }

  // also save username locally
  saveUsername(username);
};

$cancelButton.onclick = () => {
  hide($leaderboards);
};
