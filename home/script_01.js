const text = `Hi! I'm Wilker       `;

let index = 0;

//PHASES OF THE PAGE HOME
function writeText(){
	document.getElementById("Title_apresentacion").innerHTML = text.slice(0, index);
	index++;

	if(index > text.length -1){
		index = 0;
	}

}
setInterval(writeText, 200);

//RELOAD ANIMATION CLICK ON BUTTON MENU
var home = document.querySelector(".Home_menu");

home.onclick = function efeito() {
   var e = document.getElementById("home");
   e.style.animation = "none";
   setTimeout(function() {
      e.style.animation = "";
   }, 100);
}

//RELOAD ANIMATION CLICK ON BUTTON MENU
var about = document.querySelector(".About_menu");

about.onclick = function efeito() {
   var b = document.getElementById("about");
   b.style.animation = "none";
   setTimeout(function() {
      b.style.animation = "";
   }, 100);
}

//RELOAD ANIMATION CLICK ON BUTTON MENU
var skill = document.querySelector(".Skill_menu");

skill.onclick = function efeito() {
   var c = document.getElementById("skill");
   c.style.animation = "none";
   setTimeout(function() {
      c.style.animation = "";
   }, 100);
}

//RELOAD ANIMATION CLICK ON BUTTON MENU

var work = document.querySelector('.Work_menu');
work.onclick = function efeito(){
   var d = document.getElementById("work");
   d.style.animation = "none";
   setTimeout(function(){
      d.style.animation = ""
   }, 100);
}