import 'devtools-detect';
import { setHighscore } from './highscore.js';

//initial check for webdriver, possible automation
if(navigator.webdriver == true){
  location.reload();
  window.location.replace('https://github.com/ninest/typer');
  setHighscore(0);
}

if (process.env.NODE_ENV === 'development') {
  // nothing here
} else {
  window.addEventListener('devtoolschange', event => {
    // console.log('Is DevTools open:', event.detail.isOpen);
    location.reload();
    window.location.replace('https://github.com/ninest/typer');
    setHighscore(0);
  });
}
