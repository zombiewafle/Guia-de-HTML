export const endPage = () => {
    let container = document.getElementById("body-container");
    document.body.innerHTML = "";



    let text = document.createElement("p");


    text.innerHTML = "Decides no entrar a la propiedad. Parece que no eres lo suficientemente valiente o curioso para esta aventura.....";


    document.body.appendChild(text);



};


