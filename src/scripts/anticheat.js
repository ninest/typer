import 'devtools-detect';
import { setHighscore } from './highscore.js';

if (process.env.NODE_ENV === 'development') {
  // nothing here
} else {
  window.addEventListener('devtoolschange', event => {
    console.log('Is DevTools open:', event.detail.isOpen);
    location.reload();
    window.location.replace('https://github.com/ninest/typer');
    setHighscore(0);
  });
}
