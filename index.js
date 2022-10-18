
let firstclick = false;
let secondclick = false;
function ChangeColor(elem){
    if (elem.id === 'first'){
        if (!firstclick) {
            firstclick = true;
            elem.style.color = "#d1addf";
            elem.style.background = 'black';
        }
        else{
            firstclick = false;
            elem.style.color = "white";
            elem.style.background = "rgb(52, 52, 52)";
        }
    }
    if (elem.id === 'second'){
        if (!secondclick) {
            secondclick = true;
            elem.style.color = "#9c86de";
            elem.style.background = 'black';
        }
        else{
            secondclick = false;
            elem.style.color = "white";
            elem.style.background = "rgb(52, 52, 52)";
        }
    }
}
function add(){
    const elem = document.querySelector('#pic');
    const a = prompt("Enter your image link");
    if (a){
        elem.src = a;
    }
}

function zoomIn(){
    const elem = document.querySelector('#pic');
    elem.style.height = (parseInt(elem.style.height) + 20).toString() + "px";
    elem.style.width = (parseInt(elem.style.width) + 20).toString() + "px";
}

function zoomOut(){
    const elem = document.querySelector('#pic');
    elem.style.height = (parseInt(elem.style.height) - 20).toString() + "px";
    elem.style.width = (parseInt(elem.style.width) - 20).toString() + "px";
}

function clearImg(){
    const elem = document.querySelector('#pic');
    elem.src = "";
}