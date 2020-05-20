import { WebView } from 'https://deno.land/x/webview/mod.ts';

// const indexFile = await Deno.open('desktop/public-desktop/index.html');
// var html = await Deno.copy(indexFile, Deno.stdout);
// indexFile.close();

// console.log(html);

var html = `
<html>
  <head>
    <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    iframe { width: 100%; height: 100vh; border: none }
    </style>
  </head>
  <body>
    <iframe src="http://typerapp.now.sh/"></iframe>
  </body>
</html>
`

const view = new WebView({
  title: 'Typer',
  url: `data:text/html,${encodeURIComponent(html)}`,
  width: 500,
  height: 450,
  debug: true,
  frameless: false,
})

await Promise.all([view.run()]);