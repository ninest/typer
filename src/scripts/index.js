import { getHighscore, setHighscore } from './highscore.js';
import { hide, show } from './utils.js';
import words from '~/assets/words.yml';

const $startText = document.getElementById('start_text');
const $currentWord = document.getElementById('current_word');
const $textField = document.getElementById('text_field');
const $time = document.getElementById('time');
const $finalScoreWrapper = document.getElementById('final_score_wrapper');
const $finalScore = document.getElementById('final_score');
const $score = document.getElementById('score');
const $highscore = document.getElementById('highscore');

var currentWord = '';
var inGame = false;
var time = 0; // milliseconds
const gameLenght = 5; // milliseconds
var score = 0;
var interval;

document.body.onload = () => {
  hide($currentWord);
  $time.innerText = `${gameLenght}s`;

  $textField.focus();
  $textField.oninput = textFieldUpdate;

  // hide final score, should only show at end of game
  hide($finalScoreWrapper);

  $highscore.innerText = getHighscore();
};

const textFieldUpdate = () => {
  const text = $textField.value.toLowerCase();

  if (!inGame && text === 'start') startGame();

  // if word guessed correct, get an extra second
  if (inGame && text === currentWord) round(1);
};

const startGame = () => {
  inGame = true;
  score = 0;

  // start round
  round(gameLenght);

  show($currentWord);
  hide($startText);

  // hide final score, should only show at end of game
  hide($finalScoreWrapper);

  interval = setInterval(() => {
    time--;
    $time.innerText = `${time}s`;
    if (time <= 0) {
      endGame();
    }
  }, 1000);
};

const round = (val) => {
  // clear the textfield
  $textField.value = '';

  increaseTime(val);
  score++;
  $score.innerText = score;

  // get random word
  currentWord = words[Math.floor(Math.random() * words.length)];
  $currentWord.innerText = currentWord;
};

// when word typed
const increaseTime = (val) => {
  time = time + val;
};

const endGame = () => {
  // reset timer
  clearInterval(interval);

  inGame = false;

  // show start text and change text
  show($startText);
  $startText.innerHTML = `
    <span class="game-over">Game over. </span> Type "<b>start</b> to play</span>
  `;

  // show final score
  $finalScore.innerText = score;
  show($finalScoreWrapper);

  // check if score more than highscore
  const highscore = getHighscore();
  if (score > highscore) {
    console.log('high score has been beaten!');
    // set new highscore
    $highscore.innerText = score;
    setHighscore(score);
  }

  hide($currentWord);
  $textField.value = '';
};
