export const page2JS = () => {
    let container = document.getElementById("body-container");
    document.body.innerHTML = "";


    //let text = document.getElementById("texto");
    let text = document.createElement("p");

    //var bWindow = document.getElementById("breakWindow");
    //var returnTo = document.getElementById("back");


    //var linkBW = document.createElement("a");
    //var linkRT = document.createElement("a");
        

    //var textBW = document.createTextNode("Romper la puerta corrediza y entrar a la casa");
    //var textRT = document.createTextNode("Volver");
        

    //linkBW.href = "page3.html";
    //linkRT.href = "page1.html";
        

    //linkBW.appendChild(textBW);
    //linkRT.appendChild(textRT);
        

    text.innerHTML = "Has avanzado por el estrecho pasadizo, avanzas como puedes y llegas a la parte trasera de la casa. ¿Ahora que harás? ¿Intentarás entrar a la casa o regresarás?";
        

    //bWindow.appendChild(linkBW);
    //returnTo.appendChild(linkRT);
        

    //body.appendChild(bWindow);
    //body.appendChild(returnTo);

        

    document.body.appendChild(text);


};