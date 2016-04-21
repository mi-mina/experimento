





module.exports = function createContainer() {
  var theBody = document.getElementsByTagName("body")[0];
  var newSection = document.createElement("section");
  var newDiv = document.createElement("div");
  var svg = document.getElementById("svg1");
  newDiv.appendChild(svg);
  newDiv.setAttribute("class", "center");
  newSection.appendChild(newDiv);
  newSection.setAttribute("class", "main-content");
  theBody.appendChild(newSection);

}
