var h = require('hyperscript')

document.body.appendChild(
  h("div",
  h('section.page-header',
    h('h1.project-name', "Experimento #2"),
    h('h2.project-tagline', 'Generar html utilizando virtual DOM'),
    h("a.btn", {href: "https://github.com/mi-mina/experimento"}, "View on GitHub"),
    h("a.btn", {href: "https://github.com/mi-mina/experimento/archive/master.zip"}, "Download .zip")),
  h("section.main-content",
    h("p","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
          "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
          "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
          "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")))

  )
