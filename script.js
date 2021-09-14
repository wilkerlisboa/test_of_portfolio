//PHASES
const text = "Wilker Lisboa       ";
let index = 0;
function reload(){
    document.querySelector(".name_of_person").innerHTML = text.slice(0, index);
    index++;
    if(index > text.length -1){
        index = 0;
    }
}
setInterval(reload, 200);