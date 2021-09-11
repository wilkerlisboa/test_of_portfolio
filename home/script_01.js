const text = `Hi! I'm Wilker Lisboa       `;

let index = 0;

//PHASES
function writeText(){
	document.getElementById("Title_apresentacion").innerHTML = text.slice(0, index);
	index++;

	if(index > text.length -1){
		index = 0;
	}

}
setInterval(writeText, 200);


var botaoAserAnimado = document.querySelector(".menu");

botaoAserAnimado.onclick = function efeito() {
   var e = document.getElementById("home");
   e.style.animation = "none";
   setTimeout(function() {
      e.style.animation = "";
   }, 100);
}