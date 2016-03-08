# browserify

https://www.npmjs.com/package/browserify

require('modules') in the browser
browserify will recursively analyze all the require() calls in your app in order to build a bundle you can serve up to the browser in a single ```<script>``` tag.

```
//Para instalarlo.
npm install --global browserify

//Para convertir un fichero js (con require's) a uno con todos los modules dentro:
browserify app.js > index.js

//Se suele poner esto dentro de package.json dentro de "scripts" para automatizar el proceso:
"build": "browserify app.js > index.js"

//Y luego, desde la consola:
npm run build
```
