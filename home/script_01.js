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

//BUTTON OF MENU TO MOBILE
$('.btn-menu').on('click touchstart', function () {
   $('html').toggleClass('btn-menu-active');
});
//PAGE ABOUT
function front(){
   window.alert(`Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing.`);
}
function design(){
   window.alert(`Web design is the process of planning, conceptualizing, and arranging content online. Today, designing a website goes beyond aesthetics to include the website’s overall functionality. Web design also includes web apps, mobile apps, and user interface design.`);
}
function ui(){
   window.alert(`User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style. Designers aim to create interfaces which users find easy to use and pleasurable. UI design refers to graphical user interfaces`);
}
/* 
        
    
 ____      ____  _____    _____      ___  ____    ________   _______     
|_  _|    |_  _||_   _|  |_   _|    |_  ||_  _|  |_   __  | |_   __ \    
  \ \  /\  / /    | |      | |        | |_/ /      | |_ \_|   | |__) |   
   \ \/  \/ /     | |      | |   _    |  __'.      |  _| _    |  __ /    
    \  /\  /     _| |_    _| |__/ |  _| |  \ \_   _| |__/ |  _| |  \ \_  
     \/  \/     |_____|  |________| |____||____| |________| |____| |___| 
                                                                         
   
    
*/