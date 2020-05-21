# [Typer](https://typerapp.now.sh/)

> A simple game to test your typing skills

![Made with JavaScript](https://img.shields.io/badge/Made%20With-JavaScript-black?style=flat-square&)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## 🎮 How to play
1. Visit [https://typerapp.now.sh/](https://typerapp.now.sh/)
2. To start a game, type "start"

You now have **10 seconds** to type out all the words displayed. For every word you type correctly, your score increases, and you also get **1 extra second**. Can you beat my highscore of 16? (you probably can)

Test the app on desktop with Deno by running

```
deno run -A --unstable https://raw.githubusercontent.com/ninest/web-window/master/index.ts open https://typerapp.now.sh  
```

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