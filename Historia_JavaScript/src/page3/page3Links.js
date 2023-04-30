
import {page1JS} from '../page1/page1JS.js';
import {page1Links} from '../page1/page1Links.js';

import {endPage} from '../end/end.js';


import  '../../assets/bg.jpg';
import  '../../assets/bg1.jpg';
import  '../../assets/Font.ttf';


import '../css/backgrounds.css';
import '../css/progressBar.css';
import '../css/style.css';
import '../css/text.css';

export const page3Links = () => {
    let container = document.getElementById("body-container");
    //document.body.innerHTML = "";

    let sFloor = document.createElement("b");
    let returnTo = document.createElement("b");


    let linkSF = document.createElement("a");
    let linkRT = document.createElement("a");
    let space1 = document.createElement("br");


    let hr = document.createElement("hr");
    let hr1 = document.createElement("hr");
    let bar = document.createElement("progress")



    let textSF = document.createTextNode("Ir al segundo nivel");
    let textRT = document.createTextNode("Volver");


    //linkSF.href = "../src/page4/page4.html";
    //linkRT.href = "../src/page1/page1.html";


    linkSF.addEventListener("click", end);
    linkRT.addEventListener("click", page1);



    linkSF.appendChild(textSF);
    linkRT.appendChild(textRT);

    sFloor.appendChild(linkSF);
    returnTo.appendChild(linkRT);

    document.body.appendChild(hr);
    document.body.appendChild(sFloor);
    document.body.appendChild(space1);
    document.body.appendChild(returnTo);
    document.body.appendChild(hr1);
    document.body.appendChild(bar);

    
    function end(){
        endPage()
        
    }

    function page1(){
        page1JS();
        page1Links();
    }

    

};