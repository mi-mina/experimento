





module.exports = function createContainer() {
  var theBody = document.getElementsByTagName("body")[0];
  var newDiv = document.createElement("div");
  var svg = document.getElementById("svg1");
  newDiv.appendChild(svg);
  theBody.appendChild(newDiv);
  newDiv.setAttribute("class", "mainContent");
}
