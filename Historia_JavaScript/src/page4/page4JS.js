
import  '../../assets/bg.jpg';
import  '../../assets/bg1.jpg';
import  '../../assets/Font.ttf';


import '../css/backgrounds.css';
import '../css/progressBar.css';
import '../css/style.css';
import '../css/text.css';

export const page4JS = () => {
    let container = document.getElementById("body-container");
    document.body.innerHTML = "";




    let text = document.createElement("p");


    text.innerHTML = "Intentas atravesar la puerta principal y no lo logras, lo vuelves a intentar y ves como se va fragmentando. En el tercer intento la puerta cae frente a ti, decides entrar y te encuentras sin aliento por el repentino ejercicio.";

    document.body.appendChild(text);

};