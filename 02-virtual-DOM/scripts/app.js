var h = require('hyperscript');

document.body.appendChild(
  h('section.page-header',
    h('h1.project-name', "Experimento #2"),
    h('h2.project-tagline', 'Generar html utilizando virtual DOM'),
    h("a.btn", {href: "https://github.com/mi-mina/experimento"}, "View on GitHub"),
    h("a.btn", {href: "https://github.com/mi-mina/experimento/archive/master.zip"}, "Download .zip"))
  );

document.body.appendChild(
  h("section#main.main-content")
);

fetch('public/info.json')
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    for(var i = 0; i < json.length; i++){
      document.getElementById('main').appendChild(
        h("div.media",
          h("div.media-left.media-middle",
            h("img#img.media-object.img-thumbnail"+i, {src: "public/images/"+json[i].nombreArchivo+".jpg"})),
          h("div.media-body",
            h("h2.media-heading", json[i].titulo),
            h("p", "Album: "+json[i].album),
            h("p", "Artista: "+json[i].artista),
            h("p", "Lugar: "+json[i].lugar),
            h("p", "Fecha: "+json[i].fecha)))
      )
    }
  });
