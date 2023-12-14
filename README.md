# espresso-express

A complete VanillaJS shot at building a full fledged coffee ordering app for users.

## Works

We created an usual web page and running it using Live Server VS code extension. We used `“type”: “module”` to the script tag for us to enable imports in `app.js`. This has led us to do:

1. In the `app.js`, the logic will define global scope for the app. We do that by `window.app={}`
2. Create `/services` folder and create `API.js` and `Router.js`
   1. `API.js` will use fetch to interact with internet to fetch data or so something.
   2. `Router.js` will use `history` API to change the path in URL. The changes can be observed to replace HTML ultimately to act like a single page application.
3. Create `/components` folder and get get to define `customElements` . These need to be imported into `app.js` so that JS engine can invoke the `customElements.define(..)` line and make it an understandable component to the user.
4. Now the idea is to use the `Router` to render these components like an Single Page App.
5. We use `Proxy()` to observe changes happening to the data and automatically update the UI HTML Elements.
6. The *Shadow DOM* is used to show CSS seperation from web components.

## How to use

1. This project is primarily to combination of different techniques combined and driven in vanillajs way.
2. Clone this project and open in vscode and *run with Live Server*
