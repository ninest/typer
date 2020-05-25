import { getHighscore, setHighscore } from './highscore.js';
import { show, hide } from './utils.js';
import words from '~/assets/words.yml';

const $startText = document.getElementById('start_text');
const $currentWord = document.getElementById('current_word');
const $textField = document.getElementById('text_field');
const $time = document.getElementById('time');
const $scoreWrapper = document.getElementById('score_wrapper');
const $score = document.getElementById('score');
const $highscore = document.getElementById('highscore');
const $footer = document.getElementById('footer');

const state = {
  doneWords: [],
  currentWord: '',
  inGame: false,
  time: 0,
  score: 0,
  isPassword: false
};
const gameLenght = 10;
var interval;

window.addEventListener('load', () => {
  $time.innerText = `${gameLenght}s`;

  $textField.focus();
  $textField.oninput = textFieldUpdate;
  $textField.placeholder = 'type "start"';

  $highscore.innerText = getHighscore();

  // only show current word when game starts
  hide($currentWord);
  // only show score display when game starts
  hide($scoreWrapper);
});

const textFieldUpdate = () => {
  const text = $textField.value.toLowerCase();

  if (!state.inGame && text === 'start') startGame();

  // if word guessed correct, get an extra second
  if (state.inGame && text.trim() === state.currentWord) round(1);
};

const startGame = () => {
  state.inGame = true;
  state.score = 0;

  // set game length
  $time.innerText = `${gameLenght}s`;

  // start round
  round(gameLenght);

  show($currentWord);
  hide($startText);

  show($scoreWrapper);

  hide($footer);

  interval = setInterval(() => {
    state.time--;
    $time.innerText = `${state.time}s`;
    if (state.time <= 0) {
      endGame();
    }
  }, 1000);
};

// called each round, after word typed correctly
const round = (val) => {
  // clear the textfield
  $textField.value = '';

  state.time = state.time + val;
  state.score++;
  $score.innerText = state.score;

  // get random word
  while (true) {
    // if the word has already been given, don't give again
    state.currentWord = words[Math.floor(Math.random() * words.length)];
    if (state.doneWords.includes(state.currentWord)) {
      console.log(`${state.currentWord} already done!`);
    } else {
      break;
    }
  }

  $currentWord.innerText = state.currentWord;
  $textField.placeholder = `type "${state.currentWord}"`;

  state.doneWords.push(state.currentWord);

  // if doneWords is the same size as words, empty it out
  // because otherwise there are no words left
  if (state.doneWords.length === words.length) {
    console.log('All words done!');
    state.doneWords = [];
  }

  // reset it if it was the password field
  state.isPassword = false;
  $textField.type = 'text';

  // randomly, make the field a password field so users can't see what's going on
  // 1 in 10 chance
  const r = Math.floor(Math.random() * 10);
  if (r === 0) {
    state.isPassword = true;
    $textField.type = 'password';
  }
};

const endGame = () => {
  // reset timer
  clearInterval(interval);

  state.inGame = false;

  // show start text and change text
  show($startText);
  $startText.innerHTML = `
    <span class="game-over">Game over. </span> Type "<b>start</b>" to play again</span>
  `;

  // set placeholder to "start" and empty textfield
  $textField.placeholder = 'type "start"';
  $textField.value = '';
  // $textField.blur();

  // check if score more than highscore
  const highscore = getHighscore();
  if (state.score > highscore) {
    console.log('high score has been beaten!');
    // set new highscore
    $highscore.innerText = state.score;
    setHighscore(state.score);
  }

  // reset field if it was password field
  state.isPassword = false;
  $textField.type = 'text';

  hide($currentWord);
  show($footer);
};
