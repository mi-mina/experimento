# Usar npm y browserify

```
// genera package.json (se podría hacer a mano, pero no...)
npm init

// descarga la librería y lo mete dentro de node_modules (no usar así)
npm install d3 -> node_modules

// dentro de .gitignore escribir node_modules para que no suba esa carpeta al repositorio

// esta hace lo de arriba y actualiza package.json
npm install --save d3 ->
```


Hay dos tipos de librerías que vamos a usar:

- las que usamos para hacer cosas (en una página web)
- herramientas (que tienen binarios) que utizamos para hacer cosas en desarrollo

```
npm install --global browserify
```

Convertir un fichero js con require's a uno con todo dentro:
```
browserify app.js > index.js
```

Esto se suele poner dentro de package.json como un script:

```
npm run build
```
