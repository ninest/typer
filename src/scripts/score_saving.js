import { hide } from './utils';
import { getHighscore, getDocRef, saveDocRef, saveUsername, getUsername } from './highscore.js';

import { app } from './firebase.js';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const $leaderboards = document.getElementById('score_saver');
const $sendButton = document.getElementById('send');
const $cancelButton = document.getElementById('cancel');

$sendButton.onclick = async () => {
  // send high score

  let username = getUsername();
  if (username == null) {
    username = prompt('Enter a username: ');
    // also save username locally
    saveUsername(username);
  }
  const score = getHighscore();
  const timestamp = new Date().getTime();

  const db = firebase.firestore(app);
  const highscoresCollection = db.collection('highscores');
  // check if a doc id exists
  const prevDocRef = getDocRef();
  if (prevDocRef != null) {
    // use the exisiting doc id
    console.log('use exisiting doc id');
    await highscoresCollection.doc(prevDocRef).set({
      username: username,
      score: score,
      timestamp: timestamp
    });
  } else {
    // generate a doc for the user
    console.log('gen new doc for user');
    await highscoresCollection.add({
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

  // redirect to leaderboards page
  window.location = 'leaderboards.html';
};

$cancelButton.onclick = () => {
  hide($leaderboards);
};
