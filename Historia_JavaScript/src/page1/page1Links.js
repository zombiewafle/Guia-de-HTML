
//Se importan todos los elementos al bundle

import {page2JS} from'../page2/page2JS.js';
import {page2Links} from'../page2/page2Links.js';

import {page3JS} from'../page3/page3JS.js';
import {page3Links} from'../page3/page3Links.js';

import {endPage} from '../end/end.js';

import  '../../assets/bg.jpg';
import  '../../assets/bg1.jpg';
import  '../../assets/Font.ttf';


import '../css/backgrounds.css';
import '../css/progressBar.css';
import '../css/style.css';
import '../css/text.css';

export const page1Links = () => {
    let container = document.createElement("body-container")
    //document.body.innerHTML = "";

    let mDoor = document.createElement("b");
    let hallway = document.createElement("b");
    let escape = document.createElement("b");
    let hr = document.createElement("hr");
    let hr1 = document.createElement("hr");
    let bar = document.createElement("progress")

    let space = document.createElement("br");
    let space1 = document.createElement("br");

    let linkDoor = document.createElement("a");
    let linkHall = document.createElement("a");
    let linkEscape = document.createElement("a");

    let textDoor = document.createTextNode("Ir hacia la puerta principal");
    let textHall = document.createTextNode("Seguir a un costado de la casa");
    let textEsc = document.createTextNode("Huir");

    bar.max = 4;
    bar.value = 1;

    //bar.style = "max:4"

    //linkDoor.href = "../src/page3/page3.html";
    //linkHall.href = "../src/page2/page2.html";
    //linkEscape.href = "../src/altEnding/quitting.html"
    

    linkDoor.appendChild(textDoor);
    linkHall.appendChild(textHall);
    linkEscape.appendChild(textEsc);


    linkDoor.addEventListener("click", page3);
    linkHall.addEventListener("click", page2);
    linkEscape.addEventListener("click", end);

    mDoor.appendChild(linkDoor);
    hallway.appendChild(linkHall);
    escape.appendChild(linkEscape);

    

    document.body.appendChild(hr);
    document.body.appendChild(space);
    document.body.appendChild(mDoor);
    document.body.appendChild(space);
    document.body.appendChild(hallway);
    document.body.appendChild(space1);
    document.body.appendChild(escape);
    document.body.appendChild(hr1);
    document.body.appendChild(bar);




    function page3(){
        //alert("page3");
        
        page3JS();
        page3Links();

        
    }
    
    function page2(){
        //alert("page2");
        page2JS();
        page2Links();

        
    }

    function end(){
        
        //alert("quitting");

        endPage();

        
    }

    



};

