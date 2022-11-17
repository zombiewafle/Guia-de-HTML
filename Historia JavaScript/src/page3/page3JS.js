
import  '../../assets/bg.jpg';
import  '../../assets/bg1.jpg';
import  '../../assets/Font.ttf';


import '../css/backgrounds.css';
import '../css/progressBar.css';
import '../css/style.css';
import '../css/text.css';

export const page3JS = () => {
    let container = document.getElementById("body-container");
    document.body.innerHTML = "";


    let text = document.createElement("p");
    //var sFloor = document.getElementById("secondFloor");
    //var returnTo = document.getElementById("back");


    //var linkSF = document.createElement("a");
    //var linkRT = document.createElement("a");


    //var textSF = document.createTextNode("Ir al segundo nivel");
    //var textRT = document.createTextNode("Volver");


    //linkSF.href = "page4.html";
    //linkRT.href = "page1.html";


    //linkSF.appendChild(textSF);
    //linkRT.appendChild(textRT);


    text.innerHTML = "Intentas atravesar la puerta principal y no lo logras, lo vuelves a intentar y ves como se va fragmentando. En el tercer intento la puerta cae frente a ti, decides entrar y te encuentras sin aliento por el repentino ejercicio.";


    //sFloor.appendChild(linkSF);
    //returnTo.appendChild(linkRT);


    //body.appendChild(sFloor);
    //body.appendChild(returnTo);


    document.body.appendChild(text);

    
};