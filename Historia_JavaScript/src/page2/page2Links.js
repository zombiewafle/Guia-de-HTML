
import {page3JS} from'../page3/page3JS.js';
import {page3Links} from'../page3/page3Links.js';

import {page1JS} from'../page1/page1JS.js';
import {page1Links} from'../page1/page1Links.js';


import  '../../assets/bg.jpg';
import  '../../assets/bg1.jpg';
import  '../../assets/Font.ttf';


import '../css/backgrounds.css';
import '../css/progressBar.css';
import '../css/style.css';
import '../css/text.css';

export const page2Links = () => {
    let container = document.getElementById("body-container");
    //document.body.innerHTML = "";

    let bWindow = document.createElement("p");
    let returnTo = document.createElement("p");


    let space = document.createElement("br");
    let space1 = document.createElement("br");


    let linkBW = document.createElement("a");
    let linkRT = document.createElement("a");

    let hr = document.createElement("hr");
    let hr1 = document.createElement("hr");
    let bar = document.createElement("progress")


    let textBW = document.createTextNode("Romper la puerta corrediza y entrar a la casa");
    let textRT = document.createTextNode("Volver");


    //linkBW.href = "../src/page3/page3.html";
    //linkRT.href = "../src/page1/page1.html";
    linkBW.addEventListener("click", page3);
    linkRT.addEventListener("click", page1);

    linkBW.appendChild(textBW);
    linkRT.appendChild(textRT);


    bWindow.appendChild(linkBW);
    returnTo.appendChild(linkRT);

    document.body.appendChild(hr);
    document.body.appendChild(bWindow);
    document.body.appendChild(returnTo);
    document.body.appendChild(hr1);
    document.body.appendChild(bar);

    function page3(){
        //alert("page3");
        page3JS();
        page3Links();
        
    }

    function page1(){
        //alert("page3");
        page1JS();
        page1Links();
        
    }

};