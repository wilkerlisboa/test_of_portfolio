const text = `Hi! I'm Wilker       `;

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

//RELOAD ANIMATION CLICK ON BUTTON
var botaoAserAnimado = document.querySelector(".Home_menu");

botaoAserAnimado.onclick = function efeito() {
   var e = document.getElementById("home");
   e.style.animation = "none";
   setTimeout(function() {
      e.style.animation = "";
   }, 100);
}

//RELOAD ANIMATION CLICK ON BUTTON
var TwobotaoAserAnimado = document.querySelector(".About_menu");

TwobotaoAserAnimado.onclick = function efeito() {
   var b = document.getElementById("about");
   b.style.animation = "none";
   setTimeout(function() {
      b.style.animation = "";
   }, 100);
}