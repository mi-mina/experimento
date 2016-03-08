var h = require('hyperscript')

document.body.appendChild(
  h('section.page-header',
    h('h1.project-name', "Experimento #2"),
    h('h2.project-tagline', 'Generar html utilizando virtual DOM'),
    h("a.btn", {href: "https://github.com/mi-mina/experimento"}, "View on GitHub"),
    h("a.btn", {href: "https://github.com/mi-mina/experimento/archive/master.zip"}, "Download .zip"))
  )

document.body.appendChild(
  h("section#main.main-content")
)

var nombreArchivos = [];
var misImagenes = [];
function getNombreArchivo (cancion, i, array){
  nombreArchivos[i] = array[i].nombreArchivo;
}
function añadeJPG (nombre){
  return String(nombre + ".jpg");
}

fetch('info.json')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log("pasando por 1", json);
    json.forEach(getNombreArchivo);
    misImagenes = nombreArchivos.map(añadeJPG);
    console.log("pasando por 2", nombreArchivos);
    console.log("pasando por 3", misImagenes.length);
    for(var i = 0; i < misImagenes.length; i++){
      document.getElementById('main').appendChild(
        h("img#img"+i, {src: ""})   )
    }
  }).then();

for(var i = 0; i < 8; i++){
fetch("musiquetriangle03.jpg").then(function(response) {
    response.blob().then(function(myBlob) {
      var objectURL = URL.createObjectURL(myBlob);
      console.log("pasando por 4", misImagenes.length);
      var myImage = document.getElementById('img'+i);
      myImage.src = objectURL;
    });
  });
}
