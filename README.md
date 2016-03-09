# Experimentos

Cosas que molaría probar:

- docco: http://jashkenas.github.com/docco/
- browserify con babel:
- react


#### 1. Usar npm y browserify

Objetivos:

- entender npm, `package.json` y cómo se instalan dependencias
- entender browserify y ser capaz de generar un fichero .js a partir de un árbol de dependencias.

Un árbol de dependencias es: 1) otros ficheros .js en directorios locales o 2) librerías instaladas vía npm.

Extras:

- Añadir un comando npm para crear el fichero javascript (`npm run build`)
- Usar watchify para generar el fichero automáticamente cuando se modifique los contenidos. Añadir otro comando que en vez de browserify use watchify (`npm run watch`)

#### 2. Generar html utilizando virtual dom

La idea es cargar un fichero json con la información de los _clips de audio_ y mostrar la carátula y su información en la página web.

Objetivos:

 - Ser capaz de utilizar [Fetch API](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) para cargar y visualizar un archivo .json
 - Entender qué es el virtual-dom
 - Generar el html dom dinámicamente a partir de un fichero .json utilizando técnicas funcionales y la librería [hyperscript](https://www.npmjs.com/package/hyperscript)

Algunas pistas:

Fetch API es una versión mejorada de XMLHTTPRequest. A nivel de uso, la mayor diferencia es que usa [Promises](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise). Entender cómo funciona una Promise es bastante importante.

Virtual-DOM: Gracias a React, está de moda generar html dinámicamente utilizando técnicas funcionales y una cosa que se llama virtual-dom. En general la idea es como sigue: existe una estructura de datos (en el ejemplo, tu .json) y una función se encarga de convertir esa estructura de datos en un árbol dom-virtual (es decir, una representación del DOM). Después se compara el dom-virtual con el dom real (el que se ve en la página) y se modifica el dom real para que sea igual que el virtual. Cuando los datos cambian (por ejemplo, se añade un nuevo _clip_) se repite el proceso.

React: https://facebook.github.io/react/index.html
Rect virtual-dom: https://facebook.github.io/react/docs/glossary.html
Otra librería que implementa virtual-dom: https://github.com/Matt-Esch/virtual-dom

Para generar el virtual-dom se utiliza, generalmente JSX (https://facebook.github.io/react/docs/jsx-in-depth.html) pero, para entender mejor el proceso, de momento vamos a utilizar hyperscript (https://github.com/dominictarr/hyperscript)

En resúmen:

- Pillamos el json mediante FetchAPI
- Le pasamos esos datos a una función que deberá generar un dom-virtual utilizando hyperscript
- Como hyperscript no hace diff (que es básicamente lo que hace react y https://github.com/Matt-Esch/virtual-dom), lo que vamos a hacer es algo así como:
- 
```js
document.body.innerHTML = generateVirtualDOM(data).outerHTML
```



#### 3. Animaciones sin necesidad de librerías

La idea es utilizar `requestAnimationFrame` por un lado para dibujar en el canvas, y luego emplear la técnica de "dos relojes" para crear animaciones.

La propuesta es que exista un campo con un tempo en _bpm_ (modificable) y que unos círculos marquen ese tempo (lo que ya hemos hablado).

Para animar con la técnica de los "dos relojes" (imprescindible cuando se hacen cosas con audio) la idea es la siguiente:

- Existe una estructura de datos. En nuestro caso será un HashMap con el tempo, beat actual y lo que necesitemos para generar el dibujo
- Mediante setTimeOut modificaremos la estructura de datos, __pero no dibujaremos nada__
- Mediante requestAnimationFrame dibujaremos lo que haya en la estructura de datos, __pero no calcularemos nada__. Es decir, todos los cálculos necesarios para hacer el dibujo se hará en la función de `setTimeOut` y lo que sea transformar esos datos en dibujo lo haremos en la función de `requestAnimationFrame`

