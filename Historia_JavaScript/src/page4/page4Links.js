import {quittingPage} from'../altEnding/quitting.js';
import {page3JS} from '../page3/page3JS.js';
import {page3Links} from '../page3/page3Links.js';

import  '../../assets/bg.jpg';
import  '../../assets/bg1.jpg';
import  '../../assets/Font.ttf';


import '../css/backgrounds.css';
import '../css/progressBar.css';
import '../css/style.css';
import '../css/text.css';




export const page4Links = () => {
    let container = document.getElementById("body-container");
    //document.body.innerHTML = "";

    let explore = document.createElement("b");
    let returnTo = document.createElement("b");


    let space1 = document.createElement("br");


    let linkExplore = document.createElement("a");
    let linkRT = document.createElement("a");

    let hr = document.createElement("hr");
    let hr1 = document.createElement("hr");
    let bar = document.createElement("progress")


    let textExplore = document.createTextNode("Explorar el segundo nivel");
    let textRT = document.createTextNode("Volver");


    //linkExplore.href = "../src/altEnding/quitting.html";
    //linkRT.href = "../src/page3/page3.html";

    linkExplore.addEventListener("click", page3);
    linkRT.addEventListener("click", quitting);


    linkExplore.appendChild(textExplore);
    linkRT.appendChild(textRT);


    explore.appendChild(linkExplore);
    returnTo.appendChild(linkRT);

    document.body.appendChild(hr);
    document.body.appendChild(explore);
    document.body.appendChild(space1);
    document.body.appendChild(returnTo);
    document.body.appendChild(hr1);
    document.body.appendChild(bar);



    function page3(){
        //alert("page3");
        page3JS();
        page3Links();
        
    }
    
    function quitting(){
        //alert("quitting");
        quittingPage();
        
    }
    

};