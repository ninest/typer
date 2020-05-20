import { WebView } from 'https://deno.land/x/webview/mod.ts';


const view = new WebView({
  title: 'Typer',
  url: `http://typerapp.now.sh/`,
  width: 500,
  height: 450,
  debug: true,
  frameless: false,
})

await Promise.all([view.run()]);