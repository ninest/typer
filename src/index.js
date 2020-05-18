const $currentWord = document.getElementById('current_word');
const $textField = document.getElementById('text_field');
const $time = document.getElementById('time');
const $score = document.getElementById('score')

const words = ["one", "two", "three", "four", "computer", "stewardess", "four-twenty", "javascript", "large-headed donkey"]
var currentWord = ""

var inGame = false;
var time = 0; // milliseconds
var score = 0;

document.body.onload = () => {
  $currentWord.innerText = 'start'
  $textField.focus();

  $textField.oninput = update;
}

const update = (e) => {
  const text = $textField.value.toLowerCase();

  if (!inGame && text === 'start') startGame();

  // if word guessed correct, get an extra second
  if (inGame && text === currentWord) round(1);
}

const startGame = () => {
  // start game
  inGame = true;
  
  // 10 seconds to start
  round(10);

  setInterval(() => {
    time--;
    $time.innerText = time;
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