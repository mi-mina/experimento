# Usar npm y browseriy

https://www.npmjs.com/

npm (node package manager) makes it easy for JavaScript developers to share and reuse code.
These bits of reusable code are called packages, or sometimes modules.

```
// genera package.json (se podría hacer a mano, pero no...)
npm init

// descarga la librería y lo mete dentro de node_modules (no usar así)
npm install <package_name> -> node_modules

//para confirmar que npm install ha funcionado correctamente:
ls node_modules               # use `dir` for Windows

// dentro de .gitignore escribir node_modules para que no suba esa carpeta al repositorio

// Usando la opción --save, hacemos lo mismo que arriba y además actualiza package.json
npm install --save <package_name>
```


Hay dos tipos de librerías que vamos a usar:

- las que usamos para hacer cosas (en una página web)
- herramientas (que tienen binarios) que utizamos para hacer cosas en desarrollo

## browserify

https://www.npmjs.com/package/browserify

require('modules') in the browser
browserify will recursively analyze all the require() calls in your app in order to build a bundle you can serve up to the browser in a single ```<script>``` tag.

```
//Para instalarlo.
npm install --global browserify

//Para convertir un fichero js (con require's) a uno con todos los modules dentro:
browserify app.js > index.js

//Se suele poner esto dentro de package.json como un script para automatizar el proceso:
npm run build
```
