var h = require('hyperscript');

document.body.appendChild(
  h('section.page-header',
    h('h1.project-name', "Experimento #2.1"),
    h('h2.project-tagline', 'Generar html utilizando virtual DOM'),
    h("a.button", {href: "https://github.com/mi-mina/experimento"}, "View on GitHub"),
    h("a.button", {href: "https://github.com/mi-mina/experimento/archive/master.zip"}, "Download .zip"))
  );

var noDetails = true;

document.body.appendChild(
  h("section#main.main-content",
    h("div",
      h("button.toogle.btn.btn-info.btn-lg", "Show/Hide Info")),
    h("article#albums")));

document.body.onload = function (){
  console.log("cargando body");
    fetch('public/info.json')
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        for(var i = 0; i < json.length; i++){
          document.getElementById('albums').appendChild(
            h("div.media",
              h("div.media-left.media-middle",
                h("img#img.media-object.img-thumbnail"+i, {src: "public/images/"+json[i].nombreArchivo+".jpg"})),
              h("div.media-body",
                h("h2.media-heading", json[i].titulo),
                h("ul", {style: {"list-style-type": "none", "padding": 0}, hidden: noDetails},
                  h("li", h("b", "Album: "), json[i].album),
                  h("li", h("b", "Artista: "), json[i].artista),
                  h("li", h("b", "Lugar: "), json[i].lugar),
                  h("li", h("b", "Fecha: "), json[i].fecha))))
          )
        }
      });
};

var toogle = document.querySelector('.toogle');

toogle.onclick = function () {
  noDetails = !noDetails;
  var items = document.getElementsByTagName("ul");

  for(var i = 0; i < items.length; i++){
    if (noDetails) {
      items[i].setAttribute("hidden", true);
    }else{
      items[i].removeAttribute("hidden");
    };
  };
};
