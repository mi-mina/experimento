# Experimentos


#### 0. Usar npm y browserify

Objetivos:

- entender npm, `package.json` y cómo se instalan dependencias
- entender browserify y ser capaz de generar un fichero .js a partir de un árbol de dependencias.

Un árbol de dependencias es: 1) otros ficheros .js en directorios locales o 2) librerías instaladas vía npm.

Extras:

- Añadir un comando npm para crear el fichero javascript (`npm run build`)
- Usar watchify para generar el fichero automáticamente cuando se modifique los contenidos. Añadir otro comando que en vez de browserify use watchify (`npm run watch`)

#### 1. Generar html utilizando virtual dom

La idea es cargar un fichero json con la información de los _clips de audio_ y mostrar la carátula y su información en la página web.

Objetivos:

 - Ser capaz de utilizar [Fetch API](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) para cargar y visualizar un archivo .json
 - Entender qué es el virtual-dom
 - Generar el html dom dinámicamente a partir de un fichero .json utilizando técnicas funcionales y la librería [hyperscript](https://www.npmjs.com/package/hyperscript)


#### 2. Animaciones sin necesidad de librerías
