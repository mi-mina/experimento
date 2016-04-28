var h = require('hyperscript');

function renderPage(json){
  return h('body', [h('section.page-header',
          h('h1.project-name', "Experimento #2"),
          h('h2.project-tagline', 'Generar html dinámicamente con hyperscript y Fetch API'),
          h("a.button", {href: "https://github.com/mi-mina/experimento"}, "View on GitHub"),
          h("a.button", {href: "https://github.com/mi-mina/experimento/archive/master.zip"}, "Download .zip")),
          h("section#main.main-content",
            h("div",
              h("button.toggle.btn.btn-info.btn-lg", "Show/Hide Info")),
            h("article#albums",
              Object.keys(json).map(
                function(album){
                  return h("div.media",
                  h("div.media-left.media-middle",
                  h("img#img.media-object.img-thumbnail", {src: "public/images/"+json[album].nombreArchivo+".jpg"})),
                  h("div.media-body",
                  h("h2.media-heading", json[album].titulo),
                  h("ul", {style: {"list-style-type": "none", "padding": 0}},
                  h("li", h("b", "Album: "), json[album].album),
                  h("li", h("b", "Artista: "), json[album].artista),
                  h("li", h("b", "Lugar: "), json[album].lugar),
                  h("li", h("b", "Fecha: "), json[album].fecha))));
                }
              )
          ))])
       ;
};

var toggle;
var noDetails = false;

fetch('public/info.json')
      .then(function(response) {
        return response.json();
      }).then(function(data){
        console.log(data);
        document.body.innerHTML = renderPage(data).outerHTML;
        toggle = document.querySelector('.toggle');
        toggle.onclick = function () {
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
      });
