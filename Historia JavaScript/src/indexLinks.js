

let opcionInicial = document.getElementById("startOption");
    
let text = document.createTextNode("Iniciar historia interactiva");
let link = document.createElement("a");

link.href = "../src/page1/page1.html";

link.appendChild(text);

opcionInicial.appendChild(link);

let hr = document.createElement("hr");

document.body.appendChild(hr);
document.body.appendChild(opcionInicial)