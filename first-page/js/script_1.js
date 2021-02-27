
let firstSlideContainer = 
document.getElementsByClassName("slide--content")[0];

let secondSlideContainer = 
document.getElementsByClassName("slide--content--one")[0];

let startCelebration = 
document.getElementById("start-celebration");

let secondCanvas = 
document.getElementsByClassName("second--canvas")[0];

secondSlideContainer.setAttribute("style","display:none");
secondCanvas.setAttribute("style","display:none");

let containerToggleOne = setTimeout(function(){
	// startCelebration.onclick();
	firstSlideContainer.setAttribute("style","display:none");
	secondSlideContainer.setAttribute("style","display:block");
},2500);


let removeFirstSlide = setTimeout(function(){
	document.getElementsByClassName("first--slide")[0].setAttribute("style","display:none;")
	secondCanvas.setAttribute("style","display:block");
},6500);



