# [Typer](https://ninest.github.io/typer)

> A simple game to test your typing skills

![Made with JavaScript](https://img.shields.io/badge/Made%20With-JavaScript-black?style=flat-square&)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## 🎮 How to play
1. Visit [https://ninest.github.io/typer](https://ninest.github.io/typer)
2. To start a game, type "start"

You now have **5 seconds** to type out all the words displayed. For every word you type correctly, your score increases, and you also get **1 extra second**. Can you beat my highscore of 11? (you probably can)


## 🛠 Build setup
Clone or fork the repository, then run the commands to start the development server:

```
npm i
npm run dev
```

To build the app, run

```
npm run build
```

The website will be built to the `docs/` folder so that it can be hosted with GitHub pages.

To invalidate cache,

```
caches.keys().then(cacheNames => {
  cacheNames.forEach(cacheName => {
    caches.delete(cacheName);
  });
});
```