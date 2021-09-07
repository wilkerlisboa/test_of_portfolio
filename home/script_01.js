const text = "Hi!<br>I'm Wilker      ";

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