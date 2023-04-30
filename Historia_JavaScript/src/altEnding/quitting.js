export const quittingPage = () => {
    let container = document.getElementById("body-container");
    document.body.innerHTML = "";

    var text = document.createElement("p");
    var text2 = document.createElement("p");

    var text3 = document.createElement("p");
    var text4 = document.createElement("p");

        

    text.innerHTML = "Notas que te vigilan, sientes como tu respiración se agita, tu corazón late más rápido y notas una mancha entre la oscuridad del segundo nivel";
    
    text2.innerHTML = "Intentas calmarte pero conforme logras que tu visión se haga más y más clara, notas que no es una sola mancha, son varias y todas están viendote desde dentro de cada habitación";
    
    text3.innerHTML = "Decides huir y mientras bajas hacia el primer nivel, escuchas como si las puertas de toda la casa se hubieran cerrado a al vez y decides irte por la puerta de vídrio que hay en la parte trasera de la casa";
    
    text4.innerHTML = "Logras salir de la casa y ya que logras ver el frente de la casa, notas ojos completamente blancos desde una de las ventanas del segundo nivel. Decides huir y no volver.....";


    document.body.appendChild(text);
    document.body.appendChild(text2);
    document.body.appendChild(text3);
    document.body.appendChild(text4);

    

};
