import 'devtools-detect';
import { setHighscore } from './highscore.js';

// initial check for webdriver, possible automation
if (navigator.webdriver === true) {
  location.reload();
  window.location.replace('https://github.com/ninest/typer');
  setHighscore(0);
}

// open github repo if dev tools opened
if (process.env.NODE_ENV === 'development') {
  // nothing here
} else {
  window.addEventListener('devtoolschange', event => {
    location.reload();
    window.location.replace('https://github.com/ninest/typer');
    setHighscore(0);
  });
}
