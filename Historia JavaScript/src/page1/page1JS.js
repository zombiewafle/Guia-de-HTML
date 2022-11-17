import {page1Links} from "../page1/page1Links.js";
page1Links();

export const page1JS = () => {
    let container = document.getElementById("body-container");
    document.body.innerHTML = "";

    let start = document.createElement("p");

    
    start.innerHTML = "Te encuentras confundido y desorientado, tu visión poco a poco se va aclarando y notas que te encuentras en un lugar extraño, parece lleno de casa exactamente iguales, pero notas algo, una  de las casas se encuentra notablemente deteriorada. ¿Decides entrar o huir?";

    document.body.appendChild(start);


};