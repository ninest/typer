<h1 align="center"><a href="https://typerapp.now.sh/">⌨️ Typer</a></h1>

<p align="center">The 10-second typing game</p>

<p align="center">
  <img src="https://img.shields.io/badge/Made%20With-JavaScript-black?style=flat-square&" alt="Made with Deno" />
  <a href="http://makeapullrequest.com/">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="Make a PR" />
  </a>
  <img src="https://img.shields.io/github/license/ninest/typer?style=flat-square" alt="MIT" />
</p>

<p align="center"><a href="https://typerapp.now.sh/"><img width="500" alt="demo" src="./readme-assets/demo.gif"></a></p>

## 🎮 How to play
1. Visit [https://typerapp.now.sh/](https://typerapp.now.sh/)
2. To start a game, type "start"

You now have **10 seconds** to type out all the words displayed. For every word you type correctly, your score increases, and you also get **1 extra second**. Can you beat my highscore of 16? (you probably can)

## 🛠 Build setup
### Web
Clone or fork the repository, then run the commands to start the development server:

```
npm i
npm run dev
```

To build the app, run

```
npm run build
```

#### Hosting

The game is hosted with Vercel. To host a debug version of the app, run

```
now
```

To host the production version of the app, run

```
now --prod
```

### Desktop
Run the app on desktop with
```
deno run -A --unstable https://raw.githubusercontent.com/ninest/web-window/master/index.ts open https://typerapp.now.sh
```