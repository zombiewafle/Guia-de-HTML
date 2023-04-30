"use strict";

var _page1JS = require("../src/page1/page1JS.js");

var _page1Links = require("../src/page1/page1Links.js");

require("../assets/bg.jpg");

require("../assets/bg1.jpg");

require("../assets/Font.ttf");

require("./css/backgrounds.css");

require("./css/progressBar.css");

require("./css/style.css");

require("./css/text.css");

//Se importan todos los elementos al bundle
//Creacion del body
let container = document.getElementById("body-container");
document.body.innerHTML = ""; //Creacion de variables para los textos

let titulo = document.createElement("h1");
let instrucciones = document.createElement("p");
let opcionInicial = document.createElement("b");
let bar = document.createElement("progress");
let text = document.createTextNode("Iniciar historia interactiva");
let link = document.createElement("a"); //link.href = "../src/page1/page1.html";

link.addEventListener("click", page1);
link.appendChild(text);
opcionInicial.appendChild(link);
let hr = document.createElement("hr");
let hr1 = document.createElement("hr"); //var opcionInicial = document.getElementById("startOption");
//var text = document.createTextNode("Iniciar historia interactiva");
//var link = document.createElement("a");
//link.href = "page1.html"
//link.appendChild(text);

titulo.innerHTML = "Laboratorio No.7";
instrucciones.innerHTML = "Crear una historia interactiva, esta vez implementando lo aprendido en webpack y babel"; //opcionInicial.appendChild(link);

document.body.appendChild(titulo);
document.body.appendChild(instrucciones);
document.body.appendChild(hr1);
document.body.appendChild(opcionInicial);
document.body.appendChild(hr);
document.body.appendChild(bar);

function page1() {
  //alert("page1");
  (0, _page1JS.page1JS)();
  (0, _page1Links.page1Links)();
}
