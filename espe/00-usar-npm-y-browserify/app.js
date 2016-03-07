var d3 = require('d3');
var diHola = require('./client/hola.js');
var diAdios = require('./client/adios.js');

diHola('Espe');
diAdios('Espe');

var r = 30;
var width = 600,
    height = 600;

var x = width / r - 1,
    y = height / r;

var h = 120;

// var data = d3.range(40).map(function() { return [(Math.random() * (width - 2 * r)) + r,
//   (Math.random() * (height - 2 * r)) + r]; });

// var color = d3.scale.category20b();

d3.select("body") //Con select, seleccionamos el primer elemento de tipo body
  .append("svg") //Le añadimos un elemento de tipo svg
    .attr("width", width) //Al elemento svg, le añadimos el atributo width
    .attr("height", height) //y height
  .selectAll("circle") //Seleccionamos todos los elementos de tipo circle dentro de svg (de momento ninguno)
    .data(d3.range(x * y)) //A cada elemento le vinculamos unos datos (data tiene que ser un array de datos)
  .enter().append("circle") //con enter().append("circle") añadimos circulos hasta que cada data tenga asociado uno
    .style("transform", function(d) { return "translate(" + ((d % x) * r + r) + "px, " + ((Math.floor(d / x) * 3 * r) + r) + "px)";}) //d es el dato vinculado con cada circulo
    .attr("r", r)
    .style("fill", function(d, i) { return d3.hsl(d += i*4 , 0.8, 0.8) })//además de d, podemos usar i, el index de ese dato
    .style("fill-opacity", 0.7)
    .on("mouseover", mouseover);


function mouseover(d) {
  d3.select(this)
    .transition()
      .duration(800)
      .attr("r", r*3)
    .transition()
      .delay(800)
      .duration(1000)
      .attr("r", r);

}


// circle.style("fill", function(){return d3.hsl(h += 20 , 0.8, 0.8)});
