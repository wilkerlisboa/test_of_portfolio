const text = `Hi! I'm Wilker\n Web Developer       `;

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

//RELOAD ANIMATION CLICK ON BUTTON MENU

var contact = document.querySelector('.Contact_menu');
contact.onclick = function efeito(){
   var f = document.getElementById("contact");
   f.style.animation = "none";
   setTimeout(function(){
      f.style.animation = ""
   }, 100);
}


//SELECT
let selectEl = document.getElementsByTagName('select');
selectEl[0].addEventListener('change', function(){
   location.href = this.value;
})


/* 
        
    
 ____      ____  _____    _____      ___  ____    ________   _______     
|_  _|    |_  _||_   _|  |_   _|    |_  ||_  _|  |_   __  | |_   __ \    
  \ \  /\  / /    | |      | |        | |_/ /      | |_ \_|   | |__) |   
   \ \/  \/ /     | |      | |   _    |  __'.      |  _| _    |  __ /    
    \  /\  /     _| |_    _| |__/ |  _| |  \ \_   _| |__/ |  _| |  \ \_  
     \/  \/     |_____|  |________| |____||____| |________| |____| |___| 
                                                                         
   
    
*/