import {
  getHighscore,
  setHighscore,
} from './highscore.js';

const $currentWord = document.getElementById('current_word');
const $textField = document.getElementById('text_field');
const $time = document.getElementById('time');
const $score = document.getElementById('score')
const $highscore = document.getElementById('highscore')

const words = ["one", "two", "three", "four", "computer", "stewardess", "four-twenty", "javascript", "large-headed donkey"];
var currentWord = '';

var inGame = false;
var time = 0; // milliseconds
var score = 0;
var interval;

document.body.onload = () => {
  $currentWord.innerText = 'Type "start" to play'
  $textField.focus();

  $textField.oninput = textFieldUpdate;

  $highscore.innerText = getHighscore();
}

const textFieldUpdate = () => {
  const text = $textField.value.toLowerCase();

  if (!inGame && text === 'start') startGame();

  // if word guessed correct, get an extra second
  if (inGame && text === currentWord) round(1);
}

const startGame = () => {
  inGame = true;
  score = 0;
  
  // 5 seconds to start
  round(5);


  interval = setInterval(() => {
    time--;
    $time.innerText = time;
    if (time <= 0) {
      endGame();
    }
  }, 1000);
}


const round = (val) => {
  // clear the textfield
  $textField.value = "";

  increaseTime(val);
  score ++;
  $score.innerText = score;
  
  // get random word
  currentWord = words[Math.floor(Math.random() * words.length)]
  $currentWord.innerText = currentWord;
}

// when word typed
const increaseTime = (val) => {
  time = time + val;
}

const endGame = () => {
  // reset timer
  clearInterval(interval);

  inGame = false;
  
  // check if score more than highscore
  const highscore = getHighscore();
  if (score > highscore) {
    console.log('high score has been beaten!')
    // set new highscore
    $highscore.innerText = score;
    setHighscore(score);
  }


  $currentWord.innerText = 'Type "start" to play again'
  $textField.value = '';
}