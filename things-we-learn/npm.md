# npm

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


Algunas de las librerías (modules, packages) que usamos añaden comandos que se pueden ejecutar desde la línea de comando. Por ejemplo, `browserify`.
